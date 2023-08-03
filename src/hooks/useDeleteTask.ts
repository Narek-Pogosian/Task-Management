import { toast } from "@/components/ui/use-toast";
import { db } from "@/lib/db";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const deleteTask = async (taskId: string) => {
  const { error } = await db.from("Tasks").delete().eq("id", taskId);

  if (error) {
    throw error;
  }

  return true;
};

export default function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation(deleteTask, {
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => {
          return query.queryKey[0] === "tasks";
        },
        refetchType: "active",
      });

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
