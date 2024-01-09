import { createHashRouter } from 'react-router-dom';
import Main from 'src/Pages/Main';
import Post from 'src/Pages/Post';

const router = createHashRouter(
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
  ],
  { basename: '/' }
);

export default router;
