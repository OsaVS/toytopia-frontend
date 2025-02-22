import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  useAddToWishlistMutation,
  useGetWishlistQuery,
  useRemoveFromWishlistMutation,
} from "../features/wishList/wishlistApi";

interface ProductCardProps {
  title: string;
  productId: string;
  description: string;
  originalPrice: number;
  imagesGeneral: string[];
  category: string;
  productCode: string;
  rating: number;
  noOfReviews: number;
  isNew?: boolean;
  discount?: number;
  productDetails?: string;
  productReviews?: { name: string; review: string; rating: number }[];
  productQuestions?: string;
  onAddToCart?: () => void;
  isInCart?: boolean;
  quantity: number;
  onIncrementQuantity: () => void;
  onDecrementQuantity: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  productId,
  description,
  originalPrice,
  imagesGeneral,
  category,
  productCode,
  rating,
  noOfReviews,
  isNew,
  discount,
  onAddToCart,
  isInCart,
  quantity,
  onIncrementQuantity,
  onDecrementQuantity,
  productReviews,
}) => {
  const [selectedImage, setSelectedImage] = useState(imagesGeneral[0]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [ratingValue, setRatingValue] = useState<number | null>(0);

  const { data: wishlist, refetch } = useGetWishlistQuery(undefined);
  const [addToWishlist] = useAddToWishlistMutation();
  const [removeFromWishlist] = useRemoveFromWishlistMutation();

  const isWishlisted = wishlist?.items?.some(
    (item: any) => item.productId === productId
  );

  const handleWishlistClick = async () => {
    if (isWishlisted) {
      await removeFromWishlist(productId);
      refetch();
    } else {
      await addToWishlist(productId);
      refetch();
    }
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? prevIndex : prevIndex - 1;
      setSelectedImage(imagesGeneral[newIndex]);
      return newIndex;
    });
  };
  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => {
      const newIndex =
        prevIndex === imagesGeneral.length - 1 ? prevIndex : prevIndex + 1;
      setSelectedImage(imagesGeneral[newIndex]);
      return newIndex;
    });
  };

  const changeImage = (index: number, image: string) => {
    setSelectedImage(image);
    setSelectedImageIndex(index);
  };

  const handleRatingChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setRatingValue(newValue);
  };

  return (
    <div className="ml-8 mr-8 md:ml-20 md:mr-20">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <div className=" flex flex-col h-full md:pr-6 bg-white">
          <div className="relative h-[70vh] min-h-[400px] max-h-[600px] flex items-center justify-center mb-4">
            <div className="absolute top-4 left-4 flex flex-col space-y-2">
              {isNew ? (
                <span className="bg-white text-black text-sm sm:text-base md:text-lg px-2 py-1 rounded shadow">
                  NEW
                </span>
              ) : null}
              {discount ? (
                <span className="bg-green-500 text-white text-sm sm:text-base md:text-lg px-2 py-1 rounded shadow">
                  {" "}
                  -{discount}%{" "}
                </span>
              ) : null}
            </div>

            <IconButton
              onClick={prevImage}
              sx={{
                position: "absolute",
                left: 16,
                backgroundColor: "rgba(255, 255, 255, 0.3)",

                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
              }}
            >
              <ArrowBack />
            </IconButton>

            <img
              className="w-full h-full object-contain rounded-lg"
              src={selectedImage}
            />

            <IconButton
              onClick={nextImage}
              sx={{
                position: "absolute",
                right: 16,
                backgroundColor: "rgba(255, 255, 255, 0.3)",

                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.9)" },
              }}
            >
              <ArrowForward />
            </IconButton>
          </div>

          <div className="hidden md:grid grid-cols-3 gap-2 h-[30vh] overflow-y-auto">
            {imagesGeneral.map((image, index) => (
              <button
                key={index}
                onClick={() => changeImage(index, image)}
                className={`rounded-lg overflow-hidden border-2 ${
                  selectedImage === image
                    ? "border-blue-500"
                    : "border-gray-200"
                }`}
              >
                <img
                  className="w-full h-full object-cover"
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="w-full md:pl-6 bg-white min-h-screen">
          <p className="text-gray-600">
            <Rating
              name="read-only"
              sx={{ "& .MuiRating-iconFilled": { color: "#343839" } }}
              size="small"
              value={rating}
              readOnly
            />
            <span className="ml-3 text-[15px]">{noOfReviews} reviews</span>
          </p>

          <h2 className="mt-4 text-4xl text-left mb-4">{title}</h2>
          <p className="mt-2 text-gray-600 text-left">{description}</p>
          <div className="flex items-center mt-4 mb-4 pb-4 border-b">
            {discount ? (
              <div>
                <span className="text-xl font-semibold text-gray-900">
                  Rs.
                  {((originalPrice * (100 - discount)) / 100).toFixed(2)}
                </span>
                <span className="text-base text-gray-500 line-through ml-2">
                  {originalPrice}
                </span>
              </div>
            ) : (
              <div>
                <span className="text-xl font-semibold text-gray-900">
                  Rs.{originalPrice}.00
                </span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-[1fr_3fr] items-center gap-4 mt-6">
            <div className="flex items-center justify-between bg-gray-100 rounded-lg p-2">
              <button
                className="text-gray-500 px-2"
                onClick={onDecrementQuantity}
              >
                -
              </button>
              <span className="px-4 text-black">{quantity}</span>
              <button
                className="text-gray-500 px-2"
                onClick={onIncrementQuantity}
              >
                +
              </button>
            </div>

            <button
              onClick={handleWishlistClick}
              className={`flex-grow border border-black ${
                isWishlisted ? "bg-grn" : "bg-white"
              } text-black text-sm text-center p-2 rounded-lg hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center`}
            >
              <FavoriteBorderIcon
                sx={{ color: "inherit", marginRight: "5px" }}
              />{" "}
              {isWishlisted ? "Remove from WishList" : "Add to Wishlist"}
            </button>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <button
              onClick={onAddToCart}
              className={`w-full mt-4 px-4 py-2 text-black bg-black-500 border ${
                isInCart ? "bg-red-600" : "bg-white"
              } border-black rounded-lg hover:bg-black hover:text-white transition-colors duration-300`}
            >
              {isInCart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>

          <div className="grid grid-cols-2 mt-6">
            <div className="text-left text-xs text-gray-600">
              <p className="mt-3">CATEGORY</p>
              <p className="mt-3">PRODUCT CODE</p>
            </div>
            <div className="text-left text-xs text-gray-900">
              <p className="mt-3">{category}</p>
              <p className="mt-3">{productCode}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-2 mt-10 mb-10 h-full">
        <Accordion
          sx={{
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            borderBottom: "1px solid black",
            borderRadius: "0rem",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ fontWeight: "bold" }}>
              Reviews ({noOfReviews})
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontWeight: "normal" }}>
              <div className="mb-6">
                <Rating
                  name="your-rating"
                  sx={{ "& .MuiRating-iconFilled": { color: "#343839" } }}
                  size="small"
                  value={ratingValue}
                  onChange={handleRatingChange}
                />
                <div className="mt-6">
                  <TextField
                    fullWidth
                    variant="outlined"
                    multiline
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <button className="text-white bg-black px-4 py-2 rounded-lg">
                            Write Review
                          </button>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
              </div>
              <div>
                {productReviews &&
                  productReviews.map((review, index) => (
                    <div
                      key={index}
                      className="mb-4 border-b border-black pb-4 text-sm"
                    >
                      <p className="text-gray-900 mt-2 text-semibold">
                        {review.name}
                      </p>
                      <Rating
                        name="read-only"
                        sx={{ "& .MuiRating-iconFilled": { color: "#343839" } }}
                        size="small"
                        value={review.rating}
                        readOnly
                      />
                      <p className="text-gray-600 mt-2 text-light text-xs">
                        {review.review}
                      </p>
                    </div>
                  ))}
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default ProductCard;
