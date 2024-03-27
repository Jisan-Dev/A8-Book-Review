import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from '../pages/home/Home';
import BookDetails from '../pages/book-details/BookDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('/books.json'),
      },
      {
        path: '/books/:bookId',
        element: <BookDetails />,
        loader: () => fetch('/books.json'),
      },
    ],
  },
]);

export default router;
