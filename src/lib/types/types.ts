import { Tag } from "../store/persistStore";
import { Database } from "./db.types";

export type Project = Database["public"]["Tables"]["Projects"]["Row"];
export type Task = Database["public"]["Tables"]["Tasks"]["Row"];

export interface TaskWithProject extends Task {
  Projects?: Project | null;
}
export interface ConvertedTask extends Omit<TaskWithProject, "tags"> {
  tags: Tag[];
}

export interface TaskFormData {
  title: string;
  selectedTags: Tag[];
  expiresAt: Date | undefined;
  projectId: string | null;
  id?: string;
}
