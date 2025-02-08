import ProductCard from "../components/ProductCard";
import MoreProductsCard from "../components/MoreProductsCard";
import { useParams } from "react-router-dom";
import { useGetProductByCodeQuery } from "../features/product/productApi";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import { useAddToCartMutation } from "../features/cart/cartApi";

const ProductPage = () => {
  const { productCode } = useParams();
  const { data, isLoading, refetch } = useGetProductByCodeQuery(productCode);
  const [addToCart] = useAddToCartMutation();
  const product = data?.data || null;
  const images = product ? [product.mainImage, ...product.subImages] : [];
  const [quantity, setQuantity] = useState(1);

  const handleIncrementQuantity = () => setQuantity((prev) => prev + 1);
  const handleDecrementQuantity = () =>
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        productId: product._id,
        quantity: quantity,
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    refetch();
  }, [productCode]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-4 md:p-10">
      <div className="flex-1 h-full">
        <ProductCard
          title={product.name}
          description={product.description}
          originalPrice={product.price}
          imagesGeneral={images}
          category={product.category}
          productCode={product.productCode}
          rating={5}
          noOfReviews={12}
          isNew={product.isNewProduct}
          discount={product.discount}
          productReviews={[
            { name: "John Doe", review: "Great product!", rating: 5 },
            { name: "Jane Smith", review: "Good value for money.", rating: 4 },
          ]}
          onAddToCart={handleAddToCart}
          quantity={quantity}
          onIncrementQuantity={handleIncrementQuantity}
          onDecrementQuantity={handleDecrementQuantity}
        />
      </div>

      <div className="w-full mt-10 mb-10">
        <MoreProductsCard />
      </div>
    </div>
  );
};
export default ProductPage;
