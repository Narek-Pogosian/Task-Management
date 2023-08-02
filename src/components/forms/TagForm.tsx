import { usePersistStore } from "@/lib/store/persistStore";
import { FormEvent, useState } from "react";
import { toast } from "../ui/use-toast";
import { Input } from "../ui/input";
import ColorSelect from "../tags/ColorSelect";
import { Alert, AlertDescription } from "../ui/alert";
import { Button } from "../ui/button";

type Props = {
  setIsOpen: (val: boolean) => void;
};

const TagForm = ({ setIsOpen }: Props) => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState<string>();
  const [error, setError] = useState(false);

  const { addTag } = usePersistStore();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!title.trim() || !color) {
      setError(true);
      return;
    }

    addTag({
      id: crypto.randomUUID(),
      label: title,
      value: color + title,
      color: color,
    });

    setIsOpen(false);

    toast({
      title: `New tag "${title}" created.`,
    });
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <Input
        placeholder="Tag name"
        name="tagName"
        onChange={(e) => setTitle(e.target.value)}
      />
      <ColorSelect setColor={setColor} color={color} />
      {error && (
        <Alert variant="destructive">
          <AlertDescription>Please fill in all fields.</AlertDescription>
        </Alert>
      )}
      <div className="flex justify-end gap-4">
        <Button
          variant="outline"
          type="button"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </Button>
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
};

export default TagForm;
