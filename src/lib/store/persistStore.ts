import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Tag {
  id: string;
  value: string;
  color: string;
  label: string;
}

interface PersistStoreType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  tags: Tag[];
  addTag: (tag: Tag) => void;
  deleteTag: (id: string) => void;
}

export const usePersistStore = create<PersistStoreType>()(
  persist(
    (set) => ({
      isDarkMode: true,

      toggleTheme: () => {
        set((state) => ({
          ...state,
          isDarkMode: !state.isDarkMode,
        }));
      },

      tags: [],

      addTag: (tag) => {
        set((state) => ({
          ...state,
          tags: [...state.tags, tag],
        }));
      },

      deleteTag: (id) => {
        set((state) => ({
          ...state,
          tags: [...state.tags].filter((tag) => tag.id !== id),
        }));
      },
    }),
    { name: "task-store" }
  )
);
