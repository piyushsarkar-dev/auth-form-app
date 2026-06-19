import z from "zod";

export const registerSchema = z.object({
  fullName: z
    .string()
    .min(6, { error: "Minimum 6 Charecter" })
    .max(60, { error: "The Legnth Should be 60 Charecter" }),
  email: z.email({ error: "Invalid Email Adress" }),
  password: z
    .string()
    .min(8, { error: "Minimum 8 Charecter" })
    .max(60, { error: "Maximum 60 Charecter" }),
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.email({ error: "Recheck Your Email Adress" }),
  password: z
    .string()
    .min(8, { error: "Minimum 8 Charecter" })
    .max(60, { error: "Maximum 60 Charecter" }),
});
