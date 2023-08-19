import { Bird } from "lucide-react";
import CreateTaskDialog from "../tasks/CreateTaskDialog";

const NoTasksMessage = () => {
  return (
    <div className="flex flex-col items-center pt-4">
      <Bird className="w-40 h-40 text-slate-400" strokeWidth={1} />
      <h2 className="mb-8 text-3xl font-bold text-slate-400">No tasks</h2>
      <CreateTaskDialog />
    </div>
  );
};

export default NoTasksMessage;
