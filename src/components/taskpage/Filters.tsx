import { Status } from "@/hooks/useFilterTasks";
import { Tag } from "@/lib/store/persistStore";
import { Input } from "../ui/input";
import TagSelect from "../tags/TagSelect";
import StatusSelect from "./StatusSelect";

type Props = {
  setSearchQuery: (q: string) => void;
  searchTags: Tag[];
  setSearchTags: (tags: Tag[]) => void;
  setStatus: (status: Status) => void;
};

const Filters = ({
  searchTags,
  setSearchQuery,
  setSearchTags,
  setStatus,
}: Props) => {
  return (
    <div className="flex flex-col max-w-3xl gap-4 my-8 sm:flex-row-reverse">
      <TagSelect
        selectedTags={searchTags}
        setSelectedTags={setSearchTags}
        placeholder="Filter by tag"
      />
      <Input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Filter by title"
      />
      <StatusSelect setStaus={setStatus} />
    </div>
  );
};

export default Filters;
