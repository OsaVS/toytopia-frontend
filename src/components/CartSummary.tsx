import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Radio, FormControlLabel, RadioGroup } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface CartSummaryProps {
  subTotal: number;
  // deliveryMethod: string;
  // setdeliveryMethod: (value: string) => void;
//   costShipping: number;
//   pickupPercentage: number;
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 425,  // Custom small breakpoint
      md: 768,  // Custom medium breakpoint
      lg: 800, // Custom large breakpoint
      xl: 1024, // Custom extra-large breakpoint
    },
  },
});

const CartSummary: React.FC<CartSummaryProps> = ({
  subTotal,
  // deliveryMethod,
  // setdeliveryMethod,
//   costShipping,
//   pickupPercentage,
}) => {
  const [shippingCost, setShippingCost] = useState(0);
  const [pickupDecrease, setPickupDecrease] = useState(0);
  const [selectedOption, setSelectedOption] = useState('free'); // 'free', 'shipping', 'pickup'

    const costShipping = 15;
    const pickupPercentage = 21;

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    // setdeliveryMethod(value);

    if (value === 'shipping') {
      setShippingCost(costShipping);
      setPickupDecrease(0); // Reset pickup increase
    } else if (value === 'pickup') {
      setPickupDecrease(-1 * subTotal * (pickupPercentage / 100));
      setShippingCost(0); // Reset shipping cost
    } else {
      setShippingCost(0);
      setPickupDecrease(0);
    }

  };

  // useEffect to update sessionStorage when shippingCost or pickupDecrease changes
  useEffect(() => {
    // Check if 'pickup' option is selected
  if (selectedOption === 'pickup') {
    // If pickup is selected, store pickupDecrease as shippingCost
    sessionStorage.setItem('shippingCost', pickupDecrease.toString());
  } else {
    // Otherwise, store the actual shipping cost
    sessionStorage.setItem('shippingCost', shippingCost.toString());
  }

    const total = subTotal + shippingCost + pickupDecrease;
    sessionStorage.setItem('subTotal', subTotal.toString());
    sessionStorage.setItem('total', total.toString());
  }, [shippingCost, pickupDecrease, subTotal]);

  const total = subTotal + shippingCost + pickupDecrease;

  return (
    <div className="border-gray-400 border-2 lg:m-2 rounded-lg">
      <div className="flex flex-col text-2xl font-bold">
        <span className='font-semibold text-lg mm:text-xl pr-4 pl-4 pt-4 xl:pr-8 xl:pl-8 xl:pt-8'>Cart Summary</span>

        <ThemeProvider theme={theme}>
          <RadioGroup
            aria-label="shipping"
            name="shipping"
            value={selectedOption}
            onChange={handleOptionChange}
            sx={{ gap: 2,
              padding: {
                xl: '32px',
                xs: '16px',
              },
            }}
          >
            <div className="flex justify-between w-full border-2 border-gray-400 focus-within:border-black p-2 rounded-lg items-center">
              <FormControlLabel 
              value="free" 
              control={<Radio sx={{
                          color: 'black', // Unchecked color
                          '&.Mui-checked': {
                          color: 'black', // Checked color
                          },
                      }}/>} 
              label={<div className="flex justify-between w-full text-sm mm:text-base md:text-xs xl:text-base"><span>Free shipping</span><span>Rs.0.00</span></div>} 
              sx={{
                      width: '100%', 
                      '& .MuiFormControlLabel-label': {
                        width: '100%', 
                      },
                    }}/>
            </div>
            
            <div className="flex justify-between w-full border-2 border-gray-400 focus-within:border-black p-2 rounded-lg items-center">
              <FormControlLabel
                  value="shipping"
                  control={<Radio sx={{
                      color: 'black', // Unchecked color
                      '&.Mui-checked': {
                      color: 'black', // Checked color
                      },
                  }}/>}
                  label={<div className="flex justify-between w-full text-sm mm:text-base md:text-xs xl:text-base"><span>Express shipping</span><span className='flex'>+Rs.{costShipping}.00</span></div>}
                  sx={{
                      width: '100%', 
                      '& .MuiFormControlLabel-label': {
                        width: '100%', 
                      },
                    }}
              />
            </div>
            <div className="flex justify-between w-full border-2 border-gray-400 focus-within:border-black p-2 rounded-lg items-center">
              <FormControlLabel
                  value="pickup"
                  control={<Radio sx={{
                      color: 'black', // Unchecked color
                      '&.Mui-checked': {
                      color: 'black', // Checked color
                      },
                  }}/>}
                  label={<div className="flex justify-between w-full text-sm mm:text-base md:text-xs xl:text-base"><span>PickUp</span><span className='flex'>%{pickupPercentage}</span></div>}
                  sx={{
                      width: '100%', 
                      '& .MuiFormControlLabel-label': {
                        width: '100%', 
                      },
                    }}
              />
            </div>
          </RadioGroup>
        </ThemeProvider>
      </div>

      <div className="flex justify-between border-b border-gray-300 mx-4 xl:mx-8 py-4">
        <p className='text-gray-800 text-base sd:text-lg'>Subtotal</p>
        <p>Rs.{subTotal.toFixed(2)}</p>
      </div>

      <div className="flex justify-between mx-4 xl:mx-8 py-4">
        <p className='text-base sd:text-xl font-bold'>Total</p>
        <p>Rs.{total.toFixed(2)}</p>
      </div>

      <div className='p-4 xl:px-8 xl:pb-8'>
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
