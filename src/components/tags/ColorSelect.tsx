import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { tagColors } from "@/lib/data/tagColors";

type Props = {
  setColor: (value: string) => void;
  color: string | undefined;
};

const ColorSelect = ({ setColor, color }: Props) => {
  return (
    <Select onValueChange={setColor}>
      <SelectTrigger
        className={!color ? "text-muted-foreground" : "font-bold"}
        style={{ color: `rgb(${color})` }}
      >
        <SelectValue placeholder="Pick a color" />
      </SelectTrigger>
      <SelectContent className="overflow-y-auto text-white max-h-60">
        <SelectGroup className="space-y-1 ">
          {tagColors?.map((color) => (
            <SelectItem
              value={color.value}
              key={color.id}
              style={{ backgroundColor: `rgb(${color.value})` }}
              className="font-bold cursor-pointer"
            >
              {color.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ColorSelect;
