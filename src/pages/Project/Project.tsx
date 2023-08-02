import { useParams } from "react-router-dom";

const Project = () => {
  const { projectId } = useParams();
  console.log(projectId);

  return <div>Project</div>;
};

export default Project;
