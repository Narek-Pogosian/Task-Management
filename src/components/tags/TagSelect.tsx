import { Tag, usePersistStore } from "@/lib/store/persistStore";
import ReactSelect from "react-select";

type Props = {
  selectedTags: Tag[];
  setSelectedTags: (tags: Tag[]) => void;
};

const TagSelect = ({ selectedTags, setSelectedTags }: Props) => {
  const { tags, isDarkMode } = usePersistStore();

  return (
    <ReactSelect
      isMulti
      placeholder="Select tags"
      maxMenuHeight={150}
      styles={{
        control: (styles, { isFocused }) => ({
          ...styles,
          borderWidth: "1px",
          backgroundColor: isDarkMode ? "#020817" : "white",
          borderColor: isDarkMode ? "#1e293b" : "#e2e8f0",
          fontSize: "14px",
          "&:hover": {
            borderColor: isFocused ? "#6366f1" : "",
            cursor: "text",
          },
          boxShadow: isFocused ? "0 0 0 2px #6366f160" : "",
        }),
        placeholder: (styles) => ({
          ...styles,
          color: isDarkMode ? "#94a3b8" : "#64748b",
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: isDarkMode ? "#020817" : "white",
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
              ? "#1e293b"
              : "#e2e8f0"
            : "transparent",
          color: data.value,
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
          backgroundColor: data.value,
          color: "white",
          display: "flex",
          gap: "2px",
          marginRight: "3px",
          alignItems: "center",
          paddingInline: "2px",
          paddingBlock: "1px",
          borderRadius: "4px",
        }),
        multiValueLabel: (styles) => ({
          ...styles,
          color: "white",
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
