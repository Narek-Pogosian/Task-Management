import { ConvertedTask } from "@/lib/types/db.types";
import TagChip from "../shared/TagChip";
import { Button } from "../ui/button";
import { Pencil, Trash } from "lucide-react";

type Props = {
  task: ConvertedTask;
};

const TaskCard = ({ task }: Props) => {
  return (
    <div className="px-4 py-3 border-b">
      <div className="flex justify-between">
        <div className="leading-4">
          <span className="block font-semibold">{task.title}</span>
          <span className="text-xs text-muted-foreground ">
            {task.expires_at}
          </span>
        </div>
        <div>
          <Button variant="ghost" size="icon">
            <Pencil className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Trash className="w-5 h-5" />
          </Button>
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
