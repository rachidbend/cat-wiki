import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout/AppLayout';

import { loader as searchLoader } from './features/homepage/Homepage';
import ErrorMessage from './ui/ErrorMessage';
import Homepage from './features/homepage/Homepage';
import { action as searchAction } from './features/homepage/Homepage';
import BreedPage from './features/detailsPage/BreedPage';
import { loader as breedLoader } from './features/detailsPage/BreedPage';
import MostSearchedPage from './ui/mostSearhcedHomePage/MostSearchedPage';

import ArticlePage from './features/article/ArticlePage';
import ArticleComponent from './features/article/ArticleComponent';

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
          element: <MostSearchedPage />,
        },
        {
          path: '/article',
          element: <ArticleComponent />,
        },
        {
          path: '/article/why-you-should-have-a-cat',

          element: <ArticlePage />,
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
