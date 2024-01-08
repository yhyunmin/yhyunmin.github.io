import { createHashRouter } from 'react-router-dom';
import App from 'src/App';
import Post from 'src/page/Post';

const router = createHashRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [{ path: '/:postId', element: <Post /> }],
    },
  ],
  { basename: '/' }
);

export default router;
