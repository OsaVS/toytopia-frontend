import { Rating } from "@mui/material";
import Button from "./Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductItem = ({
  imageUrl,
  title,
  originalPrice,
  isNew,
  rating = 5,
  discountPercentage,
}: any) => {
  return (
    <div className="w-full h-auto grid mb-3 border rounded-lg">
      <div className="group relative">
        <img src={imageUrl} alt="" className="h-60 mx-auto hover:scale-x-105" />
        <div className="absolute top-2 left-2">
          {isNew ? (
            <div className="py-[1.5px] px-1 text-center bg-white font-semibold text-sm rounded-md mb-1">
              NEW
            </div>
          ) : null}
          {discountPercentage ? (
            <div className="py-[1.5px] px-1 text-center bg-grn text-white font-semibold text-sm rounded-md">
              -{discountPercentage}%
            </div>
          ) : null}
        </div>
        <div className="absolute top-3 right-3 bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-md shadow-slate-200 cursor-pointer hover:scale-105">
          <FavoriteBorderIcon />
        </div>
        <div className="absolute bottom-[-20px] left-1/2 z-10 -translate-x-1/2 opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-4 group-hover:opacity-100">
          <Button
            type="button"
            label="View Product"
            className="px-3 py-1 font-semibold text-sm"
          />
        </div>
      </div>
      <div className="p-4">
        <Rating
          name="product-rating"
          value={rating}
          readOnly
          size="small"
          precision={0.5}
          sx={{ color: "#343839" }}
        />
        <p className="text-base my-1 font-medium text-btn line-clamp-2 min-h-[2.8rem]">{title}</p>
        <div className="flex items-center gap-2">
          {discountPercentage ? (
            <>
              <p className="text-lg font-medium text-discounted-price">
                Rs.
                {((originalPrice * (100 - discountPercentage)) / 100).toFixed(
                  2
                )}
              </p>
              <p className="text-gray500 line-through">${originalPrice}</p>
            </>
          ) : (
            <p className="text-lg font-medium text-discounted-price">
              Rs.{originalPrice}.00
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
