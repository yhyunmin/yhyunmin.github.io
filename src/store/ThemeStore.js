import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useThemeStore = create(set => ({
  //store
  theme: true,
  action: {
    toggleTheme: () =>
      set(state => {
        !state.theme;
      }),
  },
}));
export const useTheme = () => {
  return useThemeStore(state => state.theme);
};
export const useThemeAction = () => {
  return useThemeStore(state => state.action.toggleTheme);
};
