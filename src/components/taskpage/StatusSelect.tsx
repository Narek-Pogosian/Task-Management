import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Status } from "@/hooks/useFilterTasks";

const StatusSelect = ({ setStaus }: { setStaus: (val: Status) => void }) => {
  return (
    <Select onValueChange={setStaus}>
      <SelectTrigger className="w-40">
        <SelectValue placeholder="Show all" className="text-red-400 " />
      </SelectTrigger>
      <SelectContent className="overflow-y-auto max-h-60">
        <SelectGroup>
          <SelectItem value="all">Show all</SelectItem>
          <SelectItem value="true">Completed</SelectItem>
          <SelectItem value="false">Not completed</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default StatusSelect;
