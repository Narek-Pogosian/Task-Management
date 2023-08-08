export const taskKeys = {
  all: "all",
  today: "today",
  upcoming: "upcoming",
  expired: "expired",
} as const;

export type TasksKeyType = (typeof taskKeys)[keyof typeof taskKeys];
