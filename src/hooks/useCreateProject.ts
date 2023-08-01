import { toast } from "@/components/ui/use-toast";
import { db } from "@/lib/db";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const createProject = async (name: string) => {
  const { data: auth, error: authError } = await db.auth.getSession();

  if (authError || !auth.session) {
    throw new Error("Unauthorized");
  }

  const { error } = await db
    .from("Projects")
    .insert({ name: name, user_id: auth.session.user.id });

  if (error) {
    throw error;
  }

  return true;
};

export default function useCreateProject() {
  const queryClient = useQueryClient();
  return useMutation(createProject, {
    onSuccess: () => {
      queryClient.refetchQueries(["projects"]);
      toast({
        title: "Project created succesfully",
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
