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
import TaskForm, { TaskFormData } from "../forms/TaskForm";
import LoadingButton from "../ui/loading-button";
import { ConvertedTask } from "@/lib/types/types";
import useEditTask from "@/hooks/useEditTask";

type Props = {
  task: ConvertedTask;
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
        <Button size="icon" variant="outline">
          <span className="sr-only">Edit Task</span>
          <Pencil className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-4">Create a new task.</DialogTitle>
          <TaskForm
            submitFn={handleSubmit}
            initialData={{
              expiresAt: new Date(task.expires_at!),
              projectId: task.projectId,
              selectedTags: task.tags,
              title: task.title,
            }}
          >
            <LoadingButton isLoading={isLoading} loadingText="Editing...">
              Edit
            </LoadingButton>
          </TaskForm>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EditTaskDialog;
