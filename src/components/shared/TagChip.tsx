type Props = {
  text: string;
  color: string;
};

const TagChip = ({ text, color }: Props) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`relative inline-block px-3 rounded py-1 text-xs font-semibold leading-none tracking-wide text-white uppercase select-none whitespace-nowrap`}
    >
      {text}
    </div>
  );
};

export default TagChip;
