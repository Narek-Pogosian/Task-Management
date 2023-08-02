import { Tag } from "@/lib/store/persistStore";
import { ConvertedTask, Task } from "@/lib/types/db.types";
import { useMemo, useState } from "react";

export default function useFilterTasks(tasks: Task[]) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTags, setSearchTags] = useState<Tag[]>([]);

  const filteredTasks = useMemo(() => {
    const convertedTasks: ConvertedTask[] = tasks.map((task) => {
      if (!task.tags) return task;
      // Tags are in Json format, need to convert
      return { ...task, tags: JSON.parse(task.tags.toString()) };
    });

    return convertedTasks.filter((task) => {
      return (
        //  check if we have searchquery or searchtags to do comparison
        (searchQuery === "" ||
          task.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (searchTags.length === 0 ||
          //  checks for every searchtag if the note contains all of them
          searchTags.every(
            (tag) => task.tags.some((noteTag) => noteTag.id === tag.id)
            // returns true if the note contains the tag
          ))
      );
    });
  }, [searchQuery, searchTags, tasks]);

  return { filteredTasks, setSearchQuery, setSearchTags };
}
