import { ThemeProvider } from 'styled-components';
import { globalStyle } from '@styles/globalStyle';
import { lightTheme, darkTheme } from '@styles/theme';
//app.css
import './App.css';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState(true);
  return (
    <div className='App'>
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <globalStyle />
        <h1>안녕하세요 이현민의 블로그입니다.</h1>
        <p>현재 제작중에 있습니다</p>
      </ThemeProvider>
    </div>
  );
}

export default App;
