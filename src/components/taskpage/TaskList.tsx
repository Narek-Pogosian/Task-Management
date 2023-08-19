import { Task } from "@/lib/types/types";
import TaskCard from "../tasks/TaskCard";
import TaskGrid from "./TaskGrid";
import NoTasksMessage from "./NoTasksMessage";

type Props = {
  tasks: Task[];
};

const TaskList = ({ tasks }: Props) => {
  if (tasks.length === 0) {
    return <NoTasksMessage />;
  }

  return (
    <TaskGrid>
      {tasks?.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </TaskGrid>
  );
};

export default TaskList;
