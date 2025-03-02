import ProductCard from "../components/ProductCard";
import MoreProductsCard from "../components/MoreProductsCard";
import { useParams } from "react-router-dom";
import { useGetProductByCodeQuery } from "../features/product/productApi";
import { useGetReviewsByProductIdQuery } from "../features/review/reviewApi";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const ProductPage = () => {
  const { productCode } = useParams();
  const { data, isLoading, refetch } = useGetProductByCodeQuery(productCode);
  const product = data?.data || null;
  const images = product ? [product.mainImage, ...product.subImages] : [];
  const [quantity, setQuantity] = useState(1);
  const { cart, isLoading: cartLoading, addToCart, removeFromCart } = useCart();
  const { data: reviewsData, refetch: reviewRefetch } =
    useGetReviewsByProductIdQuery(product?._id);
  const reviews = reviewsData?.data || [];

  const handleIncrementQuantity = () => setQuantity((prev) => prev + 1);
  const handleDecrementQuantity = () =>
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));

  const isInCart = cart?.some((item: any) => item.productId === product?._id);

  const handleAddToCart = () => {
    if (!isInCart) {
      addToCart(product?._id, quantity);
      setQuantity(1);
    } else {
      removeFromCart(product?._id);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    refetch();
  }, [productCode]);

  console.log(product)
  if (isLoading || cartLoading) {
    return <Loader />;
  }

  return (
    <div className="p-4 md:p-10">
      <div className="flex-1 h-full">
        <ProductCard
          title={product.name}
          productId={product._id}
          description={product.description}
          originalPrice={product.price}
          imagesGeneral={images}
          category={product.category}
          productCode={product.productCode}
          rating={product.averageRating}
          noOfReviews={product.reviewCount}
          isNew={product.isNewProduct}
          discount={product.discount}
          productReviews={reviews}
          onAddToCart={handleAddToCart}
          isInCart={isInCart}
          quantity={quantity}
          onIncrementQuantity={handleIncrementQuantity}
          onDecrementQuantity={handleDecrementQuantity}
          reviewRefetch={reviewRefetch}
          productRefetch={refetch}
        />
      </div>

      <div className="w-full mt-10 mb-10">
        <MoreProductsCard />
      </div>
    </div>
  );
};
export default ProductPage;
