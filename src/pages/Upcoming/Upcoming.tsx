import TaskPage from "@/components/tasks/TaskPage";
import useGetUpcoming from "./useGetUpcoming";

const Upcoming = () => {
  const { data, isError, isLoading } = useGetUpcoming();

  return (
    <>
      <h1 className="text-2xl font-bold">Upcoming</h1>
      <TaskPage isError={isError} isLoading={isLoading} tasks={data} />
    </>
  );
};

export default Upcoming;
