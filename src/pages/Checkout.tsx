import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { cartList } from '../constants';
import OrderSummary from '../components/OrderSummary';
import DoneIcon from '@mui/icons-material/Done';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ProfileField from '../components/ProfileField';
import { Radio, FormControlLabel, RadioGroup } from '@mui/material';

const Cart = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditcard');

  const calculateSubtotal = () => {
    return cartList.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  const handlePayementMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
    sessionStorage.setItem('paymentMethod', event.target.value);
  }

  const subTotal = calculateSubtotal();

  return (
    <div className='px-10 sd:px-16 md:px-20'>
        <div className='flex flex-col mt-20 mb-10'>
            <div className='flex justify-center items-center text-4xl font-semibold pb-9'>CheckOut</div>
            <div className='flex flex-row w-full justify-between xl:grid xl:grid-cols-3 gap-4'>
                <div className='hidden md:flex items-center text-left gap-4 md:gap-2 xl:gap-4 pb-6 pr-8 mm:pr-20 md:pr-8 lg:pr-14 text-black border-green-500 border-b-2 text-sm'><div className='flex w-10 h-10 rounded-full bg-green-500 justify-center items-center text-white'><DoneIcon /> </div> <span className='xl:text-xl text-green-500'>Shopping cart</span></div>
                <div className='flex items-center text-left gap-4 md:gap-2 xl:gap-4 pb-6 pr-8 mm:pr-20 md:pr-8 lg:pr-14 text-black border-black border-b-2 text-sm'><div className='flex w-10 h-10 rounded-full bg-black justify-center items-center text-white'>2</div><span className='xl:text-xl'>Checkout details</span></div>
                <div className='flex items-center text-left text-gray-300 gap-4 md:gap-2 xl:gap-4 pb-6 md:pr-8 lg:pr-14 text-sm'><div className='flex w-10 h-10 rounded-full bg-gray-300 justify-center items-center text-white'>3</div><span className='hidden md:block xl:text-xl'>Order complete</span></div>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 pb-8 sd:grid-cols-2 '>
             <div className='flex flex-col space-y-3 sd:mr-3 lg:mr-4'> 
              <div className='border-2 border-gray-400 rounded-md p-4'>
                <span>Contact Information</span>

                <div className='flex flex-col mt-4'>
                  <div className='grid grid-cols-2 gap-2'>
                    <ProfileField name='firstname' label='First Name' value='' onChange={() => {}} />
                    <ProfileField name='lastname' label='Last Name' value='' onChange={() => {}} />
                  </div>

                  <ProfileField name='phone' label='Phone' value='' onChange={() => {}} />
                  <ProfileField name='email' label='Email' value='' onChange={() => {}} />
                </div>
              </div>

              <div className='border-2 border-gray-400 rounded-md p-4'>
                <span>Shipping Address</span>
                <div className='flex flex-col mt-4'>
                  <ProfileField name='streetaddress' label='Street Address' value='' onChange={() => {}} />
                  <ProfileField name='country' label='Country' value='' onChange={() => {}} /> 
                  <ProfileField name='city' label='Town/City' value='' onChange={() => {}} />

                  <div className='grid grid-cols-2 gap-2'>
                    <ProfileField name='state' label='State' value='' onChange={() => {}} />
                    <ProfileField name='zip' label='Zip' value='' onChange={() => {}} />
                  </div>
                </div>
                
              </div>

              <div className='border-2 border-gray-400 rounded-md p-4'>
                <span>Payment method</span>
                <div className='flex flex-col mt-4 mb-4 border-b-2 border-gray-400 pb-4'>
                  <RadioGroup 
                  aria-label="payment" 
                  name="payment" 
                  value={paymentMethod} 
                  onChange={handlePayementMethodChange}
                  sx={{ gap: 1,}}>
                    <div className='flex justify-between w-full border-2 border-gray-400 focus-within:border-black focus-within:bg-gray-50 p-2 rounded-lg items-center'>
                      <FormControlLabel 
                      value="creditcard" 
                      control={<Radio sx={{
                        color: 'black', // Unchecked color
                        '&.Mui-checked': {
                          color: 'black', // Checked color
                        },
                      }}/>} 
                      label={<div className='flex w-full justify-between'>
                        <span>Credit Card</span>
                        <CreditCardIcon sx={{ color: 'black' }} />
                      </div>} 
                      sx={{
                        width: '100%', 
                        '& .MuiFormControlLabel-label': {
                          width: '100%', 
                        },
                      }}/>
                    </div>
                    

                    <div className='flex justify-between w-full border-2 border-gray-400 focus-within:border-black focus-within:bg-gray-50 p-2 rounded-lg items-center'>
                      <FormControlLabel 
                      value="Paypal" 
                      control={<Radio sx={{
                        color: 'black', // Unchecked color
                        '&.Mui-checked': {
                          color: 'black', // Checked color
                        },
                      }}/>} 
                      label={<div className='flex w-full'>
                        <span>PayPal</span>
                      </div>} 
                      sx={{
                        width: '100%', 
                        '& .MuiFormControlLabel-label': {
                          width: '100%', 
                        },
                      }}/>
                    </div>
                  </RadioGroup>

                </div>

                <div>
                  <div>
                    <ProfileField name='cardnumber' label='Card Number' value='' onChange={() => {}} />
                  </div>
                  
                  <div className='grid grid-cols-2 gap-2'>
                    <ProfileField name='expirydate' label='Expiry Date' value='' onChange={() => {}} />
                    <ProfileField name='cvv' label='CVV' value='' onChange={() => {}} />
                  </div>
                </div>
              </div>

              <Link to='/cart/ordercomplete'>
                <button className='hidden sd:block mt-4 bg-black text-white lg:text-lg rounded-lg p-4 w-full'>Place Order</button>
              </Link>
            </div>

            <div className='flex flex-col sd:ml-3 lg:ml-4'>
              <OrderSummary cartList={cartList}/>

              <Link to='/cart/ordercomplete'>
                <button className='sd:hidden mt-4 bg-black text-white sd:text-lg rounded-lg p-4 w-full'>Place Order</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Cart

