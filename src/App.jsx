import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@styles/GlobalStyle';
import { lightTheme, darkTheme } from '@styles/theme';
//app.css
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/routes';
import Loading from '@components/Loading/Loading';
import useThemeStore from './store/ThemeStore';
import { useEffect } from 'react';
import matter from 'gray-matter';
function App() {
  const { theme } = useThemeStore();
  useEffect(() => {
    const context = require.context('@md/', false, /\.md$/);

  }, []);

  return (
    <div className='App'>
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <GlobalStyle />
        <RouterProvider router={router} fallbackElement={<Loading />} />
      </ThemeProvider>
    </div>
  );
}

export default App;
