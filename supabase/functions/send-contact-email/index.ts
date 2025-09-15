// @ts-nocheck
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

// Rate limiting storage (in-memory for simple implementation)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Security configuration
const RATE_LIMIT = {
  maxRequests: 5,
  windowMs: 60 * 60 * 1000, // 1 hour
};

const FIELD_LIMITS = {
  name: 100,
  email: 254, // RFC 5321 email length limit
  subject: 200,
  message: 2000,
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
};

// Input validation functions
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= FIELD_LIMITS.email;
}

function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .trim();
}

function validateInput(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name || typeof data.name !== "string") {
    errors.push("Name is required");
  } else if (data.name.length > FIELD_LIMITS.name) {
    errors.push(`Name must be less than ${FIELD_LIMITS.name} characters`);
  }

  if (!data.email || typeof data.email !== "string") {
    errors.push("Email is required");
  } else if (!validateEmail(data.email)) {
    errors.push("Invalid email format");
  }

  if (!data.subject || typeof data.subject !== "string") {
    errors.push("Subject is required");
  } else if (data.subject.length > FIELD_LIMITS.subject) {
    errors.push(`Subject must be less than ${FIELD_LIMITS.subject} characters`);
  }

  if (!data.message || typeof data.message !== "string") {
    errors.push("Message is required");
  } else if (data.message.length > FIELD_LIMITS.message) {
    errors.push(`Message must be less than ${FIELD_LIMITS.message} characters`);
  }

  return { isValid: errors.length === 0, errors };
}

function checkRateLimit(clientIP: string): boolean {
  const now = Date.now();
  const clientData = rateLimitMap.get(clientIP);

  if (!clientData || now > clientData.resetTime) {
    // Reset or create new entry
    rateLimitMap.set(clientIP, {
      count: 1,
      resetTime: now + RATE_LIMIT.windowMs,
    });
    return true;
  }

  if (clientData.count >= RATE_LIMIT.maxRequests) {
    return false;
  }

  clientData.count++;
  return true;
}

function getClientIP(req: Request): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  const realIP = req.headers.get("x-real-ip");

  // Get the first IP from x-forwarded-for (comma-separated list)
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  if (realIP) {
    return realIP.split(",")[0].trim();
  }

  return "unknown";
}

serve(async (req) => {
  const startTime = Date.now();
  const clientIP = getClientIP(req);

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Log request attempt
    console.log(`Contact form submission attempt from IP: ${clientIP}`);

    // Rate limiting check
    if (!checkRateLimit(clientIP)) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Rate limit exceeded. Please try again later.",
        }),
        {
          status: 429,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
            "Retry-After": "3600", // 1 hour
          },
        }
      );
    }

    const rawData = await req.json();

    // Input validation
    const validation = validateInput(rawData);
    if (!validation.isValid) {
      console.warn(`Validation failed for IP ${clientIP}:`, validation.errors);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid input data",
          details: validation.errors,
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Sanitize inputs
    const name = sanitizeInput(rawData.name);
    const email = sanitizeInput(rawData.email);
    const subject = sanitizeInput(rawData.subject);
    const message = sanitizeInput(rawData.message);

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      throw new Error("Email service not configured");
    }

    const emailContent = {
      from: "onboarding@resend.dev",
      to: ["rdefraganunes@gmail.com"],
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>Submitted from IP: ${clientIP}</small></p>
      `,
    };

    console.log("Sending email with Resend API...");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailContent),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", responseData);
      throw new Error(`Failed to send email: ${response.statusText}`);
    }

    console.log(
      `Email sent successfully from IP ${clientIP}. Processing time: ${
        Date.now() - startTime
      }ms`
    );

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully",
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error(
      `Error in send-contact-email function from IP ${clientIP}:`,
      error
    );
    return new Response(
      JSON.stringify({
        success: false,
        error:
          "An error occurred while sending your message. Please try again.",
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
