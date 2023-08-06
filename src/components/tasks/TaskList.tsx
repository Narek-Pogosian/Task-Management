import { ConvertedTask } from "@/lib/types/types";
import TaskCard from "./TaskCard";
import { ClipboardX } from "lucide-react";

type Props = {
  tasks: ConvertedTask[];
};

const TaskList = ({ tasks }: Props) => {
  return (
    <div className="mt-4">
      <div className="space-y-2">
        {tasks.length === 0 ? (
          <div className="flex flex-col items-center gap-4 pt-20">
            <ClipboardX className="w-20 h-20" />
            <h2 className="text-3xl">No tasks</h2>
          </div>
        ) : (
          tasks?.map((task) => <TaskCard task={task} key={task.id} />)
        )}
      </div>
    </div>
  );
};

export default TaskList;
