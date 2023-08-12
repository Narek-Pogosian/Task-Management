import { Link } from "react-router-dom";
import ProjectMenu from "@/components/project/ProjectMenu";
import { Project } from "@/lib/types/types";

type Props = {
  project: Project;
  active: boolean;
};

const ProjectLink = ({ project, active }: Props) => {
  return (
    <div
      className={`flex items-center pr-2 justify-between gap-2 group rounded hover:bg-black/5 hover:dark:bg-white/10 ${
        active ? "bg-black/5 dark:bg-white/10" : ""
      }`}
    >
      <Link
        to={`/project/${project.id}`}
        className="flex-1 h-full py-2 pl-2 capitalize"
      >
        {project.name}
      </Link>
      <ProjectMenu project={project} />
    </div>
  );
};

export default ProjectLink;
