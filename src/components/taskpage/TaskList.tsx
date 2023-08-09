import { ConvertedTask } from "@/lib/types/types";
import TaskCard from "../tasks/TaskCard";

type Props = {
  tasks: ConvertedTask[];
};

const TaskList = ({ tasks }: Props) => {
  if (tasks.length === 0) {
    return (
      <div className="text-4xl font-bold text-center pt-14">
        Task list is empty.
      </div>
    );
  }

  return (
    <div className="@container">
      <div className="grid gap-6 @4xl:grid-cols-2">
        {tasks?.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
