import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Pencil } from "lucide-react";
import ProjectForm from "../forms/ProjectForm";
import { FormEvent, useState } from "react";
import { Project } from "@/lib/types/db.types";
import useEditProject from "@/hooks/useEditProject";
import LoadingButton from "../ui/loading-button";

type Props = {
  project: Project;
  closeDropdown: () => void;
};

const EditProjectDialog = ({ project, closeDropdown }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, mutate: editProject } = useEditProject();

  const closeDialog = () => {
    setIsOpen(false);
    closeDropdown();
  };

  const onSubmit = async (e: FormEvent, name: string) => {
    e.preventDefault();

    editProject(
      { name, projectId: project.id },
      {
        onSettled: () => {
          closeDialog();
        },
      }
    );
  };

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) {
          closeDialog();
        } else {
          setIsOpen(true);
        }
      }}
      open={isOpen}
    >
      <DialogTrigger asChild>
        <Button
          className="hover:text-indigo-500"
          size="dropdown"
          variant="dropdown"
          aria-label="Edit project"
        >
          <Pencil className="w-4 h-4 mr-2" /> Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-4">Edit the project name.</DialogTitle>
          <ProjectForm onSubmit={onSubmit} initialName={project.name}>
            <Button variant="outline" onClick={closeDialog} type="button">
              Cancel
            </Button>
            <LoadingButton
              isLoading={isLoading}
              loadingText="Editing"
              type="submit"
            >
              Edit
            </LoadingButton>
          </ProjectForm>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default EditProjectDialog;
