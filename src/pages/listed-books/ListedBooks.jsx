import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadBooks, getStoredWishedBooks } from '../../utils/localstorage';
import { useLoaderData } from 'react-router-dom';
import ListedBookCard from '../../components/listed-book-card/ListedBookCard';
import { FaChevronDown } from 'react-icons/fa';

const ListedBooks = () => {
  const allBooks = useLoaderData();
  const storedReadBooks = getStoredReadBooks();
  const storedWishedBooks = getStoredWishedBooks();
  const readBooksFiltered = allBooks.filter((book) => storedReadBooks.includes(book.bookId));
  const [readBooks, setReadBooks] = useState(readBooksFiltered);
  const wishedBooksFiltered = allBooks.filter((book) => storedWishedBooks.includes(book.bookId));
  const [wishedBooks, setWishedBooks] = useState(wishedBooksFiltered);

  const sortReadBooks = (field) => {
    const sortedBooks = [...readBooks].sort((a, b) => {
      if (a[field] < b[field]) return -1;
      if (a[field] > b[field]) return 1;
      return 0;
    });
    setReadBooks(sortedBooks);
    const sortedWished = [...wishedBooks].sort((a, b) => {
      if (a[field] < b[field]) return -1;
      if (a[field] > b[field]) return 1;
      return 0;
    });
    setWishedBooks(sortedWished);
  };

  return (
    <div className="container mx-auto font-workSans">
      <div className="h-[100px] bg-neutral-900 bg-opacity-5 flex items-center justify-center rounded-2xl mb-8">
        <h1 className="text-neutral-900 text-[28px] font-bold">Books</h1>
      </div>
      <div className="flex justify-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 w-48 bg-primary text-white hover:bg-primary">
            Sort By <FaChevronDown />
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 ">
            <li className="items-center" onClick={() => sortReadBooks('rating')}>
              <a>Rating</a>
            </li>
            <li className="items-center" onClick={() => sortReadBooks('totalPages')}>
              <a>Number of pages</a>
            </li>
            <li className="items-center" onClick={() => sortReadBooks('yearOfPublishing')}>
              <a>Publisher Year</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          {readBooks.map((book, id) => (
            <ListedBookCard key={id} book={book} />
          ))}
        </TabPanel>
        <TabPanel>
          {wishedBooks.map((book, id) => (
            <ListedBookCard key={id} book={book} />
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
