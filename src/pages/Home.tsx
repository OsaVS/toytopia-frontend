import { useEffect } from "react";
import Button from "../components/Button";
import hero from "../assets/hero.png";
import { useGetRandomProductsMutation } from "../features/product/productApi";
import Loader from "../components/Loader";
import { ProductData } from "../types/product";
import ProductItem from "../components/ProductItem";
import { TP_BASE } from "../constants";

const Home = () => {
  const [fetchRandomProducts, { data, isLoading }] =
    useGetRandomProductsMutation();

  useEffect(() => {
    fetchRandomProducts(8);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
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

      <div className="grid xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 py-10 xs:px-5 sm:px-10 sd:px-16 xl:px-20">
        {data?.data?.map((product: ProductData) => (
          <ProductItem
            imageUrl={`${TP_BASE}${product.mainImage}`}
            title={product.name}
            originalPrice={product.price}
            isNew={product.isNewProduct}
            rating={5}
            discountPercentage={product.discount}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
