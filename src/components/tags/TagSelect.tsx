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
          backgroundColor: "transparent",
          fontSize: "14px",
          borderColor: isDarkMode ? "#2a313c" : "#e2e8f0",

          "&:hover": {
            cursor: "text",
          },

          boxShadow: isFocused
            ? `0 0 0 1px ${isDarkMode ? "#d4d4d4" : "#0a0a0a"}`
            : "",
        }),
        placeholder: (styles) => ({
          ...styles,
          color: isDarkMode ? "#94a3b8" : "#64748b",
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: isDarkMode ? "#18181b" : "white",
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
