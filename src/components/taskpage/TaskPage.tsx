import TaskList from "./TaskList";
import useFilterTasks from "@/hooks/useFilterTasks";
import { Task } from "@/lib/types/types";
import Filters from "./Filters";
import SkeletonTask from "../tasks/SkeletonTask";
import TaskGrid from "./TaskGrid";

type Props = {
  tasks: Task[] | undefined;
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
        <TaskGrid>
          {new Array(6).fill(0).map((_, i) => (
            <SkeletonTask key={i} />
          ))}
        </TaskGrid>
      ) : isError ? (
        <div className="text-4xl font-bold text-center pt-14">
          Something went wrong.
        </div>
      ) : (
        <TaskList tasks={filteredTasks} />
      )}
    </>
  );
};

export default TaskPage;
