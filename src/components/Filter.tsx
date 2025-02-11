import React from "react";
import { Box, Typography, Checkbox } from "@mui/material";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { ToyCategory } from "../types/product";
import { priceRanges } from "../constants";

interface FilterComponentProps {
  setCategory: (category: string) => void;
  selectedCategory: string;
  setSelectedPrice: (price: string) => void;
  selectedPrice: string;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  setCategory,
  selectedCategory,
  setSelectedPrice,
  selectedPrice,
}) => {
  const categories = ["All", ...Object.values(ToyCategory)];
  const allPrices = ["All", ...priceRanges];

  const handleCategoryClick = (category: string) => {
    setCategory(category == "All" ? "All" : category);
  };

  const handlePriceChange = (price: string) => {
    setSelectedPrice(price === "All" ? "All" : price);
  };

  return (
    <Box sx={{ maxWidth: 300, borderRadius: 2, marginBottom: 2 }}>
      <div className="hidden xl:block">
        <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
          <TuneOutlinedIcon
            fontSize="small"
            sx={{ mr: 1, color: "text.secondary" }}
          />
          <p className="text-3xl font-medium">Filter</p>
        </Box>
      </div>
      <p className="text-lg font-medium mt-5 mb-3">CATEGORIES</p>
      <Box>
        {categories.map((category) => (
          <Typography
            key={category}
            onClick={() => handleCategoryClick(category)}
            sx={{
              cursor: "pointer",
              mb: 1,
              fontWeight: selectedCategory === category ? "bold" : "normal",
              textDecoration:
                selectedCategory === category ? "underline" : "none",
              color:
                selectedCategory === category
                  ? "text.primary"
                  : "text.secondary",
              transition: "color 0.2s ease",
            }}
          >
            {category}
          </Typography>
        ))}
      </Box>

      <p className="text-lg font-medium mt-10 mb-3">PRICE</p>
      <Box>
        {allPrices.map((price) => (
          <Box
            key={price}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: "0.5px" }}
          >
            <Typography
              sx={{
                color:
                  selectedPrice === price ? "text.primary" : "text.secondary",
                transition: "color 0.2s ease",
              }}
            >
              {price}
            </Typography>
            <Checkbox
              checked={selectedPrice === price}
              onChange={() => handlePriceChange(price)}
              size="small"
              color="default"
              sx={{
                "& .MuiSvgIcon-root": {
                  width: 20,
                  height: 20,
                  borderRadius: "4px",
                  border: "2px solid",
                  borderColor: selectedPrice === price ? "transparent" : "#aaa",
                  backgroundColor: selectedPrice === price ? "#000" : "#f0f0f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "& path": {
                    color: selectedPrice === price ? "#fff" : "transparent",
                  },
                },
                "&:hover .MuiSvgIcon-root": {
                  backgroundColor: selectedPrice === price ? "#000" : "#e0e0e0",
                },
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FilterComponent;
