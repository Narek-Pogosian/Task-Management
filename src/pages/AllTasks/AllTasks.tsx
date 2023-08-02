import TaskPage from "@/components/tasks/TaskPage";
import useGetAllTasks from "@/pages/AllTasks/useGetAllTasks";

const AllTasks = () => {
  const { data, isError, isLoading, isSuccess } = useGetAllTasks();

  return (
    <div>
      <h1>All Tasks</h1>
      <TaskPage
        isError={isError}
        isLoading={isLoading}
        tasks={data}
        isSuccess={isSuccess}
      />
    </div>
  );
};

export default AllTasks;
