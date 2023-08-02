import { Task } from "@/lib/types/db.types";
import TaskList from "./TaskList";
import { convertTaskList } from "@/lib/utils";

type Props = {
  tasks: Task[] | undefined;
  isLoading: boolean;
  isError: boolean;
};

const TaskPage = ({ tasks, isError, isLoading }: Props) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (tasks) return <TaskList tasks={convertTaskList(tasks)} />;
};

export default TaskPage;
