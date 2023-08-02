import { toast } from "@/components/ui/use-toast";
import { db } from "@/lib/db";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

const deleteProject = async (projectId: string) => {
  const { error } = await db.from("Projects").delete().eq("id", projectId);

  if (error) {
    throw error;
  }

  return true;
};

export default function useDeleteProject(projectId: string) {
  const queryClient = useQueryClient();
  const { projectId: currentProjectId } = useParams();
  const navigate = useNavigate();

  return useMutation(deleteProject, {
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
      queryClient.invalidateQueries(["projects"]);
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
