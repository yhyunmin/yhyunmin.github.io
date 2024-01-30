import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@styles/GlobalStyle';
import { light, dark } from '@styles/theme';
//app.css
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Loading from '@components/Loading/Loading';
import { createBrowserRouter } from 'react-router-dom';
import Main from 'src/Pages/Main';
import Post from 'src/Pages/Post';
import ArticleSection from '@components/Organisms/ArticleSection/ArticleSection';
import About from '@components/Organisms/About/About';
import Error from 'src/Pages/Error';
import { useFrontMatterFetch } from './store/ArticleStore';
import { useTheme } from './store/ThemeStore';
import { useState } from 'react';

function App() {
  const [memo, setMemo] = useState(null);
  // theme localstorage 로 관리하여 다크모드 저장하기 
  const theme = useTheme();
  const fetchFrontMatter = useFrontMatterFetch();
  const memoFrontMatter = async () => {
    const result = await fetchFrontMatter();
    setMemo(result);
    return result;
  };

  const router = createBrowserRouter(
    [
      {
        loader: async () => {
          return memo !== null ? memo : await memoFrontMatter();
        },
        path: '/',
        element: <Main />,
        children: [
          {
            path: '/',
            element: <ArticleSection />,
          },
          {
            path: '/articles',
            element: <ArticleSection />,
          },
          {
            path: 'about',
            element: <About />,
          },
        ],
      },
      {
        path: '/articles/:slug?',
        element: <Post />,
        loader: async () => {
          return await fetchFrontMatter();
        },
      },
      { path: '/*', element: <Error /> },
    ],
    { basename: '/' }
  );

  return (
    <div className='App'>
      <ThemeProvider theme={theme ? light : dark}>
        <GlobalStyle />
        <RouterProvider router={router} fallbackElement={<Loading />} />
      </ThemeProvider>
    </div>
  );
}

export default App;
