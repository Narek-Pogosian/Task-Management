import TaskList from "./TaskList";
import { Loader2 } from "lucide-react";
import useFilterTasks from "@/hooks/useFilterTasks";
import { ConvertedTask } from "@/lib/types/types";
import Filters from "./Filters";

type Props = {
  tasks: ConvertedTask[] | undefined;
  isLoading: boolean;
  isError: boolean;
};

const TaskPage = ({ tasks, isError, isLoading }: Props) => {
  const {
    filteredTasks,
    setSearchQuery,
    searchTags,
    setSearchTags,
    setStatus,
  } = useFilterTasks(tasks ?? []);

  return (
    <>
      <Filters
        searchTags={searchTags}
        setSearchQuery={setSearchQuery}
        setSearchTags={setSearchTags}
        setStatus={setStatus}
      />

      {isLoading ? (
        <div className="flex justify-center pt-14">
          <Loader2 className="w-14 h-14 animate-spin" strokeWidth={3} />
        </div>
      ) : isError ? (
        <div className="text-4xl font-bold text-center pt-14 text-rose-500">
          Error
        </div>
      ) : (
        <TaskList tasks={filteredTasks} />
      )}
    </>
  );
};

export default TaskPage;
