import { FolderOpen } from "lucide-react";
import CreateProjectDialog from "../project/CreateProjectDialog";
import PageLinks from "./PageLinks";
import ProjectList from "./ProjectList";

const Sidebar = () => {
  return (
    <aside className="w-56 p-4 overflow-y-auto text-sm font-semibold lg:border-r">
      <PageLinks />
      <div className="px-2 pt-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="flex items-center gap-2 text-base">
            <FolderOpen className="w-5 h-5" /> Projects
          </h3>
          <CreateProjectDialog />
        </div>
        <ProjectList />
      </div>
    </aside>
  );
};

export default Sidebar;
