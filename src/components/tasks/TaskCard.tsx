import { ConvertedTask } from "@/lib/types/types";
import TagChip from "../tags/TagChip";
import EditTaskDialog from "./EditTaskDialog";
import DeleteTaskDialog from "./DeleteTaskDialog";
import StatusToggle from "./StatusToggle";

type Props = {
  task: ConvertedTask;
};

const TaskCard = ({ task }: Props) => {
  return (
    <div className="flex gap-3 px-2 pt-4 pb-6 border-b">
      <StatusToggle task={task} />
      <div className="flex justify-between flex-1">
        <div className="pr-4">
          <span className="block font-semibold">
            <span className="mr-4 text-sm md:text-base ">{task.title}</span>
            <span className="block text-xs md:text-sm text-muted-foreground sm:inline">
              {task.Projects?.name}
            </span>
          </span>
          <span className="text-xs font-semibold text-muted-foreground ">
            {task.expires_at}
          </span>
          <div className="flex flex-wrap gap-2 mt-4">
            {task.tags?.map((tag) => (
              <TagChip text={tag.label} color={tag.color} key={tag.value} />
            ))}
          </div>
        </div>

        <div className="flex gap-1 md:gap-2">
          <EditTaskDialog task={task} />
          <DeleteTaskDialog task={task} />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
