import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "The name is short").max(100, "Long name"),
  email: z.email("Invalid email"),
  message: z
    .string()
    .min(10, "The message is short")
    .max(100, "The message is too long"),
});

export type ContactFormType = z.infer<typeof contactSchema>;
