import { useParams } from "react-router-dom";
import useGetProjectTasks from "./useGetProjectTasks";
import TaskPage from "@/components/tasks/TaskPage";

const Project = () => {
  const { projectId } = useParams();

  const { data, isError, isLoading } = useGetProjectTasks(projectId!);

  return (
    <>
      <h1 className="h-8 text-2xl font-bold capitalize">
        {isLoading
          ? "Loading..."
          : (data && data[0]?.Projects?.name) || "Empty Project"}
      </h1>
      <TaskPage isError={isError} isLoading={isLoading} tasks={data} />
    </>
  );
};

export default Project;
