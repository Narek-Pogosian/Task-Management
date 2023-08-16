import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Task, DbTask } from "./types/types";
import { TasksKeyType } from "./data/queryKeys";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertTaskList = (tasks: DbTask[]): Task[] => {
  const convertedTasks = tasks.map((task) => {
    if (!task.tags) return task;
    // Tags are in Json format, need to convert
    return { ...task, tags: JSON.parse(task.tags.toString()) };
  });

  return convertedTasks;
};

export const getQueryKey = (date: string): TasksKeyType => {
  // ! WARNING: Timezones dont match
  const currentDate = new Date();
  const expiresAt = new Date(date);

  console.log("current: ", currentDate);
  console.log("expires: ", expiresAt);

  if (expiresAt < currentDate) {
    return "expired";
  }

  if (expiresAt > currentDate) {
    return "upcoming";
  }

  return "today";
};
