import { db } from "@/lib/db";
import { TaskWithProject } from "@/lib/types/types";
import { PostgrestError } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";

const getAllTasks = async () => {
  const { data, error } = await db.from("Tasks").select("*, Projects(*)");

  if (error) throw error;

  return data;
};

export default function useGetAllTasks() {
  return useQuery<TaskWithProject[], PostgrestError>(
    ["tasks", "all"],
    getAllTasks
  );
}
