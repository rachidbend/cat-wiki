import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout/AppLayout';

import { loader as searchLoader } from './features/homepage/Homepage';
import ErrorMessage from './ui/ErrorMessage';
import Homepage from './features/homepage/Homepage';
import { action as searchAction } from './features/homepage/Homepage';
import BreedPage from './features/detailsPage/BreedPage';
import { loader as breedLoader } from './features/detailsPage/BreedPage';

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Homepage />,

          loader: searchLoader,
          action: searchAction,
          errorElement: <ErrorMessage />,
        },
        {
          path: '/most-searched',
          element: <div>top 10 most searched</div>,
        },
        {
          path: '/article',
          element: <div>show some articles</div>,
        },
        {
          path: '/article/why-you-should-have-a-cat',
          element: <div>why you should have a cat</div>,
        },
        {
          path: '/breed/:id',
          element: <BreedPage />,
          loader: breedLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
