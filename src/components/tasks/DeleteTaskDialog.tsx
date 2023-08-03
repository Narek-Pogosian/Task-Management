import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import LoadingButton from "../ui/loading-button";
import { Trash } from "lucide-react";
import { Button } from "../ui/button";
import useDeleteTask from "@/hooks/useDeleteTask";
import { ConvertedTask } from "@/lib/types/types";

type Props = {
  task: ConvertedTask;
};

const DeleteTaskDialog = ({ task }: Props) => {
  const [open, setOpen] = useState(false);
  const { isLoading, mutate: deleteProject } = useDeleteTask();

  const onDelete = () => {
    deleteProject(task.id, {
      onSuccess: () => {
        setOpen(false);
      },
    });
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="icon">
          <span className="sr-only">Delete Task</span>
          <Trash className="w-4 h-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. The project and all its tasks will be
            deleted.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <LoadingButton
            aria-label="Delete Project"
            variant="destructive"
            isLoading={isLoading}
            loadingText="Deleting..."
            onClick={onDelete}
          >
            Delete
          </LoadingButton>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default DeleteTaskDialog;
