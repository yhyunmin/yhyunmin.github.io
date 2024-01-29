import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useThemeStore = create(set => ({
  //store
  theme: true,
  action: {
    toggleTheme: () =>
      set(state => {
        const newTheme = !state.theme;
        localStorage.setItem('theme', newTheme);
        return {
          theme: newTheme,
        };
      }),
    setTheme: (theme = true) =>
      set(() => ({
        theme: theme,
      })),
  },
}));
export const useTheme = () => {
  return useThemeStore(state => state.theme);
};
export const useThemeAction = () => {
  return useThemeStore(state => state.action.toggleTheme);
};
export const useSetThemeAction = () => {
  return useThemeStore(state => state.action.setTheme);
};
