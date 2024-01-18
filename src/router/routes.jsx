import { createBrowserRouter } from 'react-router-dom';
import Main from 'src/Pages/Main';
import Post from 'src/Pages/Post';
import ArticleSection from '@components/Organisms/ArticleSection/ArticleSection';
import About from '@components/Organisms/About/About';
import Error from 'src/Pages/Error';
import contextLoader from 'src/util/contextLoader';
const router = createBrowserRouter(
  [
    {
      loader: async () => {
        return await contextLoader;
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
    { path: '/post/:id', element: <Post /> },
    { path: '/*', element: <Error /> },
  ],
  { basename: '/' }
);

export default router;
