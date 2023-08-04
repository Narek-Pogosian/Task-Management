import PageTitle from "@/components/PageTitle";
import TaskPage from "@/components/tasks/TaskPage";
import useGetToday from "@/pages/Today/useGetToday";

const Today = () => {
  const { data, isLoading, isError } = useGetToday();

  return (
    <>
      <PageTitle title="Today" />
      <TaskPage isError={isError} isLoading={isLoading} tasks={data} />
    </>
  );
};

export default Today;
