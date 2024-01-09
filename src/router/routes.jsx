import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import Main from 'src/Pages/Main';
import Post from 'src/Pages/Post';
import About from 'src/Pages/About';
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Main />,
      loader: async () => {
        return new Promise(resolve => {
          setTimeout(() => {
            return resolve('loading done');
          }, 1000);
        });
      },
      children: [{ path: '/:postId', element: <Post /> }],
    },
    {
      path: 'about',
      element: <About />,
    },
  ],
  { basename: '/' }
);

export default router;
