import { usePersistStore } from "@/lib/store/persistStore";

type Props = {
  text: string;
  color: string;
};

const TagChip = ({ text, color }: Props) => {
  const { isDarkMode } = usePersistStore();

  return (
    <div
      style={{
        backgroundColor: isDarkMode
          ? `rgba(${color}, 0.2)`
          : `rgba(${color}, 0.05)`,
        color: `rgb(${color})`,
      }}
      className={`relative inline-block px-2  py-1 rounded text-xs font-semibold leading-none tracking-wide text-white capitalize select-none whitespace-nowrap`}
    >
      {text}
    </div>
  );
};

export default TagChip;
