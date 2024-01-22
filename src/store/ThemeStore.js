import { create } from 'zustand';

const useThemeStore = create(set => ({
  //store
  theme: true,
  action: {
    toggleTheme: () =>
      set(state => ({
        theme: !state.theme,
      })),
  },
}));

export const useTheme = () => {
  return useThemeStore(state => state.theme);
};
export const useThemeAction = () => {
  return useThemeStore(state => state.action.toggleTheme);
};
