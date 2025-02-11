import { useEffect, useState } from "react";
import FilterComponent from "../components/Filter";
import { useGetProductsByCategoryAndPriceMutation } from "../features/product/productApi";
import Loader from "../components/Loader";
import ProductItem from "../components/ProductItem";
import { ProductData } from "../types/product";

const Shop = () => {
  const [category, setCategory] = useState<string>("All");
  const [selectedPrice, setSelectedPrice] = useState<string>("All");

  const [fetchProducts, { data, isLoading }] =
    useGetProductsByCategoryAndPriceMutation();

  useEffect(() => {
    fetchProducts({ category, priceRange: selectedPrice });
  }, [category, selectedPrice]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 xs:px-5 sm:px-10 sd:px-16 xl:px-24 mt-5">
        <div className="col-span-1 md:col-span-2 xl:col-span-1 xl:pr-5 2xl:pr-0">
          <FilterComponent
            setCategory={setCategory}
            selectedCategory={category}
            setSelectedPrice={setSelectedPrice}
            selectedPrice={selectedPrice}
          />
        </div>
        <div className="col-span-3 md:col-span-2 xl:col-span-3">
          <p className="text-lg font-medium mb-3">{category}</p>
          <div className="grid xs:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-5 py-5">
            {data?.data?.length > 0 ? (
              data.data.map((product: ProductData) => (
                <ProductItem
                  key={product.productCode}
                  imageUrl={product.mainImage}
                  productCode={product.productCode}
                  title={product.name}
                  originalPrice={product.price}
                  isNew={product.isNewProduct}
                  rating={5}
                  discountPercentage={product.discount}
                />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500">
                No products found.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
