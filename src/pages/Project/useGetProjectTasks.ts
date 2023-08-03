import { db } from "@/lib/db";
import { useQuery } from "@tanstack/react-query";

const getProjectTasks = async (projectId: string) => {
  const { data, error } = await db
    .from("Tasks")
    .select("*, Projects(*)")
    .eq("projectId", projectId);

  if (error) throw error;
  return data;
};

export default function useGetProjectTasks(projectId: string) {
  return useQuery(["tasks", projectId], () => getProjectTasks(projectId));
}
