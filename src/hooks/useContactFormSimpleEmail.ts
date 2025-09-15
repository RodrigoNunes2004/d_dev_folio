import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const useContactFormSimpleEmail = () => {
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

      // Simulate sending email (for now)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success message
      toast({
        title: "Message received!",
        description:
          "Thank you for your message. I'll get back to you soon at rdefraganunes@gmail.com",
      });

      // Log the message to console (for now)
      console.log("Contact form submission:", {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toISOString(),
      });

      return true;
    } catch (error: any) {
      console.error("Error processing contact form:", error);

      toast({
        title: "Failed to process message",
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
