import { toast } from "@/components/ui/use-toast";
import { db } from "@/lib/db";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateProject = async ({
  name,
  projectId,
}: {
  name: string;
  projectId: string;
}) => {
  const { error } = await db
    .from("Projects")
    .update({ name: name })
    .eq("id", projectId);

  if (error) {
    throw error;
  }

  return true;
};

export default function useEditProject() {
  const queryClient = useQueryClient();
  return useMutation(updateProject, {
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
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
