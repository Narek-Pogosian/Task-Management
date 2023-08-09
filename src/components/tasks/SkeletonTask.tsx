import { Skeleton } from "../ui/skeleton";

const SkeletonTask = () => {
  return (
    <div className="flex gap-3 p-4 border rounded-lg shadow-sm bg-card text-card-foreground">
      <Skeleton className="w-6 h-6 rounded-full" />
      <div className="flex flex-col flex-1">
        <div className="flex justify-between gap-2 mb-2">
          <Skeleton className="w-full h-5" />
          {/* <TaskMenu task={task} /> */}
        </div>
        <div className="flex flex-col flex-1 gap-1">
          <Skeleton className="w-40 h-3" />
          <Skeleton className="w-40 h-3" />
        </div>
        <div className="flex flex-wrap gap-2 mt-5">
          <Skeleton className="w-16 h-4 rounded" />
          <Skeleton className="w-16 h-4 rounded" />
          <Skeleton className="w-16 h-4 rounded" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonTask;
