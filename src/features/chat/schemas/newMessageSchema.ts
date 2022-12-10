import * as z from "zod";

export const newMessageSchema = z.object({
  message: z.string().trim().min(1),
});

export type NewMessageSchema = z.infer<typeof newMessageSchema>;
