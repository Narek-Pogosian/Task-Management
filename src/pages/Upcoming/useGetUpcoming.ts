import { taskKeys } from "@/lib/data/queryKeys";
import { db } from "@/lib/db";
import { DbTask } from "@/lib/types/types";
import { PostgrestError } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";

const getUpcoming = async () => {
  const { data, error } = await db
    .from("Tasks")
    .select("*, Projects(*)")
    .gt("expires_at", new Date().toDateString())
    .order("expires_at", { ascending: true });
  if (error) throw error;

  return data;
};

export default function useGetUpcoming() {
  return useQuery<DbTask[], PostgrestError>(
    ["tasks", taskKeys.upcoming],
    getUpcoming
  );
}
