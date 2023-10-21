import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import { loader as searchLoader } from './features/search/searchSlice';
import ErrorMessage from './ui/ErrorMessage';

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <div>cat wiki router</div>,
          loader: searchLoader,
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
          element: <div>this will be some breed id</div>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
