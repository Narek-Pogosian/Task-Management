import { db } from "@/lib/db";
import { useQuery } from "@tanstack/react-query";

const getProjectTasks = async (projectId: string) => {
  const { data: tasks, error: taskError } = await db
    .from("Tasks")
    .select("*, Projects(*)")
    .eq("projectId", projectId);

  if (taskError) throw taskError;

  return tasks;
};

export default function useGetProjectTasks(projectId: string) {
  return useQuery(["tasks", projectId], () => getProjectTasks(projectId));
}
