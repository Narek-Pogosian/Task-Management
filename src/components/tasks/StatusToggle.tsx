import useToggleStatus from "@/hooks/useToggleStatus";
import { ConvertedTask } from "@/lib/types/types";
import { CheckCircle2, Circle, Loader } from "lucide-react";

type Props = {
  task: ConvertedTask;
};

const StatusToggle = ({ task }: Props) => {
  const { mutateAsync: toggleStatus, isLoading } = useToggleStatus();

  if (isLoading) {
    return <Loader className="w-6 h-6 animate-spin" />;
  }

  return (
    <button
      className="h-fit"
      onClick={() =>
        toggleStatus({ taskId: task.id, newStatus: !task.isCompleted })
      }
    >
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
