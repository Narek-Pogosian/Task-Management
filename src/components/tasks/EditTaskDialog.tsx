import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Pencil } from "lucide-react";
import { FormEvent, useState } from "react";
import TaskForm from "../forms/TaskForm";
import LoadingButton from "../ui/loading-button";
import { Task, TaskFormData } from "@/lib/types/types";
import useEditTask from "@/hooks/useEditTask";

type Props = {
  task: Task;
};

const EditTaskDialog = ({ task }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { mutateAsync, isLoading } = useEditTask();

  const handleSubmit = async (e: FormEvent, data: TaskFormData) => {
    e.preventDefault();

    if (!data.title.trim()) return;
    await mutateAsync({ ...data, id: task.id });
    setIsOpen(false);
  };

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button
          size="dropdown"
          variant="dropdown"
          className="hover:text-indigo-500"
        >
          <Pencil className="w-4 h-4 mr-2" /> Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-4">Edit task.</DialogTitle>
          <TaskForm
            submitFn={handleSubmit}
            initialData={{
              expiresAt: task.expires_at
                ? new Date(task.expires_at)
                : undefined,
              projectId: task.projectId,
              selectedTags: task.tags,
              title: task.title,
            }}
          >
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              Cancel
            </Button>
            <LoadingButton
              isLoading={isLoading}
              loadingText="Editing..."
              type="submit"
            >
              Edit
            </LoadingButton>
          </TaskForm>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EditTaskDialog;
