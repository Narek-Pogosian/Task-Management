import TaskPage from "@/components/taskpage/TaskPage";
import useGetExpired from "./useGetExpired";
import PageTitle from "@/components/taskpage/PageTitle";
import { convertTaskList } from "@/lib/utils";

const Expired = () => {
  const { data, isError, isLoading } = useGetExpired();

  return (
    <>
      <PageTitle title="Expired" />
      <TaskPage
        isError={isError}
        isLoading={isLoading}
        tasks={convertTaskList(data ?? [])}
      />
    </>
  );
};

export default Expired;
