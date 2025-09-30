// src/modules/auth/validators/user.validator.ts
import { z } from "zod";

// Validation schema for register
export const registerSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .max(50, "Name must not exceed 50 characters"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(100, "Password must not exceed 100 characters"),
});

// Type from schema
export type RegisterPayload = z.infer<typeof registerSchema>;
