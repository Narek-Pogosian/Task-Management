import { db } from "@/lib/db";
import { TaskWithProject } from "@/lib/types/types";
import { PostgrestError } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";

const getUpcoming = async () => {
  const { data, error } = await db
    .from("Tasks")
    .select("*, Projects(*)")
    .gt("expires_at", new Date().toDateString());
  if (error) throw error;

  return data;
};

export default function useGetUpcoming() {
  return useQuery<TaskWithProject[], PostgrestError>(
    ["tasks", "upcoming"],
    getUpcoming
  );
}
