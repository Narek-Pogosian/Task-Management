import { db } from "@/lib/db";
import { Task } from "@/lib/types/db.types";
import { PostgrestError } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";

const getAllTasks = async () => {
  const { data, error } = await db.from("Tasks").select("*");

  if (error) throw error;

  return data;
};

export default function useGetAllTasks() {
  return useQuery<Task[], PostgrestError>(["tasks", "all"], getAllTasks);
}
