import { TaskFormData } from "@/components/forms/TaskForm";
import { toast } from "@/components/ui/use-toast";
import { db } from "@/lib/db";
import { getQueryKey } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const createTask = async ({
  expiresAt,
  projectId,
  selectedTags,
  title,
}: TaskFormData) => {
  const { data: auth, error: authError } = await db.auth.getSession();

  if (authError || !auth.session) {
    throw new Error("Unauthorized");
  }

  const { error, data } = await db
    .from("Tasks")
    .insert({
      title,
      user_id: auth.session.user.id,
      expires_at: expiresAt?.toDateString(),
      projectId,
      tags: JSON.stringify(selectedTags),
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
};

export default function useCreateTask() {
  const queryClient = useQueryClient();
  return useMutation(createTask, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(["tasks", "all"]);

      if (data.expires_at) {
        const key = getQueryKey(data.expires_at);
        queryClient.invalidateQueries(["tasks", key]);
      }

      if (data.projectId) {
        queryClient.invalidateQueries(["tasks", data.projectId]);
      }

      toast({
        title: "Task created succesfully",
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
