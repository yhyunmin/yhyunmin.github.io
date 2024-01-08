import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import router from './router/routes';
import Loading from './components/Loading/Loading';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} fallbackElement={<Loading />}>
    <App />
  </RouterProvider>
);
