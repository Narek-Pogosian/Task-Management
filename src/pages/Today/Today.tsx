import TaskPage from "@/components/tasks/TaskPage";
import useGetToday from "@/pages/Today/useGetToday";

const Today = () => {
  const { data, isLoading, isError } = useGetToday();

  return (
    <>
      <h1 className="text-2xl font-bold">Today</h1>
      <TaskPage isError={isError} isLoading={isLoading} tasks={data} />
    </>
  );
};

export default Today;
