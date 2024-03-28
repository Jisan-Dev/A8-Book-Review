import React from 'react';
import PropTypes from 'prop-types';
import { GrLocation } from 'react-icons/gr';
import { HiOutlineUsers } from 'react-icons/hi2';
import { MdOutlineDescription } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ListedBookCard = ({ book }) => {
  return (
    <div className="p-6 flex flex-col md:flex-row gap-6 border rounded-2xl mb-6">
      <div className="bg-neutral-900 bg-opacity-5 rounded-2xl flex items-center justify-center w-[230px] max-sm:w-full max-sm:h-64">
        <img src={book.image} className="object-contain h-[172px]" />
      </div>
      <div>
        <h1 className="text-neutral-900 text-2xl font-bold font-playFair mb-4">{book.bookName}</h1>
        <h2 className="text-neutral-900 text-opacity-80 text-base font-medium mb-5">By : {book.author}</h2>
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <span className="text-neutral-900 text-base font-bold mr-2 ">Tags</span>
          {book.tags.map((tag, id) => (
            <span key={id} className="text-primary bg-[#23BE0A0D] px-4 py-2 mr-3 rounded-full text-base font-medium">
              #{tag}
            </span>
          ))}
          <span className="flex items-center gap-2 text-neutral-900 text-opacity-80 text-base font-normal">
            <GrLocation className="text-lg" /> Year of Publishing : {book.yearOfPublishing}
          </span>
        </div>
        <div className="flex gap-4">
          <span className="flex gap-2 items-center text-neutral-900 text-opacity-60 text-base font-normal">
            <HiOutlineUsers className="text-xl" /> Publisher: {book.yearOfPublishing}
          </span>
          <span className="flex gap-2 items-center text-neutral-900 text-opacity-60 text-base font-normal">
            <MdOutlineDescription className="text-xl" /> Page {book.totalPages}
          </span>
        </div>
        <div className="border-t border-neutral-900 border-opacity-20 pt-5 mt-5 max-sm:flex max-sm:flex-wrap gap-2 ">
          <span className="text-[#328EFF] bg-[#328EFF26] px-4 py-[10px] mr-3 rounded-full text-base font-medium">Category: {book.category}</span>
          <span className="text-[#FFAC33] bg-[#FFAC3326] px-4 py-[10px] mr-3 rounded-full text-base font-medium">Rating: {book.rating}</span>
          <Link to={`/books/${book.bookId}`}>
            <button className="bg-primary rounded-full text-white py-[10px] px-[20px] text-base">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ListedBookCard.propTypes = {
  book: PropTypes.object.isRequired,
};

export default ListedBookCard;
