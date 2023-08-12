import { Task } from "@/lib/types/types";
import TagChip from "../tags/TagChip";
import StatusToggle from "./StatusToggle";
import TaskMenu from "./TaskMenu";
import { Link } from "react-router-dom";

type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  return (
    <div className="flex gap-3 p-4 border rounded-lg shadow-sm bg-card text-card-foreground">
      <StatusToggle task={task} />
      <div className="flex flex-col flex-1">
        <div className="flex justify-between gap-4 mb-1">
          <h3 className="font-semibold">{task.title}</h3>
          <TaskMenu task={task} />
        </div>
        <div className="flex flex-col flex-1 gap-1">
          {task.Projects && (
            <Link
              to={`/project/${task.projectId}`}
              className="text-xs font-semibold hover:underline underline-offset-2 w-fit"
            >
              {task.Projects?.name}
            </Link>
          )}
          {task.expires_at && (
            <span className="text-xs text-muted-foreground">
              Due date: {task.expires_at}
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-2 mt-5">
          {task.tags?.map((tag) => (
            <TagChip text={tag.label} color={tag.color} key={tag.value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
