import { toast } from "@/components/ui/use-toast";
import { taskKeys } from "@/lib/data/queryKeys";
import { db } from "@/lib/db";
import { Task } from "@/lib/types/types";
import { getQueryKey } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const deleteTask = async (taskId: string) => {
  const { error, data } = await db
    .from("Tasks")
    .delete()
    .eq("id", taskId)
    .select("*")
    .single();

  if (error) {
    throw error;
  }

  return data;
};

export default function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation(deleteTask, {
    onSuccess: (data) => {
      queryClient.setQueryData(["tasks", taskKeys.all], (oldData?: Task[]) => {
        return oldData?.filter((task) => task.id !== data.id);
      });

      if (data.projectId) {
        queryClient.setQueryData(
          ["tasks", data.projectId],
          (oldData?: Task[]) => {
            return oldData?.filter((task) => task.id !== data.id);
          }
        );
      }

      if (data.expires_at) {
        const key = getQueryKey(data.expires_at);
        queryClient.setQueryData(["tasks", key], (oldData?: Task[]) => {
          return oldData?.filter((task) => task.id !== data.id);
        });
      }

      toast({ title: "Task deleted" });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Something went wrong",
      });
    },
  });
}
