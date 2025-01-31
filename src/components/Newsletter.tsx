import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import InputField from "./InputField";
import newsletter from "../assets/shopItems/images/newsletter.png";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError(""); // Clear error when user starts typing
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }
    console.log("Email submitted:", email);
    setEmail(""); // Reset form
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#000",
        backgroundImage: `url(${newsletter})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "25vh",
        maxHeight: "360px",
        padding: { xs: 2, md: 4 },
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{
          fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
          fontWeight: "bold",
        }}
      >
        Join Our Newsletter
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" }, mb: 2 }}
      >
        Sign up for deals, new products, and promotions
      </Typography>
      <Box
        sx={{
          width: { xs: "90%", sm: "60%", md: "40%" },
          display: "flex",
          gap: 2,
          alignItems: "center",
        }}
      >
        <InputField
          type="email"
          name="email"
          value={email}
          placeholder="Email address"
          required={true}
          onChange={handleEmailChange}
          error={error}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#000", // Black background
            color: "#fff", // White text
            height: "56px", // Match the height of the input field
            padding: "0 30px", // Horizontal padding
            fontSize: "1rem",
            fontWeight: "bold",
            textTransform: "none", // Prevent uppercase transformation
            borderRadius: "20px", // Sharp edges (no border radius)
            "&:hover": {
              backgroundColor: "#333", // Darker black on hover
            },
          }}
        >
          Signup
        </Button>
      </Box>
    </Box>
  );
};

export default Newsletter;
