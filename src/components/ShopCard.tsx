import Button from "../components/Button";

import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
  Chip,
  Box,
  styled,
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

const StyledCard = styled(Card)({
  position: "relative",
  width: 262, // Match image container width
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
});

// Add image container with fixed dimensions
const ImageContainer = styled(Box)({
  position: "relative",
  height: 349,
  width: 262,
  overflow: "hidden", // Keep button hidden initially
  "&:hover": {
    "& .add-to-cart-button": {
      opacity: 1,
      bottom: "16px", // Final position
    },
  },
});

const AddToCartWrapper = styled("div")({
  position: "absolute",
  bottom: "-20px", // Start hidden below
  left: "50%",
  transform: "translateX(-50%)",
  opacity: 0,
  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
  zIndex: 1,
});

const PriceContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginTop: "8px",
});

const DiscountBadge = styled(Chip)({
  position: "absolute",
  top: "8px",
  right: "8px",
  backgroundColor: "#ff4242",
  color: "white",
  fontWeight: "bold",
});

const NewBadge = styled(Chip)({
  position: "absolute",
  top: "8px",
  left: "8px",
  backgroundColor: "#4caf50",
  color: "white",
  fontWeight: "bold",
});

const ImagePlaceholder = styled(Box)({
  height: "100%",
  width: "100%",
  backgroundColor: "#f5f5f5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#666",
  fontSize: "14px",
});

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
    <StyledCard>
      <ImageContainer>
        {imagePlaceholder ? (
          <ImagePlaceholder>
            Product Image Placeholder
            {discountPercentage && (
              <DiscountBadge label={`-${discountPercentage}%`} size="small" />
            )}
            {isNew && <NewBadge label="NEW" size="small" />}
          </ImagePlaceholder>
        ) : (
          <>
            <CardMedia
              component="img"
              height="349"
              width="262"
              image={imageUrl}
              alt={title}
              sx={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
            {discountPercentage && (
              <DiscountBadge label={`-${discountPercentage}%`} size="small" />
            )}
            {isNew && <NewBadge label="NEW" size="small" />}
          </>
        )}

        {/* Add to Cart Button - shows only on non-placeholder images */}
        {!imagePlaceholder && (
          <AddToCartWrapper className="add-to-cart-button">
            <Button
              type="button"
              label="Add to Cart"
              onClick={onAddToCart}
              className="px-4 py-2 hover:bg-gray-800" // Reduced padding
              style={{
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                whiteSpace: "nowrap", // Ensures single line
                backgroundColor: "#141718",
                color: "white",
                margin: 0, // Remove default margins
                lineHeight: "1.2", // Tighter line spacing
                fontSize: "0.875rem", // Slightly smaller text
              }}
            />
          </AddToCartWrapper>
        )}
      </ImageContainer>

      <CardContent>
        <Rating
          name="product-rating"
          value={rating}
          readOnly
          size="small"
          precision={0.5}
          sx={{
            color: "#343839",
            "& .MuiRating-icon": {
              color: "#343839",
            },
            "& .MuiRating-iconFilled": {
              color: "#343839",
            },
            "& .MuiRating-iconHover": {
              color: "#343839",
            },
          }}
        />

        <Typography variant="h6" component="div" mt={1}>
          {title}
        </Typography>

        <PriceContainer>
          {discountedPrice ? (
            <>
              <Typography variant="body1" color="error" fontWeight="bold">
                ${discountedPrice}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ textDecoration: "line-through" }}
              >
                ${originalPrice}
              </Typography>
            </>
          ) : (
            <Typography variant="body1" fontWeight="bold">
              ${originalPrice}
            </Typography>
          )}
        </PriceContainer>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;
