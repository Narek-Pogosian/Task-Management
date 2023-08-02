import useFilterTasks from "@/hooks/useFilterTasks";
import { Task } from "@/lib/types/db.types";
import TaskCard from "../shared/TaskCard";

type Props = {
  tasks: Task[] | undefined;
};

const TaskList = ({ tasks }: Props) => {
  const { filteredTasks, setSearchQuery } = useFilterTasks(tasks!);

  return (
    <div>
      <input type="text" onChange={(e) => setSearchQuery(e.target.value)} />

      <div className="space-y-6">
        {filteredTasks?.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
