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
  // ? Hopefully timezones match
  const currentDate = new Date().toLocaleDateString();
  const expiresAt = new Date(date).toLocaleDateString();

  if (expiresAt < currentDate) {
    return "expired";
  }

  if (expiresAt > currentDate) {
    return "upcoming";
  }

  return "today";
};
