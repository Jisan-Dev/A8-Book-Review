import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadBooks, getStoredWishedBooks } from '../../utils/localstorage';
import { useLoaderData } from 'react-router-dom';

const ListedBooks = () => {
  const allBooks = useLoaderData();
  const storedReadBooks = getStoredReadBooks();
  const storedWishedBooks = getStoredWishedBooks();
  const readBooks = allBooks.filter((book) => storedReadBooks.includes(book.bookId));
  const wishedBooks = allBooks.filter((book) => storedWishedBooks.includes(book.bookId));
  return (
    <div className="container mx-auto font-workSans">
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          {readBooks.map((book, id) => (
            <h1 key={id}>{book.bookName}</h1>
          ))}
        </TabPanel>
        <TabPanel>
          {wishedBooks.map((book, id) => (
            <h1 key={id}>{book.bookName}</h1>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
