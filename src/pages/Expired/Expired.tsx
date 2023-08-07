import TaskPage from "@/components/taskpage/TaskPage";
import useGetExpired from "./useGetExpired";
import PageTitle from "@/components/taskpage/PageTitle";

const Expired = () => {
  const { data, isError, isLoading } = useGetExpired();

  return (
    <>
      <PageTitle title="Expired" />
      <TaskPage isError={isError} isLoading={isLoading} tasks={data} />
    </>
  );
};

export default Expired;
