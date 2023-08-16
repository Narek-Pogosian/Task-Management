import { FormEvent, ReactNode, useState } from "react";
import ProjectSelect from "../project/ProjectSelect";
import CreateTagDialog from "../tags/CreateTagDialog";
import DatePicker from "../ui/date-picker";
import { Input } from "../ui/input";
import TagSelect from "../tags/TagSelect";
import type { TaskFormData } from "@/lib/types/types";
import { Label } from "../ui/label";
import Optional from "./Optional";

type Props = {
  children: ReactNode;
  initialData?: TaskFormData;
  submitFn: (e: FormEvent, data: TaskFormData) => void;
};

const TaskForm = ({ children, initialData, submitFn }: Props) => {
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [projectId, setProjectId] = useState(initialData?.projectId ?? null);
  const [expiresAt, setExpiresAt] = useState(initialData?.expiresAt);
  const [selectedTags, setSelectedTags] = useState(
    initialData?.selectedTags ?? []
  );

  return (
    <form
      className="grid gap-x-3 gap-y-6 @container"
      onSubmit={(e) =>
        submitFn(e, { title, projectId, expiresAt, selectedTags })
      }
    >
      <div>
        <Label htmlFor="title">
          Title{" "}
          <span className="ml-2 text-xs text-muted-foreground">Required</span>
        </Label>
        <Input
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="grid @md:grid-cols-4 gap-4">
        <div className="@md:col-span-3">
          <Label htmlFor="tags">
            Tags <Optional />
          </Label>
          {/* // ! Causes tabbing not to work in dialog */}
          <TagSelect
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            placeholder="Select tags"
          />
        </div>
        <div className="flex items-end">
          <CreateTagDialog full />
        </div>
      </div>

      <div className="grid gap-4 @md:grid-cols-2">
        <div>
          <Label>
            Expiration date <Optional />
          </Label>
          <DatePicker date={expiresAt} setDate={setExpiresAt} />
        </div>

        <div>
          <Label htmlFor="project">
            Project
            <Optional />
          </Label>
          <ProjectSelect setProject={setProjectId} projectId={projectId} />
        </div>
      </div>

      <div className="flex justify-end gap-4">
        {/* Action Buttons */}
        {children}
      </div>
    </form>
  );
};

export default TaskForm;
