import React from 'react';
import useThemeStore from 'src/store/ThemeStore';

const DarkTheme = () => {
  const { toggleTheme } = useThemeStore();

  return <button onClick={toggleTheme}>다크모드</button>;
};

export default DarkTheme;
