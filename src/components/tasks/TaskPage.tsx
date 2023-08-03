import { Task } from "@/lib/types/db.types";
import TaskList from "./TaskList";
import { convertTaskList } from "@/lib/utils";
import { Loader2 } from "lucide-react";

type Props = {
  tasks: Task[] | undefined;
  isLoading: boolean;
  isError: boolean;
};

const TaskPage = ({ tasks, isError, isLoading }: Props) => {
  if (isLoading) {
    return (
      <div className="flex justify-center pt-24">
        <Loader2 className="w-14 h-14 animate-spin" strokeWidth={3} />
      </div>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (tasks) return <TaskList tasks={convertTaskList(tasks)} />;
};

export default TaskPage;
