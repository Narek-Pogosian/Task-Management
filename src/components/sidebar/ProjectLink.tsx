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
      className={`flex items-center pr-2 justify-between gap-2 group rounded hover:bg-accent ${
        active ? "bg-accent" : ""
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
