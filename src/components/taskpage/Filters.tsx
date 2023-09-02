import { Status } from "@/hooks/useFilterTasks";
import { Tag } from "@/lib/store/persistStore";
import { Input } from "../ui/input";
import TagSelect from "../tags/TagSelect";
import StatusSelect from "./StatusSelect";
import { Label } from "../ui/label";

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
    <div className="flex flex-col max-w-3xl gap-4 mb-6 sm:flex-row">
      <div>
        <Label htmlFor="status">Status</Label>
        <StatusSelect setStaus={setStatus} />
      </div>
      <div className="min-w-[230px] xl:w-[300px]">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Filter by title"
        />
      </div>
      <div className="min-w-[230px] xl:w-[300px]">
        <Label htmlFor="tags">Tags</Label>
        <TagSelect
          selectedTags={searchTags}
          setSelectedTags={setSearchTags}
          placeholder="Filter by tag"
        />
      </div>
    </div>
  );
};

export default Filters;
