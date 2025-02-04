import React, { useState } from 'react';
import { Radio, FormControlLabel, RadioGroup } from '@mui/material';

interface CartSummaryProps {
  subTotal: number;
//   costShipping: number;
//   pickupPercentage: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  subTotal,
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

    if (value === 'shipping') {
      setShippingCost(costShipping);
      setPickupDecrease(0); // Reset pickup increase
    } else if (value === 'pickup') {
      setPickupDecrease(subTotal * (pickupPercentage / 100));
      setShippingCost(0); // Reset shipping cost
    } else {
      setShippingCost(0);
      setPickupDecrease(0);
    }
  };

  const total = subTotal + shippingCost - pickupDecrease;

  return (
    <div className="border-gray-400 border-2 p-4 m-8 rounded-lg">
      <div className="flex flex-col text-2xl font-bold">
        <span className='font-semibold text-xl pr-4 pl-4 pt-4'>Cart Summary</span>

        <RadioGroup
          aria-label="shipping"
          name="shipping"
          value={selectedOption}
          onChange={handleOptionChange}
          sx={{ gap: 2,
            padding: '16px',
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
            label={<div className="flex justify-between w-full"><span>Free shipping</span><span>$0.00</span></div>} 
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
                label={<div className="flex justify-between w-full"><span>Express shipping</span><span className='flex'>+${costShipping}.00</span></div>}
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
                label={<div className="flex justify-between w-full"><span>PickUp</span><span className='flex'>%{pickupPercentage}</span></div>}
                sx={{
                    width: '100%', 
                    '& .MuiFormControlLabel-label': {
                      width: '100%', 
                    },
                  }}
            />
           </div>
        </RadioGroup>
      </div>

      <div className="flex justify-between border-b border-gray-300 p-4">
        <p className='text-gray-800 text-lg'>Subtotal</p>
        <p>${subTotal.toFixed(2)}</p>
      </div>

      <div className="flex justify-between p-4">
        <p className='text-xl font-bold'>Total</p>
        <p>${total.toFixed(2)}</p>
      </div>

      <div className="flex justify-between p-4 pt-8">
        <button className="bg-black text-white text-xl p-4 rounded-lg w-full">
            Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
