import { z } from "zod";

export const registerSchema = z.object({
  fullName: z
    .string()
    .min(6, { error: "Minimum 6 Characters" })
    .max(60, { error: "Maximum 60 Characters" }),

  email: z.string().email({
    error: "Invalid Email Address",
  }),

  password: z
    .string()
    .min(8, { error: "Minimum 8 Characters" })
    .max(60, { error: "Maximum 60 Characters" }),
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().email({
    error: "Recheck Your Email Address",
  }),

  password: z
    .string()
    .min(8, { error: "Minimum 8 Characters" })
    .max(60, { error: "Maximum 60 Characters" }),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
