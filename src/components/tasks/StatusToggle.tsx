import useToggleStatus from "@/hooks/useToggleStatus";
import { ConvertedTask } from "@/lib/types/types";
import { CheckCircle2, Circle, Loader2 } from "lucide-react";

type Props = {
  task: ConvertedTask;
};

const StatusToggle = ({ task }: Props) => {
  const { mutateAsync: toggleStatus, isLoading } = useToggleStatus();

  if (isLoading) {
    return <Loader2 className="w-6 h-6 animate-spin" />;
  }

  return (
    <button
      className="h-fit"
      onClick={() =>
        toggleStatus({ taskId: task.id, newStatus: !task.isCompleted })
      }
      aria-label={
        task.isCompleted ? "Task is completed" : "Task is not completed"
      }
    >
      <span className="sr-only">Toggle task status</span>
      {task.isCompleted ? (
        <CheckCircle2
          className="w-6 h-6 dark:text-emerald-400 text-emerald-600"
          // strokeWidth={1}
        />
      ) : (
        <Circle className="w-6 h-6 text-muted-foreground/40" strokeWidth={1} />
      )}
    </button>
  );
};

export default StatusToggle;
