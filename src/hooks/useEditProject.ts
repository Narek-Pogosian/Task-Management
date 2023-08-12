import { toast } from "@/components/ui/use-toast";
import { db } from "@/lib/db";
import { Project, DbTask } from "@/lib/types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateProject = async ({
  name,
  projectId,
}: {
  name: string;
  projectId: string;
}) => {
  const { error, data } = await db
    .from("Projects")
    .update({ name: name })
    .eq("id", projectId)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
};

export default function useEditProject() {
  const queryClient = useQueryClient();
  return useMutation(updateProject, {
    onSuccess: (newProject) => {
      queryClient.setQueryData(["projects"], (oldData?: Project[]) => {
        return oldData?.map((project) =>
          project.id === newProject.id ? newProject : project
        );
      });

      queryClient.setQueriesData(["tasks"], (oldData?: DbTask[]) => {
        return oldData?.map((task) =>
          task.Projects?.id === newProject.id
            ? { ...task, Projects: newProject }
            : task
        );
      });

      toast({
        title: "Project updated succesfully",
      });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Something went wrong",
      });
    },
  });
}
