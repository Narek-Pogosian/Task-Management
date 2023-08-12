import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { Task } from "@/lib/types/types";
import EditTaskDialog from "./EditTaskDialog";
import DeleteTaskDialog from "./DeleteTaskDialog";

type Props = {
  task: Task;
};

const TaskMenu = ({ task }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="h-fit">
          <MoreHorizontal className="w-6 h-6" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-32 p-1">
        <EditTaskDialog task={task} />
        <DeleteTaskDialog task={task} />
      </PopoverContent>
    </Popover>
  );
};

export default TaskMenu;
