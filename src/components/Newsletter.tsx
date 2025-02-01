import React, { useState } from "react";
import { Button, Typography, Box, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import newsletter from "../assets/shopItems/images/newsletter.png";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }
    setEmail("");
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
          display: "flex",
          alignItems: "center",
          width: { xs: "90%", sm: "60%", md: "40%" },
          borderBottom: "1px solid #6C7275",
          paddingBottom: "8px",
        }}
      >
        <EmailIcon sx={{ color: "#6C7275", mr: 1 }} />
        <TextField
          type="email"
          name="email"
          value={email}
          placeholder="Email address"
          required
          onChange={handleEmailChange}
          variant="standard"
          InputProps={{
            disableUnderline: true,
            sx: {
              fontSize: "1rem",
            },
          }}
          fullWidth
          sx={{
            "& input": {
              padding: "6px 0",
            },
          }}
        />
        <Button
          type="submit"
          variant="text"
          sx={{
            fontSize: "1rem",
            textTransform: "none",
            color: "#6C7275",
            fontWeight: "semibold",
            ml: 2,
          }}
        >
          Signup
        </Button>
      </Box>
      {error && (
        <Typography color="error" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default Newsletter;
