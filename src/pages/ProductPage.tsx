import React from "react";
import ProductCard from "../components/ProductCard";
import TrayT1 from "../assets/trayT1.png";
import TrayG from "../assets/TrayG.png";

const ProductPage = () => {
  const images = [
    TrayG, // Enlarged image
    'https://via.placeholder.com/100x100', // Thumbnail 1
    'https://via.placeholder.com/100x100', // Thumbnail 2
    'https://via.placeholder.com/100x100', // Thumbnail 3
  ];

  const imagesColor = [
    {color: 'Black', url: TrayT1}, // Enlarged image
    {color: 'Brown', url: TrayT1},
    {color: 'Red', url:TrayT1}, // Thumbnail 2
    {color: 'Yellow', url:TrayT1}, // Thumbnail 3
  ];

  return (
    <div className="p-10">
      <ProductCard
        title="Tray Table"
        description="Light and easy to move around with removable tray top, handy for serving snacks."
        originalPrice="$400.00"
        discountedPrice="$199.00"
        // offerExpires={{ days: 2, hours: 12, minutes: 45, seconds: 5 }}
        imagesGeneral={images}
        imagesColor={imagesColor}
        category="Living Room"
        productCode="FUR001"
        rating={4.5}
        noOfReviews={12}
      />
    </div>
  );
};
export default ProductPage;
