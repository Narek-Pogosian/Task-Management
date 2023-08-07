import PageTitle from "@/components/taskpage/PageTitle";
import TaskPage from "@/components/taskpage/TaskPage";
import useGetAllTasks from "@/pages/AllTasks/useGetAllTasks";

const AllTasks = () => {
  const { data, isError, isLoading } = useGetAllTasks();

  return (
    <>
      <PageTitle title="All tasks" />
      <TaskPage isError={isError} isLoading={isLoading} tasks={data} />
    </>
  );
};

export default AllTasks;
