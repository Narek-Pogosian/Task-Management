import { FormEvent, useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import ProjectSelect from "../project/ProjectSelect";
import CreateTagDialog from "../tags/CreateTagDialog";
import TagSelect from "../tags/TagSelect";
import { Tag } from "@/lib/store/persistStore";
import { db } from "@/lib/db";
import { toast } from "../ui/use-toast";
import LoadingButton from "../ui/loading-button";
import DatePicker from "../ui/date-picker";
import { useQueryClient } from "@tanstack/react-query";

const TaskForm = () => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState<Date>();
  const [project, setProject] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!title) return;
    setIsSubmitting(true);

    const { data: auth, error: authError } = await db.auth.getSession();

    if (authError || !auth.session) {
      throw new Error("Unauthorized");
    }

    const { error } = await db.from("Tasks").insert({
      projectId: project,
      title: title,
      description: description,
      expires_at: date?.toDateString(),
      tags: JSON.stringify(selectedTags),
      user_id: auth.session.user.id,
    });

    setIsSubmitting(false);

    if (!error) {
      queryClient.invalidateQueries(["tasks"], {
        refetchType: "active",
      });
      // queryClient.invalidateQueries({
      //   predicate: (query) => query.queryKey[0] === "tasks",
      // });
    }

    if (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
      });
    }
  };

  return (
    <form className="grid gap-4 @container" onSubmit={handleSubmit}>
      <Input
        id="title"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Description (optional)"
        rows={2}
        className="resize-none"
        onChange={(e) => setDescription(e.target.value)}
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
        <DatePicker date={date} setDate={setDate} />
        <ProjectSelect setProject={setProject} />
      </div>

      <div className="flex justify-end gap-4">
        <LoadingButton
          isLoading={isSubmitting}
          loadingText="Creating..."
          type="submit"
        >
          Create
        </LoadingButton>
      </div>
    </form>
  );
};

export default TaskForm;
