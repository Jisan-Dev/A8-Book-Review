import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Button from '../../components/ui/Button';
import { getStoredReadBooks, storeReadBooks } from '../../utils/localstorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
  const { bookId } = useParams();
  const books = useLoaderData();
  const book = books.find((book) => book.bookId === Number(bookId));

  const readBtnHandler = () => {
    const storedReadBooks = getStoredReadBooks();
    if (storedReadBooks.includes(Number(bookId))) {
      toast.error('You have already read this book');
    } else {
      storeReadBooks(Number(bookId));
      toast.success('Book added to read list');
    }
  };

  return (
    <div className="flex gap-12 container mx-auto mb-9">
      <div className="bg-neutral-900 bg-opacity-5 rounded-2xl flex items-center justify-center w-1/2">
        <img src={book.image} className="object-contain h-[564px]" />
      </div>
      <div className="w-1/2 font-workSans">
        <h1 className="text-neutral-900 text-[40px] font-bold font-playFair mb-4">{book.bookName}</h1>
        <h2 className="text-neutral-900 text-opacity-80 text-xl font-medium mb-10">By : {book.author}</h2>
        <h3 className="text-neutral-900 text-opacity-80 text-xl font-medium mb-10"> {book.category} </h3>
        <p className="text-neutral-900 text-opacity-70 text-base font-normal leading-relaxed mb-7">
          <strong className="text-neutral-900 text-base font-bold">Review : </strong> {book.review}
        </p>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-neutral-900 text-base font-bold mr-2 ">Tags</span>
          {book.tags.map((tag, id) => (
            <span key={id} className="text-primary bg-[#23BE0A0D] px-4 py-2 mr-3 rounded-full text-base font-medium">
              #{tag}
            </span>
          ))}
        </div>
        <div className="border-t border-neutral-900 border-opacity-20 pt-6 space-y-3 mb-8">
          <p className="text-neutral-900 text-base font-semibold flex items-center ">
            <span className="text-neutral-900 text-opacity-70 text-base font-normal w-60">Number of Pages:</span> <span>{book.totalPages}</span>
          </p>
          <p className="text-neutral-900 text-base font-semibold flex items-center ">
            <span className="text-neutral-900 text-opacity-70 text-base font-normal w-60">Publisher:</span> <span>{book.publisher}</span>
          </p>
          <p className="text-neutral-900 text-base font-semibold flex items-center ">
            <span className="text-neutral-900 text-opacity-70 text-base font-normal w-60">Year of Publishing:</span> <span>{book.yearOfPublishing}</span>
          </p>
          <p className="text-neutral-900 text-base font-semibold flex items-center ">
            <span className="text-neutral-900 text-opacity-70 text-base font-normal w-60">Rating:</span> <span>{book.rating}</span>
          </p>
        </div>
        <div className="space-x-2">
          <Button
            clickHandler={readBtnHandler}
            bg="bg-transparent"
            border="border border-neutral-900 border-opacity-30"
            text="Read"
            textStyle="text-neutral-900 font-semibold"
            textSize="text-lg"
          />
          <Button bg="bg-[#50B1C9]" text="Wishlist" textStyle="text-white font-semibold" textSize="text-lg" />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default BookDetails;
