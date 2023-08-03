import { FormEvent, ReactNode } from "react";
import { Input } from "../ui/input";

type Props = {
  children: ReactNode;
  onSubmit: (e: FormEvent, name: string) => Promise<void>;
  name: string;
  setName: (name: string) => void;
};

const NewProjectForm = ({ children, onSubmit, name, setName }: Props) => {
  return (
    <form className="grid gap-6" onSubmit={(e) => onSubmit(e, name)}>
      <div>
        <label htmlFor="name" className="block pl-1 mb-2 text-sm font-semibold">
          Project Name
        </label>
        <Input
          id="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
      </div>

      <div className="flex justify-end gap-4">
        {/* Action Buttons */}
        {children}
      </div>
    </form>
  );
};

export default NewProjectForm;
