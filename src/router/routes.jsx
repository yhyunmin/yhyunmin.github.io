import { createBrowserRouter } from 'react-router-dom';
import Main from '@pages/Main';
import Post from '@pages/Post';
import ArticleSection from '@components/Organisms/ArticleSection/ArticleSection';
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
        { path: '/', element: <ArticleSection /> },
        { path: 'post/:id', element: <Post /> },
        {
          path: 'about',
          element: <About />,
        },
      ],
    },
    { path: '/*', element: <Error /> },
    { path: '/sitemap.xml', element: <div>sitemap</div> },
  ],
  { basename: '/' }
);

export default router;
