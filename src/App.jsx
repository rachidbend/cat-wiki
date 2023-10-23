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

/*
A few notes:

- When first loading the homepage, the loader gets all the necessary data, but without the URL of the images.

- Each component that has to render an image, fetchs the URL for the image it will render by calling a function that takes the ID of the image and returns the URL of that image.

- The most searched breeds, is meerly a list created by the developer, it may not reflect real world data. for this feature to work properly, it needs to be implimented on the backend.

- The 'why you should have a cat' page, the article is taken from the website that is in the source at the end of the page. and for the homepage section, it is from the design.
*/

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Homepage />,
          // the data is fetched when the page is first rendered
          loader: searchLoader,
          action: searchAction,
          errorElement: <ErrorMessage />,
        },
        {
          path: '/most-searched',
          element: <MostSearchedPage />,
          /* This loader serves to fetch data when this page is accessed directly*/
          loader: searchLoader,
          errorElement: <ErrorMessage />,
        },
        {
          // under construction
          path: '/articles',
          element: <div>Under Construction</div>,
        },
        {
          path: '/articles/why-you-should-have-a-cat',
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
