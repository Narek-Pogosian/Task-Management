import TaskPage from "@/components/tasks/TaskPage";
import useGetToday from "@/pages/Today/useGetToday";

const Today = () => {
  const { data, isLoading, isError, isSuccess } = useGetToday();

  return (
    <div>
      <h1>Today</h1>
      <TaskPage
        isError={isError}
        isLoading={isLoading}
        tasks={data}
        isSuccess={isSuccess}
      />
    </div>
  );
};

export default Today;
