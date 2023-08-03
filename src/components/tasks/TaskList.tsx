import { ConvertedTask } from "@/lib/types/types";
import TaskCard from "./TaskCard";

type Props = {
  tasks: ConvertedTask[];
};

const TaskList = ({ tasks }: Props) => {
  return (
    <div className="mt-4">
      <div className="space-y-2">
        {tasks?.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
