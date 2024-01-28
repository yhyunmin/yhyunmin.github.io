import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useLocalStorageStore = create(
  persist(
    (set, get) => ({
      localStorageList: [],
      setLocalStorage: data => {
        const { getLocalStorage } = get();
        //if data is same in getLocalStorage, return null
        if (
          getLocalStorage().find(
            item => item.id === data.id && item.slug === data.slug
          )
        ) {
          getLocalStorage().forEach((item, index) => {
            if (item.id === data.id && item.slug === data.slug) {
              getLocalStorage().splice(index, 1);
            }
          });
        }
        if (getLocalStorage().length >= 5) {
          getLocalStorage().shift();
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
