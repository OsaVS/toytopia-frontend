import Button from "../components/Button";
import hero from "../assets/hero.png";

const Home = () => {
  return (
    <div className="xs:h-auto xs:py-8 xl:py-0 xl:h-[80vh] w-full bg-[#FFC95C] grid xs:grid-cols-1 md:grid-cols-2 items-center justify-center">
      <div className="grid items-center xs:px-2 md:px-5 xl:px-16 2xl:px-24 xs:mt-5 md:mt-0 mx-auto">
        <p className="xs:text-3xl xs:text-center md:text-left md:text-4xl xl:text-5xl 2xl:text-6xl xs:leading-none md:leading-snug 2xl:leading-tight font-medium">
          Unbox the Joy Find the Perfect Toy Today!
        </p>
        <img
          src={hero}
          alt=""
          className="xs:block md:hidden xs:w-[300px] mm:w-[350px] xs:h-auto mx-auto my-3"
        />
        <p className="xs:text-sm md:text-base xs:text-center md:text-left my-3">
          Discover a world of fun, learning, and adventure with our handpicked
          toys for every age.
        </p>
        <div className="xs:pr-0 md:pr-14 xs:mt-5 xl:mt-0">
          <Button type="button" label="Shop Now" />
        </div>
      </div>
      <div>
        <img
          src={hero}
          alt=""
          className="xs:hidden md:block md:w-[600px] md:h-[300px] xl:w-[720px] xl:h-[450px]"
        />
      </div>
    </div>
  );
};

export default Home;
