import { toast } from "@/components/ui/use-toast";
import { db } from "@/lib/db";
import type { TaskFormData } from "@/lib/types/types";
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

  const { error } = await db
    .from("Tasks")
    .update({
      title,
      user_id: auth.session.user.id,
      expires_at: expiresAt?.toDateString(),
      projectId,
      tags: JSON.stringify(selectedTags),
    })
    .eq("id", id);

  if (error) {
    throw error;
  }

  return true;
};

export default function useEditTask() {
  const queryClient = useQueryClient();
  return useMutation(editTask, {
    onSuccess: () => {
      // TODO: use query cache instead, had problems with when the project is changed
      queryClient.invalidateQueries(["tasks"], {
        refetchType: "active",
      });

      toast({ title: "Task edited" });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Something went wrong",
      });
    },
  });
}
