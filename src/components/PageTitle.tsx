import CreateTaskDialog from "./tasks/CreateTaskDialog";

type Props = {
  title: string;
};

const PageTitle = ({ title }: Props) => {
  return (
    <div className="flex items-center justify-between gap-12 lg:justify-start">
      <h1 className="text-2xl font-bold">{title}</h1>
      <CreateTaskDialog />
    </div>
  );
};

export default PageTitle;
