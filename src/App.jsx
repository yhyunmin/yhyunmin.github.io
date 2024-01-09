import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@styles/GlobalStyle';
import { lightTheme, darkTheme } from '@styles/theme';
//app.css
import './App.css';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/routes';
import Loading from '@components/Loading/Loading';
function App() {
  const [theme, setTheme] = useState(true);
  const onClickBtn = () => {
    setTheme(!theme);
  };
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
