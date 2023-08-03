import useFilterTasks from "@/hooks/useFilterTasks";
import { ConvertedTask } from "@/lib/types/db.types";
import TaskCard from "./TaskCard";
import { Input } from "../ui/input";
import TagSelect from "../tags/TagSelect";

type Props = {
  tasks: ConvertedTask[];
};

const TaskList = ({ tasks }: Props) => {
  const { filteredTasks, setSearchQuery, searchTags, setSearchTags } =
    useFilterTasks(tasks);

  return (
    <div className="mt-4">
      <h2 className="mb-1 font-semibold">Filters</h2>
      <div className="flex flex-col max-w-xl gap-4 mb-8 xs:flex-row">
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

      <div className="space-y-2">
        {filteredTasks?.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
