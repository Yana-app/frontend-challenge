import * as z from "zod";

export const signUpSchema = z.object({
  name: z.string().trim().min(1, { message: "Por favor, ingresa tu nombre" }),
  email: z
    .string()
    .trim()
    .email({ message: "Por favor, ingresa tu correo. Debe lucir similar a: nombre@email.com" }),
  password: z
    .string()
    .trim()
    .min(10, { message: "Por favor, ingresa una contraseña de al menos 10 caracteres" }),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
