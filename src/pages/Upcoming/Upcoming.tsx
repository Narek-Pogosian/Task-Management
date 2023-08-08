import TaskPage from "@/components/taskpage/TaskPage";
import useGetUpcoming from "./useGetUpcoming";
import PageTitle from "@/components/taskpage/PageTitle";
import { convertTaskList } from "@/lib/utils";

const Upcoming = () => {
  const { data, isError, isLoading } = useGetUpcoming();

  return (
    <>
      <PageTitle title="Upcoming" />
      <TaskPage
        isError={isError}
        isLoading={isLoading}
        tasks={convertTaskList(data ?? [])}
      />
    </>
  );
};

export default Upcoming;
