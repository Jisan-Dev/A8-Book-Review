import Button from '../../components/ui/Button';
import bannerImage from '../../assets/images/bannerBook.png';
import { Link, useLoaderData } from 'react-router-dom';
import HomeBookCard from '../../components/home-book-card/HomeBookCard';

const Home = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <>
      {/* BANNER */}
      <section className="container mx-auto bg-[#1313130D] px-4 md:px-[120px] py-12 md:py-20 flex flex-col md:flex-row items-center justify-between rounded-3xl mt-3 md:mt-6">
        <div className="max-w-[526px] ">
          <h1 className="text-neutral-900 text-5xl md:text-[56px] font-bold font-playFair mb-10 max-sm:leading-tight">Books to freshen up your bookshelf</h1>
          <Link to={'/listed-books'}>
            <Button text="View The List" />
          </Link>
        </div>
        <div>
          <img src={bannerImage} alt="" />
        </div>
      </section>

      <section className="mt-28 container mx-auto">
        <h2 className="text-neutral-900 text-[40px] font-bold text-center font-playFair mb-9">Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {books.map((book) => (
            <HomeBookCard key={book.bookId} book={book} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
