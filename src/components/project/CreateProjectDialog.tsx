import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import ProjectForm from "../forms/ProjectForm";
import { FormEvent, useState } from "react";
import useCreateProject from "@/hooks/useCreateProject";
import LoadingButton from "../ui/loading-button";

const CreateProjectDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, mutate: createProject } = useCreateProject();
  const [name, setName] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return;

    createProject(name, {
      onSettled: () => {
        setIsOpen(false);
        setName("");
      },
    });
  };

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button size="icon" variant="ghost">
          <span className="sr-only">Create Project</span>
          <Plus className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-4">Create a new project.</DialogTitle>
          <ProjectForm onSubmit={onSubmit} name={name} setName={setName}>
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              Cancel
            </Button>
            <LoadingButton
              isLoading={isLoading}
              loadingText="Creating..."
              disabled={!name.trim()}
              type="submit"
            >
              Create
            </LoadingButton>
          </ProjectForm>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProjectDialog;
