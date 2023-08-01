import * as z from "zod";

export const taskSchema = z.object({
  title: z.string().min(1, { message: "Title is required." }),
  description: z.string().optional(),
  expires_at: z.date().optional(),
  project_id: z.string().optional(),
  tags: z
    .array(
      z.object({
        id: z.string(),
        color: z.string(),
        text: z.string(),
      })
    )
    .optional(),
});

export type TaskSchemaType = z.infer<typeof taskSchema>;
