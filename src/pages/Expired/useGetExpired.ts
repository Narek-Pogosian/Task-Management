import { db } from "@/lib/db";
import { TaskWithProject } from "@/lib/types/types";
import { PostgrestError } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";

const getExpired = async () => {
  const { data, error } = await db
    .from("Tasks")
    .select("*, Projects(*)")
    .lt("expires_at", new Date().toDateString());
  if (error) throw error;

  return data;
};

export default function useGetExpired() {
  return useQuery<TaskWithProject[], PostgrestError>(
    ["tasks", "expired"],
    getExpired
  );
}
