import { ConvertedTask } from "@/lib/types/db.types";
import TagChip from "../tags/TagChip";
import DeleteTaskDialog from "./DeleteTaskDialog";

type Props = {
  task: ConvertedTask;
};

const TaskCard = ({ task }: Props) => {
  return (
    <div className="px-4 py-3 border-b">
      <div className="flex justify-between">
        <div className="pr-4 leading-5">
          <span className="block font-semibold">
            <span className="mr-4">{task.title}</span>
            <span className="text-sm text-muted-foreground">
              {task.projectId?.name}
            </span>
          </span>
          <span className="text-xs font-semibold text-muted-foreground ">
            {task.expires_at}
          </span>
        </div>
        <div>
          <DeleteTaskDialog task={task} />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {task.tags.map((tag) => (
          <TagChip text={tag.label} color={tag.color} key={tag.value} />
        ))}
      </div>
    </div>
  );
};

export default TaskCard;
