import CreateTagDialog from "@/components/tags/CreateTagDialog";
import DeleteTagDialog from "@/components/tags/DeleteTagDialog";
import TagChip from "@/components/tags/TagChip";
import { usePersistStore } from "@/lib/store/persistStore";

const Tags = () => {
  const { tags } = usePersistStore();

  return (
    <div className="max-w-3xl pt-6 mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Tags</h1>
        <CreateTagDialog />
      </div>
      <ul className="mt-8">
        {tags.map((tag) => (
          <li
            className="flex items-center justify-between py-2 border-b"
            key={tag.id}
          >
            <TagChip color={tag.color} text={tag.label} />
            <DeleteTagDialog id={tag.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
