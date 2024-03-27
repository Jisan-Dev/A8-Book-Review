import PropTypes from 'prop-types';
import { FaRegStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const HomeBookCard = ({ book }) => {
  const { bookId, image, tags, bookName, author, category, rating } = book;
  return (
    <div className="p-6 border border-[#13131326] rounded-2xl font-workSans cursor-pointer">
      <Link to={`books/${bookId}`}>
        <div className="bg-zinc-100 rounded-2xl w-full h-[230px] flex justify-center items-center  mb-6">
          <img src={image} className="w-full h-[166px] object-contain" alt="" />
        </div>
        <div className="mb-4">
          {tags.map((tag, id) => (
            <span key={id} className="text-primary bg-[#23BE0A0D] px-4 py-2 mr-3 rounded-full text-base font-medium">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-neutral-900 text-2xl font-bold font-playFair mb-4"> {bookName} </h3>
        <h4 className=" text-neutral-900 text-opacity-80 text-base font-medium mb-5">By: {author}</h4>
        <div className="border-t border-dashed border-[#13131326] pt-5 flex justify-between items-center">
          <span className="text-neutral-900 text-opacity-80 text-base font-medium">{category}</span>
          <div className="flex items-center gap-2">
            <span className="text-neutral-900 text-opacity-80 text-base font-medium">{rating}</span>
            <FaRegStar className="text-lg" />
          </div>
        </div>
      </Link>
    </div>
  );
};

HomeBookCard.propTypes = {
  book: PropTypes.object.isRequired,
};

export default HomeBookCard;