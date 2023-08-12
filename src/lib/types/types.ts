import { Tag } from "../store/persistStore";
import { Database } from "./db.types";

export type Project = Database["public"]["Tables"]["Projects"]["Row"];
export type ITask = Database["public"]["Tables"]["Tasks"]["Row"];

export interface DbTask extends ITask {
  Projects?: Project | null;
}
export interface Task extends Omit<DbTask, "tags"> {
  tags: Tag[];
}

export interface TaskFormData {
  title: string;
  selectedTags: Tag[];
  expiresAt: Date | undefined;
  projectId: string | null;
  id?: string;
}
