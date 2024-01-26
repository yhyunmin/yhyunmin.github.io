import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useLocalStorageStore = create(
  persist(
    (set, get) => ({
      recentPost: [],
      setRecentPost: data => {
        set({ recentPost: data });
      },
    }),
    { name: 'recentPost', storage: createJSONStorage(() => localStorage) }
  )
);
