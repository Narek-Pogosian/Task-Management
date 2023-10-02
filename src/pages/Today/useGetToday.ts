import { taskKeys } from "@/lib/data/queryKeys";
import { db } from "@/lib/db";
import { DbTask } from "@/lib/types/types";
import { PostgrestError } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";

const getTodayTasks = async () => {
  const { data, error } = await db
    .from("Tasks")
    .select("*, Projects(*)")
    .eq("expires_at", new Date().toDateString())
    .order("expires_at", { ascending: true });

  if (error) throw error;

  return data;
};

export default function useGetToday() {
  return useQuery<DbTask[], PostgrestError>(
    ["tasks", taskKeys.today],
    getTodayTasks
  );
}
