import { db } from "@/lib/db";
import { TaskWithProject } from "@/lib/types/types";
import { PostgrestError } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";

const getTodayTasks = async () => {
  const { data, error } = await db
    .from("Tasks")
    .select("*, Projects(*)")
    .eq("expires_at", new Date().toDateString());

  if (error) throw error;

  return data;
};

export default function useGetToday() {
  return useQuery<TaskWithProject[], PostgrestError>(
    ["tasks", "today"],
    getTodayTasks
  );
}
