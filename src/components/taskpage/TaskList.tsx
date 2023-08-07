import { ConvertedTask } from "@/lib/types/types";
import TaskCard from "../tasks/TaskCard";
import { ClipboardX } from "lucide-react";

type Props = {
  tasks: ConvertedTask[];
};

const TaskList = ({ tasks }: Props) => {
  return (
    <div className="mt-4">
      <div className="space-y-2">
        {tasks.length === 0 ? (
          <div className="flex flex-col items-center gap-4 pt-14 text-muted-foreground">
            <ClipboardX className="w-20 h-20" strokeWidth={1} />
            <h2 className="text-3xl font-bold uppercase">No tasks</h2>
          </div>
        ) : (
          tasks?.map((task) => <TaskCard task={task} key={task.id} />)
        )}
      </div>
    </div>
  );
};

export default TaskList;
