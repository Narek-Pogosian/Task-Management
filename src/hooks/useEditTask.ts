import { TaskFormData } from "@/components/forms/TaskForm";
import { toast } from "@/components/ui/use-toast";
import { db } from "@/lib/db";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const editTask = async ({
  expiresAt,
  projectId,
  selectedTags,
  title,
  id,
}: TaskFormData) => {
  const { data: auth, error: authError } = await db.auth.getSession();

  if (authError || !auth.session) {
    throw new Error("Unauthorized");
  }

  const { error, data } = await db
    .from("Tasks")
    .update({
      title,
      user_id: auth.session.user.id,
      expires_at: expiresAt?.toDateString(),
      projectId,
      tags: JSON.stringify(selectedTags),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
};

export default function useEditTask() {
  const queryClient = useQueryClient();
  return useMutation(editTask, {
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
      toast({
        title: "Task updated succesfully",
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
