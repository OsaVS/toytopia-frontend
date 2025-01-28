import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import ProductCard from "../components/ShopCard";
import productImage from "../assets/shopItems/image.png";
import FilterComponent from "../components/Filter";

const Shop = () => {
  const [category, setCategory] = useState<string>("All Rooms"); // State to track selected category

  return (
    <div className="px-20">
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {/* Left Side - Filter Component */}
        <Grid item xs={12} md={3}>
          <FilterComponent setCategory={setCategory} />{" "}
          {/* Pass setCategory handler */}
        </Grid>

        {/* Right Side - Product Cards */}
        <Grid item xs={12} md={9}>
          {/* Dynamic Title for the page */}
          <Typography variant="h5" sx={{ mb: 3 }}>
            {category}
          </Typography>

          {/* Product Cards Grid */}
          <Grid container spacing={3}>
            {Array.from({ length: 9 }).map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ProductCard
                  imageUrl={productImage}
                  title={`Loveseat Sofa ${index + 1}`}
                  originalPrice={400}
                  discountedPrice={199}
                  isNew={index % 2 === 0}
                  discountPercentage={50}
                  rating={4}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Shop;
