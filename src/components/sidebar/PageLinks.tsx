import { NavLink } from "react-router-dom";
import {
  CalendarCheck,
  CalendarDays,
  FolderClosed,
  Tag,
  TimerOff,
} from "lucide-react";

const PageLinks = () => {
  return (
    <nav className="flex flex-col gap-1 pb-4 border-b">
      <NavLink
        to="/today"
        className={({ isActive }) =>
          `p-2 flex gap-2 items-center rounded hover:bg-black/5 hover:dark:bg-white/10 ${
            isActive ? "bg-black/5 dark:bg-white/10" : ""
          }`
        }
      >
        <CalendarCheck className="w-5 h-5 text-emerald-500" /> Today
      </NavLink>
      <NavLink
        to="/upcoming"
        className={({ isActive }) =>
          `p-2 flex gap-2 items-center rounded hover:bg-black/5 hover:dark:bg-white/10 ${
            isActive ? "bg-black/5 dark:bg-white/10" : ""
          }`
        }
      >
        <CalendarDays className="w-5 h-5 text-indigo-500" /> Upcoming
      </NavLink>
      <NavLink
        to="/expired"
        className={({ isActive }) =>
          `p-2 flex gap-2 items-center rounded hover:bg-black/5 hover:dark:bg-white/10 ${
            isActive ? "bg-black/5 dark:bg-white/10" : ""
          }`
        }
      >
        <TimerOff className="w-5 h-5 text-rose-500" /> Expired
      </NavLink>
      <NavLink
        to="/all"
        className={({ isActive }) =>
          `p-2 flex gap-2 items-center rounded hover:bg-black/5 hover:dark:bg-white/10 ${
            isActive ? "bg-black/5 dark:bg-white/10" : ""
          }`
        }
      >
        <FolderClosed className="w-5 h-5 text-sky-500" /> All Tasks
      </NavLink>
      <NavLink
        to="/tags"
        className={({ isActive }) =>
          `p-2 flex gap-2 items-center rounded hover:bg-black/5 hover:dark:bg-white/10 ${
            isActive ? "bg-black/5 dark:bg-white/10" : ""
          }`
        }
      >
        <Tag className="w-5 h-5 text-amber-500" /> Tags
      </NavLink>
    </nav>
  );
};

export default PageLinks;
