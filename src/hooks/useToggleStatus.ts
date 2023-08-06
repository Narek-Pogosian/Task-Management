import { toast } from "@/components/ui/use-toast";
import { db } from "@/lib/db";
import { ConvertedTask } from "@/lib/types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const toggleStatus = async ({
  taskId,
  newStatus,
}: {
  taskId: string;
  newStatus: boolean;
}) => {
  const { data: auth, error: authError } = await db.auth.getSession();

  if (authError || !auth.session) {
    throw new Error("Unauthorized");
  }

  const { error, data } = await db
    .from("Tasks")
    .update({
      isCompleted: newStatus,
    })
    .eq("id", taskId)
    .select("id, isCompleted")
    .single();

  if (error) {
    throw error;
  }

  return data;
};

export default function useToggleStatus() {
  const queryClient = useQueryClient();
  return useMutation(toggleStatus, {
    onSuccess: ({ id, isCompleted }) => {
      queryClient.setQueriesData(["tasks"], (oldData?: ConvertedTask[]) => {
        return oldData?.map((task) =>
          task.id === id ? { ...task, isCompleted } : task
        );
      });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Status could not be updated",
      });
    },
  });
}
