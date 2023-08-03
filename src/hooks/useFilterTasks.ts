import { Tag } from "@/lib/store/persistStore";
import { ConvertedTask } from "@/lib/types/types";
import { useMemo, useState } from "react";

export default function useFilterTasks(tasks: ConvertedTask[]) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTags, setSearchTags] = useState<Tag[]>([]);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      return (
        //  check if we have searchquery or searchtags to do comparison
        (searchQuery === "" ||
          task.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (searchTags.length === 0 ||
          searchTags.every(
            //  checks for every searchtag if the task contains all of them
            (tag) => task.tags.some((taskTag) => taskTag.value === tag.value)
            // returns true if the note contains the tag
          ))
      );
    });
  }, [searchQuery, searchTags, tasks]);

  return { filteredTasks, setSearchQuery, setSearchTags, searchTags };
}
