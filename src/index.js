import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SearchPage from './searchpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/searchpage",
    element: <SearchPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);