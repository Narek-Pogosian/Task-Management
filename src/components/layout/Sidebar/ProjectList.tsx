import { useParams } from "react-router-dom";
import useGetProjects from "@/hooks/useGetProjects";
import ProjectLink from "./ProjectLink";

const ProjectList = () => {
  const { data: projects, isLoading, isError } = useGetProjects();
  const { projectId } = useParams();

  if (isLoading) {
    return (
      <div className="grid gap-2">
        {new Array(4).fill(0).map((_, i) => (
          <div
            className="h-8 rounded-md bg-border/60 animate-pulse"
            key={i}
          ></div>
        ))}
      </div>
    );
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <nav className="grid gap-[2px]">
      {projects?.map((project) => (
        <ProjectLink
          key={project.id}
          project={project}
          active={project.id === projectId}
        />
      ))}
    </nav>
  );
};

export default ProjectList;
