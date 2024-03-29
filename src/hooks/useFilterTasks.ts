import { Tag } from "@/lib/store/persistStore";
import { Task } from "@/lib/types/types";
import { useMemo, useState } from "react";

export type Status = "all" | "true" | "false";

export default function useFilterTasks(tasks: Task[]) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTags, setSearchTags] = useState<Tag[]>([]);
  const [status, setStatus] = useState<Status>("all");

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      return (
        //  check if we have searchquery or searchtags to do comparison
        (searchQuery.trim() === "" ||
          task.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (searchTags.length === 0 ||
          searchTags.every(
            //  checks for every searchtag if the task contains all of them
            (tag) => task.tags.some((taskTag) => taskTag.label === tag.label)
            // returns true if the note contains the tag
          )) &&
        (status === "all" || task.isCompleted === JSON.parse(status))
      );
    });
  }, [searchQuery, searchTags, tasks, status]);

  return {
    filteredTasks,
    setSearchQuery,
    setSearchTags,
    searchTags,
    setStatus,
  };
}
