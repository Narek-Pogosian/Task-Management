import PageTitle from "@/components/taskpage/PageTitle";
import TaskPage from "@/components/taskpage/TaskPage";
import { convertTaskList } from "@/lib/utils";
import useGetAllTasks from "@/pages/AllTasks/useGetAllTasks";

const AllTasks = () => {
  const { data, isError, isLoading } = useGetAllTasks();

  return (
    <>
      <PageTitle title="All tasks" />
      <TaskPage
        isError={isError}
        isLoading={isLoading}
        tasks={convertTaskList(data ?? [])}
      />
    </>
  );
};

export default AllTasks;
