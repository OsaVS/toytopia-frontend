import { useEffect } from "react";
import Button from "../components/Button";
import hero from "../assets/hero.png";
import { useGetRandomProductsMutation } from "../features/product/productApi";
import Loader from "../components/Loader";
import { ProductData } from "../types/product";
import ProductItem from "../components/ProductItem";
import PromotionBanner from "../components/PromotionBanner";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PriceChangeOutlinedIcon from "@mui/icons-material/PriceChangeOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

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

      <div className="xs:px-5 sm:px-10 sd:px-16 xl:px-20 mt-20">
        <h1 className="text-center md:text-left text-2xl sd:text-3xl font-semibold">
          Featured Products
        </h1>
        <div className="grid xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 py-10">
          {data?.data?.map((product: ProductData) => (
            <ProductItem
              productId={product._id}
              imageUrl={product.mainImage}
              productCode={product.productCode}
              title={product.name}
              originalPrice={product.price}
              isNew={product.isNewProduct}
              rating={5}
              discountPercentage={product.discount}
            />
          ))}
        </div>
      </div>

      <PromotionBanner date={"2025-03-10T23:59:59"} image={hero} />

      <div className="grid grid-cols-1 sd:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 items-center justify-center xs:gap-5 md:gap-10 xs:px-5 sm:px-10 sd:px-16 xl:px-24 my-20">
        <div className="bg-[#F3F5F7] w-full h-auto grid items-start py-8 pl-6 pr-8">
          <LocalShippingOutlinedIcon sx={{ fontSize: 50, color: "#6C7275" }} />
          <p className="text-[#141718] mt-3 text-lg font-semibold">
            Free Shipping
          </p>
          <p className="text-[10px] text-[#6C7275] mt-1">Order above Rs.2000</p>
        </div>
        <div className="bg-[#F3F5F7] w-full h-auto grid items-start p-8">
          <PriceChangeOutlinedIcon sx={{ fontSize: 50, color: "#6C7275" }} />
          <p className="text-[#141718] mt-3 text-lg font-semibold">
            Money-back
          </p>
          <p className="text-[10px] text-[#6C7275] mt-1">30 days guarantee</p>
        </div>
        <div className="bg-[#F3F5F7] w-full h-auto grid items-start p-8">
          <HttpsOutlinedIcon sx={{ fontSize: 50, color: "#6C7275" }} />
          <p className="text-[#141718] mt-3 text-lg font-semibold">
            Secure Payments
          </p>
          <p className="text-[10px] text-[#6C7275] mt-1">Secured by Stripe</p>
        </div>
        <div className="bg-[#F3F5F7] w-full h-auto grid items-start p-8">
          <LocalPhoneOutlinedIcon sx={{ fontSize: 50, color: "#6C7275" }} />
          <p className="text-[#141718] mt-3 text-lg font-semibold">
            24/7 Support
          </p>
          <p className="text-[10px] text-[#6C7275] mt-1">
            Phone and Email support
          </p>
        </div>
      </div>

      <div className="grid items-center justify-center xs:px-5 sm:px-10 sd:px-16 xl:px-24">
        <div className="text-center">
          <p className="text-gray-500 font-semibold mb-2">NEWSFEED</p>
          <p className="text-2xl sd:text-3xl font-semibold mb-2">Instagram</p>
          <p className="font-medium mb-2">
            Follow us on social media for more discount & promotions
          </p>
          <p className="text-gray-500 font-medium">@toytopia_official</p>
        </div>
        <div className="grid grid-cols-1 sd:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 items-center justify-center xs:gap-5 md:gap-10 my-8 mx-auto">
          <div className="w-60 h-60 bg-gray-500">
            <img src={img1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-60 h-60 bg-gray-500">
            {" "}
            <img src={img2} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-60 h-60 bg-gray-500">
            {" "}
            <img src={img3} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-60 h-60 bg-gray-500">
            {" "}
            <img src={img4} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
