import { Task } from "@/lib/types/db.types";
import TaskList from "./TaskList";

type Props = {
  tasks: Task[] | undefined;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
};

const TaskPage = ({ tasks, isError, isLoading, isSuccess }: Props) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (isSuccess) {
    return <TaskList tasks={tasks} />;
  }
};

export default TaskPage;
