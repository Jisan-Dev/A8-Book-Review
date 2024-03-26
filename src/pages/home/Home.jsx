import Button from '../../components/ui/Button';
import bannerImage from '../../assets/images/bannerBook.png';

const Home = () => {
  return (
    <>
      {/* BANNER */}
      <section className="container mx-auto bg-[#1313130D] px-4 md:px-[120px] py-12 md:py-20 flex flex-col md:flex-row items-center justify-between rounded-3xl mt-3 md:mt-6">
        <div className="max-w-[526px] ">
          <h1 className="text-neutral-900 text-5xl md:text-[56px] font-bold font-playFair mb-10 max-sm:leading-tight">Books to freshen up your bookshelf</h1>
          <Button text="View The List" />
        </div>
        <div>
          <img src={bannerImage} alt="" />
        </div>
      </section>
    </>
  );
};

export default Home;
