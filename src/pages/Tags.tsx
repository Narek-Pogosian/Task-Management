import CreateTagDialog from "@/components/tags/CreateTagDialog";
import DeleteTagDialog from "@/components/tags/DeleteTagDialog";
import TagChip from "@/components/tags/TagChip";
import { usePersistStore } from "@/lib/store/persistStore";

const Tags = () => {
  const { tags } = usePersistStore();

  return (
    <div className="max-w-3xl pt-6 mx-auto">
      <div className="flex items-center justify-between pb-4 border-b">
        <h1 className="text-xl font-bold">Tags</h1>
        <CreateTagDialog />
      </div>
      {tags.length === 0 ? (
        <p className="pt-10 text-xl font-semibold text-center">
          No tags available
        </p>
      ) : (
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
      )}
    </div>
  );
};

export default Tags;
