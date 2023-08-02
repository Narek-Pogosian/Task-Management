import { db } from "@/lib/db";
import { Task } from "@/lib/types/db.types";
import { PostgrestError } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";

const getUpcoming = async () => {
  const { data, error } = await db
    .from("Tasks")
    .select("*, projectId(*)")
    .gt("expires_at", new Date().toDateString());
  if (error) throw error;

  return data;
};

export default function useGetUpcoming() {
  return useQuery<Task[], PostgrestError>(["tasks", "upcoming"], getUpcoming);
}
