import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ValidationError {
  success: false;
  error: string;
  details?: string[];
}

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitForm = async (formData: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Basic client-side validation
      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.subject.trim() ||
        !formData.message.trim()
      ) {
        toast({
          title: "Validation Error",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        return false;
      }

      if (formData.name.length > 100) {
        toast({
          title: "Validation Error",
          description: "Name must be less than 100 characters.",
          variant: "destructive",
        });
        return false;
      }

      if (formData.subject.length > 200) {
        toast({
          title: "Validation Error",
          description: "Subject must be less than 200 characters.",
          variant: "destructive",
        });
        return false;
      }

      if (formData.message.length > 2000) {
        toast({
          title: "Validation Error",
          description: "Message must be less than 2000 characters.",
          variant: "destructive",
        });
        return false;
      }

      console.log("Calling Supabase function with data:", formData);

      const { data, error } = await supabase.functions.invoke(
        "send-contact-email",
        {
          body: formData,
        }
      );

      console.log("Supabase function response:", { data, error });

      if (error) {
        console.error("Supabase function error:", error);
        throw error;
      }

      // Handle server-side validation errors
      if (data && !data.success) {
        const validationError = data as ValidationError;
        const errorMessage = validationError.details
          ? validationError.details.join(", ")
          : validationError.error;

        toast({
          title: "Validation Error",
          description: errorMessage,
          variant: "destructive",
        });
        return false;
      }

      return true;
    } catch (error: any) {
      console.error("Error sending contact form:", error);

      // Handle specific error cases
      if (
        error.message?.includes("429") ||
        error.message?.includes("Rate limit")
      ) {
        toast({
          title: "Too many requests",
          description:
            "You've sent too many messages recently. Please wait before trying again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Failed to send message",
          description:
            "There was an error sending your message. Please try again or contact me directly.",
          variant: "destructive",
        });
      }
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitForm, isSubmitting };
};
