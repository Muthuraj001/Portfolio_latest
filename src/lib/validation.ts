import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot exceed 50 characters")
    .regex(/^[a-zA-Z\s]*$/, "Name can only contain letter characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please provide a valid email address"),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(100, "Subject cannot exceed 100 characters"),
  message: z
    .string()
    .min(10, "Message must describe your intent in at least 10 characters")
    .max(1000, "Message is capped at 1000 characters to prevent spam"),
  projectType: z.enum([
    "fullstack",
    "frontend",
    "backend",
    "devops",
    "security-audit",
    "consulting",
    "other"
  ], {
    message: "Please select a valid Project Category"
  }),
  budgetRange: z.string().optional(),
  contactMethod: z.enum(["Email", "LinkedIn", "Other"], {
    message: "Choose a contact method"
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
