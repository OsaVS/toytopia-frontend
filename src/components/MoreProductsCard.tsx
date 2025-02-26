import { ArrowForward } from "@mui/icons-material";
import ProductItem from "./ProductItem";
import { useGetRandomProductsMutation } from "../features/product/productApi";
import { useEffect } from "react";
import Loader from "./Loader";
import { ProductData } from "../types/product";

function MoreProductsCard() {
  const [fetchRandomProducts, { data, isLoading }] =
    useGetRandomProductsMutation();

  useEffect(() => {
    fetchRandomProducts(6);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="flex justify-between mr-8 ml-8 mb-4 md:mr-20 md:ml-20 md:mb-10">
        <div className="font-semibold text-lg">You might also like</div>
        <div className="xs:hidden border-b border-black text-xs sd:flex items-center">
          More Products
          <ArrowForward />
        </div>
      </div>

      <div className="min-w-screen overflow-x-auto ml-20">
        <div className="flex space-x-4 sd:space-x-5 min-w-max">
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

      <div className="xs:block sd:hidden mt-4 mr-8 ml-8">
        <div className="flex text-xs items-center text-left w-full">
          More Products
          <ArrowForward />
        </div>
        <div className="border-b border-black w-[108px]"></div>
      </div>
    </div>
  );
}

export default MoreProductsCard;
