import TaskList from "./TaskList";
import { convertTaskList } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import useFilterTasks from "@/hooks/useFilterTasks";
import TagSelect from "../tags/TagSelect";
import { Input } from "../ui/input";
import { TaskWithProject } from "@/lib/types/types";
import StatusSelect from "./StatusSelect";

type Props = {
  tasks: TaskWithProject[] | undefined;
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
  } = useFilterTasks(convertTaskList(tasks ?? []));

  return (
    <>
      <h2 className="mt-6 mb-1 font-semibold">Filters</h2>
      <div className="max-w-xl mb-8">
        <div className="flex flex-col gap-4 mb-4 xs:flex-row">
          <Input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title"
          />
          <TagSelect
            selectedTags={searchTags}
            setSelectedTags={setSearchTags}
            placeholder="Search by tag"
          />
        </div>
        <StatusSelect setStaus={setStatus} />
      </div>

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
