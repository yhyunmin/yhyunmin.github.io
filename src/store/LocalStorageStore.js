import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useLocalStorageStore = create(
  persist(
    (set, get) => ({
      localStorageList: [],
      setLocalStorage: data => {
        const { getLocalStorage } = get();
        if (getLocalStorage().length >= 5) {
          getLocalStorage().shift();
        }
        if (getLocalStorage().includes(data)) {
          return null;
        }
        set(state => ({
          ...state,
          localStorageList: [...getLocalStorage(), data],
        }));
      },
      getLocalStorage: () => get().localStorageList,
    }),
    { name: 'recentPost' }
  )
);
// console.log(useLocalStorageStore.getState());

export const useLocalStorage = () =>
  useLocalStorageStore(state => state.localStorageList);
export const useSetLocalStorage = () =>
  useLocalStorageStore(state => state.setLocalStorage);
export const useGetLocalStorage = () =>
  useLocalStorageStore(state => state.getLocalStorage);
