import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from '../pages/home/Home';
import BookDetails from '../pages/book-details/BookDetails';
import ListedBooks from '../pages/listed-books/ListedBooks';
import ErrorPage from '../pages/ErrorPage';
import PagesToRead from '../pages/pages-to-read/PagesToRead';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
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
      {
        path: '/listed-books',
        element: <ListedBooks />,
        loader: () => fetch('/books.json'),
      },
      {
        path: '/pages-to-read',
        element: <PagesToRead />,
        loader: () => fetch('/books.json'),
      },
    ],
  },
]);

export default router;
