import { ConvertedTask } from "@/lib/types/types";
import { ClipboardX } from "lucide-react";
import TaskCard from "../tasks/TaskCard";

type Props = {
  tasks: ConvertedTask[];
};

const TaskList = ({ tasks }: Props) => {
  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 pt-14 text-muted-foreground">
        <ClipboardX className="w-20 h-20" strokeWidth={1} />
        <h2 className="text-3xl font-bold uppercase">No tasks</h2>
      </div>
    );
  }

  return (
    <div className="@container">
      <div className="grid gap-6 @3xl:grid-cols-2">
        {tasks?.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
