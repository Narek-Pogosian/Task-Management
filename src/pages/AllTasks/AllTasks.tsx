import TaskPage from "@/components/tasks/TaskPage";
import useGetAllTasks from "@/pages/AllTasks/useGetAllTasks";

const AllTasks = () => {
  const { data, isError, isLoading } = useGetAllTasks();

  return (
    <>
      <h1 className="text-2xl font-bold">All Tasks</h1>
      <TaskPage isError={isError} isLoading={isLoading} tasks={data} />
    </>
  );
};

export default AllTasks;
