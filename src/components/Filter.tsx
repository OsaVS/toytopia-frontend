import React, { useState } from "react";
import { Box, Typography, Checkbox } from "@mui/material";
import { FilterList as FilterIcon } from "@mui/icons-material";

const categories = [
  "All Rooms",
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Bathroom",
  "Dining",
  "Outdoor",
];

const priceRanges = [
  "All Price",
  "$0.00 - 99.99",
  "$100.00 - 199.99",
  "$200.00 - 299.99",
  "$300.00 - 399.99",
  "$400.00+",
];

interface FilterComponentProps {
  setCategory: (category: string) => void; // Prop to notify parent about selected category
}

const FilterComponent: React.FC<FilterComponentProps> = ({ setCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Rooms");
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCategory(category);
  };

  const handlePriceChange = (price: string) => {
    setSelectedPrices((prev) =>
      prev.includes(price) ? prev.filter((p) => p !== price) : [...prev, price]
    );
  };

  return (
    <Box sx={{ maxWidth: 300, borderRadius: 2 }}>
      {/* Filter Heading */}
      <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
        <FilterIcon fontSize="small" sx={{ mr: 1, color: "text.secondary" }} />
        <Typography variant="h4" sx={{ mb: 0 }}>
          Filter
        </Typography>
      </Box>

      {/* Categories Section */}
      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
        Categories
      </Typography>
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

      {/* Price Ranges Section */}
      <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 3, mb: 1 }}>
        Price
      </Typography>
      <Box>
        {priceRanges.map((price) => (
          <Box
            key={price}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 1 }}
          >
            <Typography
              sx={{
                color: selectedPrices.includes(price)
                  ? "text.primary"
                  : "text.secondary",
                transition: "color 0.2s ease",
              }}
            >
              {price}
            </Typography>
            <Checkbox
              checked={selectedPrices.includes(price)}
              onChange={() => handlePriceChange(price)}
              size="small"
              color="default"
              sx={{
                "& .MuiSvgIcon-root": {
                  width: 20,
                  height: 20,
                  borderRadius: "4px",
                  border: "2px solid",
                  borderColor: selectedPrices.includes(price)
                    ? "transparent"
                    : "#aaa",
                  backgroundColor: selectedPrices.includes(price)
                    ? "#000"
                    : "#f0f0f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "& path": {
                    color: selectedPrices.includes(price)
                      ? "#fff"
                      : "transparent",
                  },
                },
                "&:hover .MuiSvgIcon-root": {
                  backgroundColor: selectedPrices.includes(price)
                    ? "#000"
                    : "#e0e0e0",
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
