import { db } from "@/lib/db";
import { Project } from "@/lib/types/types";
import { PostgrestError } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";

const getProjects = async () => {
  const { data, error } = await db.from("Projects").select("*");

  if (error) throw error;

  return data;
};

export default function useGetProjects() {
  return useQuery<Project[], PostgrestError>(["projects"], getProjects);
}
