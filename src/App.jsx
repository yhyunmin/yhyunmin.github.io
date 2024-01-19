import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@styles/GlobalStyle';
import { lightTheme, darkTheme } from '@styles/theme';
//app.css
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Loading from '@components/Loading/Loading';
import useThemeStore from './store/ThemeStore';
import { createBrowserRouter } from 'react-router-dom';
import Main from 'src/Pages/Main';
import Post from 'src/Pages/Post';
import ArticleSection from '@components/Organisms/ArticleSection/ArticleSection';
import About from '@components/Organisms/About/About';
import Error from 'src/Pages/Error';
import { useFrontMatterFetch } from './store/ArticleStore';

function App() {
  const { theme } = useThemeStore();
  const fetchFrontMatter = useFrontMatterFetch();
  const router = createBrowserRouter(
    [
      {
        loader: async () => {
          return await fetchFrontMatter();
        },
        path: '/',
        element: <Main />,
        children: [
          {
            path: '/articles?',
            element: <ArticleSection />,
            children: [{ path: 'page/:id', element: <ArticleSection /> }],
          },
          {
            path: 'about',
            element: <About />,
          },
        ],
      },
      { path: '/post/:slug?', element: <Post /> },
      { path: '/*', element: <Error /> },
    ],
    { basename: '/' }
  );

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
