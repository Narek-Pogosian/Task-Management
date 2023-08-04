import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { FormEvent, useState } from "react";
import TaskForm, { TaskFormData } from "../forms/TaskForm";
import useCreateTask from "@/hooks/useCreateTask";
import LoadingButton from "../ui/loading-button";

const CreateTaskDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { isLoading, mutateAsync } = useCreateTask();

  const handleSubmit = async (e: FormEvent, data: TaskFormData) => {
    e.preventDefault();

    if (!data.title.trim()) return;
    await mutateAsync(data);
    setIsOpen(false);
  };

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          <span className="sr-only">Create Task</span>
          <Plus className="w-5 h-5 mr-2" /> Task
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-4">Create a new task.</DialogTitle>
          <TaskForm submitFn={handleSubmit}>
            <LoadingButton isLoading={isLoading} loadingText="Creating...">
              Create
            </LoadingButton>
          </TaskForm>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTaskDialog;
