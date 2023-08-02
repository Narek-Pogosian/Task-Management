import TaskPage from "@/components/tasks/TaskPage";
import useGetExpired from "./useGetExpired";

const Expired = () => {
  const { data, isError, isLoading } = useGetExpired();

  return (
    <>
      <h1 className="text-2xl font-bold">Expired</h1>
      <TaskPage isError={isError} isLoading={isLoading} tasks={data} />
    </>
  );
};

export default Expired;
