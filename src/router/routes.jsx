import { createBrowserRouter } from 'react-router-dom';
import Main from '@pages/Main';
import Post from '@pages/Post';
import ArticleList from '@components/Organisms/ArticleSection/ArticleSection';
import About from '@components/Organisms/About/About';
import Error from '@pages/Error';
const router = createBrowserRouter(
  [
    {
      path: '',
      element: <Main />,
      loader: async () => {
        return new Promise(resolve => {
          setTimeout(() => {
            return resolve('loading done');
          }, 400);
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
