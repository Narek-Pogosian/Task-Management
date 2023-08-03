import { useParams } from "react-router-dom";
import useGetProjects from "@/hooks/useGetProjects";
import ProjectLink from "./ProjectLink";
import { Loader2 } from "lucide-react";

const ProjectList = () => {
  const { data: projects, isLoading, isError } = useGetProjects();
  const { projectId } = useParams();

  if (isLoading) {
    return (
      <div className="flex justify-center pt-6">
        <Loader2 className="w-10 h-10 animate-spin" />
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
