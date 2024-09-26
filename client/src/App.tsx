import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import OneCurdPage from './components/pages/OneCurdPage';
import AddNewCurd from './components/pages/AddNewCurd';

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          element: <MainPage />,
          path: '/',
        },
        {
          element: <OneCurdPage />,
          path: '/curds/:curdId',
        },
        {
          element: <AddNewCurd />,
          path: '/newCurd',
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
