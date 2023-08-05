import { useParams } from "react-router-dom";
import useGetProjectTasks from "./useGetProjectTasks";
import TaskPage from "@/components/tasks/TaskPage";
import CreateTaskDialog from "@/components/tasks/CreateTaskDialog";

const Project = () => {
  const { projectId } = useParams();

  const { data, isError, isLoading } = useGetProjectTasks(projectId!);

  return (
    <>
      <div className="flex items-center justify-between gap-12 lg:justify-start">
        <h1 className="h-8 text-2xl font-bold capitalize">
          {/* // TODO: Fix, if project has no tasks then we dont get the project name */}
          {isLoading
            ? "Loading..."
            : (data && data[0]?.Projects?.name) || "Empty Project"}
        </h1>
        <CreateTaskDialog />
      </div>
      <TaskPage isError={isError} isLoading={isLoading} tasks={data} />
    </>
  );
};

export default Project;
