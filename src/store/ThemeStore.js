import { create } from 'zustand';

const useThemeStore = create(set => ({
  theme: true,
  toggleTheme: () =>
    set(state => ({
      theme: !state.theme,
    })),
}));

export default useThemeStore;
