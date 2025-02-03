import ProductCard from "../components/ProductCard";
import TrayT1 from "../assets/thumbnail1.png";
import TrayT2 from "../assets/thumbnail2.png";
import TrayT3 from "../assets/thumbnail3.png";
import TrayG from "../assets/TrayG.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import MoreProductsCard from "../components/MoreProductsCard";

const ProductPage = () => {
  const images = [
    TrayG, // Enlarged image
    image2, // Thumbnail 1
    image3, // Thumbnail 2
    image4, // Thumbnail 3
  ];

  const imagesColor = [
    { color: "Black", url: TrayT1 }, // Enlarged image
    { color: "Brown", url: TrayT2 },
    { color: "White", url: TrayT3 }, // Thumbnail 2
  ];

  return (
    <div className="p-4 md:p-10">
      <div className="flex-1 h-full">
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
          rating={1}
          noOfReviews={12}
          isNew={true}
          discount={50}
          productDetails="Details about the product"
          productReviews={[
            { name: "John Doe", review: "Great product!", rating: 5 },
            { name: "Jane Smith", review: "Good value for money.", rating: 4 },
          ]}
        />
      </div>

      <div className="w-full mt-10 mb-10">
        <MoreProductsCard />
      </div>
    </div>
  );
};
export default ProductPage;
