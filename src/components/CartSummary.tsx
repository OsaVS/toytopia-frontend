import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Radio, FormControlLabel, RadioGroup } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { shippingMethod } from "../types/shippingMethod";

interface CartSummaryProps {
  subTotal: number;
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 425,
      md: 768,
      lg: 800,
      xl: 1024,
    },
  },
});

const CartSummary: React.FC<CartSummaryProps> = ({ subTotal }) => {
  const [shippingCost, setShippingCost] = useState(0);
  const [pickupDecrease, setPickupDecrease] = useState(0);
  const [selectedOption, setSelectedOption] = useState<shippingMethod | null>(
    shippingMethod.Normal
  );

  const costShipping = 550;
  const pickupPercentage = 5;

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as unknown as shippingMethod;
    setSelectedOption(value);

    if (value === shippingMethod.Express) {
      setShippingCost(costShipping);
      setPickupDecrease(0);
    } else if (value === shippingMethod.PickUp) {
      setPickupDecrease(-1 * subTotal * (pickupPercentage / 100));
      setShippingCost(0);
    } else {
      setShippingCost(0);
      setPickupDecrease(0);
    }
  };

  useEffect(() => {
    if (selectedOption === shippingMethod.PickUp) {
      sessionStorage.setItem("shippingCost", pickupDecrease.toString());
    } else {
      sessionStorage.setItem("shippingCost", shippingCost.toString());
    }

    const total = subTotal + shippingCost + pickupDecrease;
    sessionStorage.setItem("subTotal", subTotal.toString());
    sessionStorage.setItem("total", total.toString());
    sessionStorage.setItem("shippingMethod", selectedOption?.toString() || "");
  }, [shippingCost, pickupDecrease, subTotal, selectedOption]);

  const total = subTotal + shippingCost + pickupDecrease;

  return (
    <div className="border-gray-400 border-2 lg:m-2 rounded-lg">
      <div className="flex flex-col text-2xl font-bold">
        <span className="font-semibold text-lg mm:text-xl pr-4 pl-4 pt-4 xl:pr-8 xl:pl-8 xl:pt-8">
          Cart Summary
        </span>

        <ThemeProvider theme={theme}>
          <RadioGroup
            aria-label="shipping"
            name="shipping"
            value={selectedOption}
            onChange={handleOptionChange}
            sx={{
              gap: 2,
              padding: {
                xl: "32px",
                xs: "16px",
              },
            }}
          >
            <div className="flex justify-between w-full border-2 border-gray-400 focus-within:border-black p-2 rounded-lg items-center">
              <FormControlLabel
                value={shippingMethod.Normal}
                control={
                  <Radio
                    sx={{
                      color: "black",
                      "&.Mui-checked": {
                        color: "black",
                      },
                    }}
                  />
                }
                label={
                  <div className="flex justify-between w-full text-sm mm:text-base">
                    <span>Free shipping</span>
                    <span>Rs.0.00</span>
                  </div>
                }
                sx={{
                  width: "100%",
                  "& .MuiFormControlLabel-label": {
                    width: "100%",
                  },
                }}
              />
            </div>

            <div className="flex justify-between w-full border-2 border-gray-400 focus-within:border-black p-2 rounded-lg items-center">
              <FormControlLabel
                value={shippingMethod.Express}
                control={
                  <Radio
                    sx={{
                      color: "black",
                      "&.Mui-checked": {
                        color: "black",
                      },
                    }}
                  />
                }
                label={
                  <div className="flex justify-between w-full text-sm mm:text-base">
                    <span>Express shipping</span>
                    <span className="flex">+Rs.{costShipping}.00</span>
                  </div>
                }
                sx={{
                  width: "100%",
                  "& .MuiFormControlLabel-label": {
                    width: "100%",
                  },
                }}
              />
            </div>
            <div className="flex justify-between w-full border-2 border-gray-400 focus-within:border-black p-2 rounded-lg items-center">
              <FormControlLabel
                value={shippingMethod.PickUp}
                control={
                  <Radio
                    sx={{
                      color: "black",
                      "&.Mui-checked": {
                        color: "black",
                      },
                    }}
                  />
                }
                label={
                  <div className="flex justify-between w-full text-sm mm:text-base">
                    <span>PickUp</span>
                    <span className="flex">%{pickupPercentage}</span>
                  </div>
                }
                sx={{
                  width: "100%",
                  "& .MuiFormControlLabel-label": {
                    width: "100%",
                  },
                }}
              />
            </div>
          </RadioGroup>
        </ThemeProvider>
      </div>

      <div className="flex justify-between border-b border-gray-300 mx-4 xl:mx-8 py-4">
        <p className="text-gray-800 text-base sd:text-lg">Subtotal</p>
        <p>Rs.{subTotal.toFixed(2)}</p>
      </div>

      <div className="flex justify-between mx-4 xl:mx-8 py-4">
        <p className="text-base sd:text-xl font-bold">Total</p>
        <p>Rs.{total.toFixed(2)}</p>
      </div>

      <div className="p-4 xl:px-8 xl:pb-8">
        <Link to="/cart/checkout">
          <button className="bg-black text-white sd:text-xl p-4 rounded-lg w-full">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartSummary;
