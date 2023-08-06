import TaskPage from "@/components/taskpage/TaskPage";
import useGetUpcoming from "./useGetUpcoming";
import PageTitle from "@/components/PageTitle";

const Upcoming = () => {
  const { data, isError, isLoading } = useGetUpcoming();

  return (
    <>
      <PageTitle title="Upcoming" />
      <TaskPage isError={isError} isLoading={isLoading} tasks={data} />
    </>
  );
};

export default Upcoming;
