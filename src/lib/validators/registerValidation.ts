import * as z from "zod";

export const registerSchema = z
  .object({
    email: z.string().email({ message: "Invalid email" }).trim(),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" })
      .trim(),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirming password is required" })
      .trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
  });

export type RegisterSchemaType = z.infer<typeof registerSchema>;
