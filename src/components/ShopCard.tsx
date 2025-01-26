import "./ShopCard.scss";
import Button from "../components/Button";
import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
  Chip,
  Box,
} from "@mui/material";

interface ProductCardProps {
  imageUrl?: string;
  title: string;
  originalPrice: number;
  discountedPrice?: number;
  isNew?: boolean;
  rating?: number;
  discountPercentage?: number;
  imagePlaceholder?: boolean;
  onAddToCart?: () => void;
}

const ProductCard = ({
  imageUrl,
  title,
  originalPrice,
  discountedPrice,
  isNew,
  rating = 5,
  discountPercentage,
  imagePlaceholder = false,
  onAddToCart,
}: ProductCardProps) => {
  return (
    <Card className="card">
      <Box className="group relative h-[349px] w-[262px] overflow-hidden">
        {imagePlaceholder ? (
          <Box className="box">
            Product Image Placeholder
            {discountPercentage && (
              <Chip
                label={`-${discountPercentage}%`}
                size="small"
                className="chip-discount"
              />
            )}
            {isNew && <Chip label="NEW" size="small" className="chip-new" />}
          </Box>
        ) : (
          <>
            <CardMedia
              component="img"
              className="card-media"
              image={imageUrl}
              alt={title}
            />
            {discountPercentage && (
              <Chip
                label={`-${discountPercentage}%`}
                size="small"
                className="chip-discount"
              />
            )}
            {isNew && <Chip label="NEW" size="small" className="chip-new" />}
          </>
        )}

        {!imagePlaceholder && (
          <div className="absolute bottom-[-20px] left-1/2 z-10 -translate-x-1/2 opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-4 group-hover:opacity-100">
            <Button
              type="button"
              label="Add to Cart"
              onClick={onAddToCart}
              className="add-to-cart-button px-4 py-2"
            />
          </div>
        )}
      </Box>

      <CardContent className="p-4">
        <Rating
          name="product-rating"
          value={rating}
          readOnly
          size="small"
          precision={0.5}
          className="text-rating"
        />

        <Typography variant="h6" className="mt-2 text-lg font-bold text-btn">
          {title}
        </Typography>

        <Box className="mt-2 flex items-center gap-2">
          {discountedPrice ? (
            <>
              <Typography className="text-lg font-bold text-discounted-price">
                ${discountedPrice}
              </Typography>
              <Typography className="text-gray500 line-through">
                ${originalPrice}
              </Typography>
            </>
          ) : (
            <Typography className="text-lg font-bold text-discounted-price">
              ${originalPrice}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
