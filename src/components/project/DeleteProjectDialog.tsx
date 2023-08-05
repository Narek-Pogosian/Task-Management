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
import useDeleteProject from "@/hooks/useDeleteProject";

type Props = {
  projectId: string;
  closeDropdown: () => void;
};

const DeleteProjectDialog = ({ projectId, closeDropdown }: Props) => {
  const [open, setOpen] = useState(false);
  const { isLoading, mutateAsync: deleteProject } = useDeleteProject(projectId);

  const onDelete = async () => {
    await deleteProject(projectId, {
      onSettled: () => {
        setOpen(false);
        closeDropdown();
      },
    });
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="dropdown"
          size="dropdown"
          className="hover:text-destructive"
        >
          <Trash className="w-4 h-4 mr-2" /> Delete
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
          <AlertDialogCancel onClick={closeDropdown}>Cancel</AlertDialogCancel>
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
export default DeleteProjectDialog;
