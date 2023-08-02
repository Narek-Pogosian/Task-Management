import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useGetProjects from "@/hooks/useGetProjects";

type Props = {
  setProject: (value: string) => void;
};

const ProjectSelect = ({ setProject }: Props) => {
  const { data: projects, isError } = useGetProjects();

  return (
    <Select onValueChange={setProject}>
      <SelectTrigger className="w-full">
        <SelectValue
          placeholder="Project (optional)"
          className="text-red-400"
        />
      </SelectTrigger>
      <SelectContent className="overflow-y-auto max-h-60">
        <SelectGroup>
          {isError ? (
            <span className="pl-2 text-sm font-semibold text-red-500">
              Error getting projects
            </span>
          ) : projects?.length == 0 ? (
            <span className="pl-2 text-sm font-semibold">No Projects</span>
          ) : (
            projects?.map((project) => (
              <SelectItem value={project.id} key={project.id}>
                {project.name}
              </SelectItem>
            ))
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ProjectSelect;
