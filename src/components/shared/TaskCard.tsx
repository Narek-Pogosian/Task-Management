import { ConvertedTask } from "@/lib/types/db.types";

type Props = {
  task: ConvertedTask;
};

const TaskCard = ({ task }: Props) => {
  return <div>{task.title}</div>;
};

export default TaskCard;
