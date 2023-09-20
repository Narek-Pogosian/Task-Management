import { Tag, usePersistStore } from "@/lib/store/persistStore";
import ReactSelect from "react-select";

type Props = {
  selectedTags: Tag[];
  setSelectedTags: (tags: Tag[]) => void;
  placeholder: string;
};

const TagSelect = ({ selectedTags, setSelectedTags, placeholder }: Props) => {
  const { tags, isDarkMode } = usePersistStore();

  return (
    <ReactSelect
      isMulti
      placeholder={placeholder}
      id="tags"
      maxMenuHeight={160}
      styles={{
        control: (styles, { isFocused }) => ({
          ...styles,
          borderWidth: "1px",
          height: "40px",
          backgroundColor: isDarkMode ? "#1c1c21" : "#f7f7f8",
          fontSize: "14px",
          borderColor: isDarkMode ? "#333337" : "#e4e4e7",

          "&:hover": {
            cursor: "text",
          },

          boxShadow: isFocused
            ? `0 0 0 1px ${isDarkMode ? "white" : "#0a0a0a"}`
            : "",
        }),
        placeholder: (styles) => ({
          ...styles,
          color: isDarkMode ? "#a1a1aa" : "#64748b",
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: isDarkMode ? "#1c1c21" : "white",
          borderWidth: "1px",
          fontSize: "14px",
          padding: "4px",
        }),
        input: (baseStyles) => ({
          ...baseStyles,
          color: isDarkMode ? "#f8fafc" : "#0f172a",
        }),
        option: (styles, { isFocused, data }) => ({
          ...styles,
          backgroundColor: isFocused
            ? isDarkMode
              ? "#272730"
              : "#efeff0"
            : "transparent",
          color: `rgb(${data.color})`,
          fontWeight: 700,
          paddingBlock: "4px",
          borderRadius: "4px",
          ":active": {
            ...styles[":active"],
            backgroundColor: isFocused ? "" : "transparent",
          },
        }),
        multiValue: (styles, { data }) => ({
          ...styles,
          backgroundColor: isDarkMode
            ? `rgba(${data.color}, 0.2)`
            : `rgba(${data.color}, 0.05)`,
          color: `rgb(${data.color})`,
          display: "flex",
          gap: "2px",
          marginRight: "3px",
          alignItems: "center",
          paddingInline: "2px",
          paddingBlock: "1px",
          borderRadius: "4px",
        }),
        multiValueLabel: (styles, { data }) => ({
          ...styles,
          color: `rgb(${data.color})`,
          fontSize: "12px",
          fontWeight: 600,
        }),
        multiValueRemove: () => ({
          background: "transparent",
        }),
      }}
      options={tags}
      className="w-full"
      value={selectedTags}
      onChange={(tags) => {
        setSelectedTags(tags.map((t) => t));
      }}
    />
  );
};

export default TagSelect;
