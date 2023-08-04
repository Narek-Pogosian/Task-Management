import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { ConvertedTask } from "@/lib/types/types";
import DeleteTaskDialog from "./DeleteTaskDialog";
import EditTaskDialog from "./EditTaskDialog";
import { Button } from "../ui/button";

type Props = {
  task: ConvertedTask;
};

const TaskMenu = ({ task }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="w-6 h-6" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-32 p-1">
        <DeleteTaskDialog task={task} />
        <EditTaskDialog task={task} />
      </PopoverContent>
    </Popover>
  );
};

export default TaskMenu;
