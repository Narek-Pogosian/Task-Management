import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import TagForm from "../forms/TagForm";

const CreateTagDialog = ({ full }: { full?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={`h-10 ${full ? "w-full" : "w-fit"}`}
        >
          Create Tag
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a tag.</DialogTitle>
        </DialogHeader>
        <TagForm setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateTagDialog;
