import { FormEvent, ReactNode, useState } from "react";
import ProjectSelect from "../project/ProjectSelect";
import CreateTagDialog from "../tags/CreateTagDialog";
import DatePicker from "../ui/date-picker";
import { Input } from "../ui/input";
import TagSelect from "../tags/TagSelect";
import type { TaskFormData } from "@/lib/types/types";

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
      className="grid gap-4 @container"
      onSubmit={(e) =>
        submitFn(e, { title, projectId, expiresAt, selectedTags })
      }
    >
      <Input
        id="title"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="grid @md:grid-cols-4 gap-4">
        <div className="@md:col-span-3">
          <TagSelect
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            placeholder="Select tags"
          />
        </div>
        <CreateTagDialog full />
      </div>

      <div className="grid gap-4 @md:grid-cols-2">
        <DatePicker date={expiresAt} setDate={setExpiresAt} />
        <ProjectSelect setProject={setProjectId} projectId={projectId} />
      </div>

      <div className="flex justify-end gap-4">
        {/* Action Buttons */}
        {children}
      </div>
    </form>
  );
};

export default TaskForm;
