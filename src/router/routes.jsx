import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import Main from 'src/Pages/Main';
import Post from 'src/Pages/Post';
import ArticleList from '@components/Organisms/ArticleList/ArticleList';
import About from './../components/Organisms/About/About';
import Error from 'src/Pages/Error';
const router = createBrowserRouter(
  [
    {
      path: '',
      element: <Main />,
      loader: async () => {
        return new Promise(resolve => {
          setTimeout(() => {
            return resolve('loading done');
          }, 1000);
        });
      },
      children: [
        { path: '/', element: <ArticleList /> },
        { path: 'post/:id', element: <Post /> },
        {
          path: 'about',
          element: <About />,
        },
      ],
    },
    { path: '/*', element: <Error /> },
  ],
  { basename: '/' }
);

export default router;
