import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { lightTheme, darkTheme } from './styles/theme';
//app.css
import './App.css';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState(true);
  const onClickBtn = () => {
    setTheme(!theme);
  };
  return (
    <div className='App'>
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <GlobalStyle />
        <h1>안녕하세요 이현민의 블로그입니다.</h1>
        <h1>2.8rem</h1>
        <h2>2.2rem</h2>
        <h3>2.0rem</h3>
        <h4>1.8rem</h4>
        <p>p와 span은 1.6rem</p>
        <p>현재 제작중에 있습니다</p>

        <button onClick={onClickBtn}>다크모드</button>
      </ThemeProvider>
    </div>
  );
}

export default App;
