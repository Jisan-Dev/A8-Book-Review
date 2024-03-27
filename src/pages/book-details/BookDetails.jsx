import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
  const { bookId } = useParams();
  const books = useLoaderData();
  const book = books.find((book) => book.bookId === Number(bookId));
  console.log(book);
  return (
    <div>
      <h1> {book.bookName} </h1>
    </div>
  );
};

export default BookDetails;
