import { toast } from "@/components/ui/use-toast";
import { db } from "@/lib/db";
import { Project } from "@/lib/types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const createProject = async (name: string) => {
  const { data: auth, error: authError } = await db.auth.getSession();

  if (authError || !auth.session) {
    throw new Error("Unauthorized");
  }

  const { error, data } = await db
    .from("Projects")
    .insert({ name: name, user_id: auth.session.user.id })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
};

export default function useCreateProject() {
  const queryClient = useQueryClient();
  return useMutation(createProject, {
    onSuccess: (data) => {
      queryClient.setQueryData(["projects"], (oldData?: Project[]) => {
        return [...(oldData as Project[]), data];
      });

      toast({
        title: "New project created.",
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
