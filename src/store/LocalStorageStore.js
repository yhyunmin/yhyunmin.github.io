import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useLocalStorageStore = create(
  persist(
    (set, get) => ({
      localStorage: [],
      action: {
        setLocalStorage: data => {
          set({ recentPost: data });
        },
      },
    }),
    { name: 'recentPost', storage: createJSONStorage(() => localStorage) }
  )
);

export const useRecentPostStore = () =>
  useLocalStorageStore(state => state.recentPost);
export const useRecentPostAction = () =>
  useLocalStorageStore(state => state.action.setLocalStorage);
