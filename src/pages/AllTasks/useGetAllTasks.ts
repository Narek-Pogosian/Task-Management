import { taskKeys } from "@/lib/data/queryKeys";
import { db } from "@/lib/db";
import { DbTask } from "@/lib/types/types";
import { PostgrestError } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";

const getAllTasks = async () => {
  const { data, error } = await db.from("Tasks").select("*, Projects(*)");

  if (error) throw error;

  return data;
};

export default function useGetAllTasks() {
  return useQuery<DbTask[], PostgrestError>(
    ["tasks", taskKeys.all],
    getAllTasks
  );
}
