import { toast } from "@/components/ui/use-toast";
import { db } from "@/lib/db";
import { DbTask, Project } from "@/lib/types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

const deleteProject = async (projectId: string) => {
  const { error, data } = await db
    .from("Projects")
    .delete()
    .eq("id", projectId)
    .select("id")
    .single();

  if (error) {
    throw error;
  }

  return data;
};

export default function useDeleteProject(projectId: string) {
  const queryClient = useQueryClient();
  const { projectId: currentProjectId } = useParams();
  const navigate = useNavigate();

  return useMutation(deleteProject, {
    onSuccess: ({ id }) => {
      queryClient.setQueryData(["projects"], (oldData?: Project[]) => {
        return oldData?.filter((project) => project.id !== id);
      });

      queryClient.setQueriesData(["tasks"], (oldData?: DbTask[]) => {
        return oldData?.filter((task) => task.projectId !== id);
      });

      toast({ title: "Project deleted" });

      if (currentProjectId === projectId) {
        navigate("/", { replace: true });
      }
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Something went wrong",
      });
    },
  });
}
