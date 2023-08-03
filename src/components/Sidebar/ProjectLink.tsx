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
      className={`px-2 flex items-center justify-between gap-2 group rounded hover:bg-border/60 ${
        active ? "bg-border/60" : ""
      }`}
    >
      <Link
        to={`/project/${project.id}`}
        className="flex-1 h-full py-2 capitalize"
      >
        {project.name}
      </Link>
      <ProjectMenu project={project} />
    </div>
  );
};

export default ProjectLink;
