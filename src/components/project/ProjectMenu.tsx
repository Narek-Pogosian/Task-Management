import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import EditProjectDialog from "./EditProjectDialog";
import DeleteProjectDialog from "./DeleteProjectDialog";
import { Project } from "@/lib/types/db.types";
import { useState } from "react";
import { MoreHorizontal } from "lucide-react";

type Props = {
  project: Project;
};

const ProjectMenu = ({ project }: Props) => {
  const [open, setOpen] = useState(false);

  const closeDropdown = () => {
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className={`lg:group-hover:opacity-100 focus-visible:opacity-100 ${
            open ? "opacity-100" : "lg:opacity-0"
          }`}
        >
          <MoreHorizontal className="w-6 h-6" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-32 p-1">
        <EditProjectDialog project={project} closeDropdown={closeDropdown} />
        <DeleteProjectDialog
          projectId={project.id}
          closeDropdown={closeDropdown}
        />
      </PopoverContent>
    </Popover>
  );
};

export default ProjectMenu;
