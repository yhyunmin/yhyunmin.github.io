import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useLocalStorageStore = create(
  persist(
    (set, get) => ({
      localStorageList: [],
      action: {
        setLocalStorage: data => {
          set({ ...data, localStorageList: data });
        },
        getLocalStorage: () => get().localStorageList,
      },
    }),
    { name: 'recentPost' }
  )
);

export const useRecentPostStore = () =>
  useLocalStorageStore(state => state.localStorageList);
export const useRecentPostAction = () =>
  useLocalStorageStore(state => state.action);
