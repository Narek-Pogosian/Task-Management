import { ReactNode } from "react";

const TaskGrid = ({ children }: { children: ReactNode }) => {
  return (
    <div className="@container">
      <ul className="grid gap-6 @4xl:grid-cols-2">{children}</ul>
    </div>
  );
};

export default TaskGrid;
