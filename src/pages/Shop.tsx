import React from "react";
import ProductCard from "../components/ShopCard";
import productImage from "../assets/shopItems/image.png";


const Shop = () => {
  return (
    <div>
      <div>
        <ProductCard
          imageUrl={productImage}
          title="Loveseat Sofa"
          originalPrice={400}
          discountedPrice={199}
          isNew={true}
          discountPercentage={50}
          rating={4}
          // Add this prop to show placeholder
        />
      </div>
    </div>
  );
};

export default Shop;
