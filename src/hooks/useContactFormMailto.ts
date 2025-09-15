import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const useContactFormMailto = () => {
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

      // Create mailto link
      const emailBody = `
Hello Rodrigo,

You have received a new message from your portfolio website:

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
This message was sent from your portfolio contact form.
      `.trim();

      const mailtoLink = `mailto:rdefraganunes@gmail.com?subject=Portfolio Contact: ${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(emailBody)}`;

      // Open email client
      window.open(mailtoLink, "_blank");

      toast({
        title: "Email client opened!",
        description:
          "Your default email client should open with the message ready to send.",
      });

      return true;
    } catch (error: any) {
      console.error("Error opening email client:", error);

      toast({
        title: "Failed to open email client",
        description:
          "Please try again or contact me directly at rdefraganunes@gmail.com",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitForm, isSubmitting };
};
