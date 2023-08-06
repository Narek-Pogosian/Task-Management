import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ConvertedTask, Task } from "./types/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertTaskList = (tasks: Task[]): ConvertedTask[] => {
  const convertedTasks = tasks.map((task) => {
    if (!task.tags) return task;
    // Tags are in Json format, need to convert
    return { ...task, tags: JSON.parse(task.tags.toString()) };
  });

  return convertedTasks;
};

export const getQueryKey = (date: string) => {
  // ! WARNING: Timezones dont match
  const currentDate = new Date().toISOString().split("T")[0]!;

  if (date == currentDate) {
    return "today";
  }

  if (date < currentDate) {
    return "expired";
  }

  if (date > currentDate) {
    return "upcoming";
  }
};
