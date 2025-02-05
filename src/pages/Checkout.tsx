import React from 'react'
import { cartList } from '../constants';
import ClearIcon from '@mui/icons-material/Clear';
import { red } from '@mui/material/colors';
import OrderSummary from '../components/OrderSummary';
import DoneIcon from '@mui/icons-material/Done';

const Cart = () => {
  const[quantity, setQuantity] = React.useState(1);

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev === 1 ? prev : prev - 1));

  const calculateSubtotal = () => {
    return cartList.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  const subTotal = calculateSubtotal();

  return (
    <div>
        <div className='flex flex-col mt-20 mb-10 mr-8 ml-8 md:mr-10 md:ml-10 lg:mr-20 lg:ml-20'>
            <div className='flex justify-center items-center text-4xl font-semibold pb-9'>Cart</div>
            <div className='flex flex-row justify-between md:grid md:grid-cols-3 gap-4'>
                <div className='flex items-center text-left gap-4 pb-6 pr-8 mm:pr-20 md:pr-14 text-black border-green-500 border-b-2 text-sm'><div className='flex w-10 h-10 rounded-full bg-green-500 justify-center items-center text-white'><DoneIcon /> </div> <span className='lg:text-xl text-green-500'>Shopping cart</span></div>
                <div className='flex items-center text-left gap-4 pb-6 pr-8 mm:pr-20 md:pr-14 text-black border-black border-b-2 text-sm'><div className='flex w-10 h-10 rounded-full bg-black justify-center items-center text-white'>2</div><span className='hidden md:block lg:text-xl'>Checkout details</span></div>
                <div className='hidden md:flex items-center text-left text-gray-300 gap-4 pb-6 pr-14 text-sm'><div className='flex w-10 h-10 rounded-full bg-gray-300 justify-center items-center text-white'>3</div><span className='lg:text-xl'>Order complete</span></div>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr] lg:grid-cols-2 p-8 sd:grid-cols-2 md:pr-10 md:pl-10 lg:pr-16 lg:pl-16 2xl:pr-20 2xl:pl-20'>
             <div className='flex flex-col space-y-3 lg:mr-4'> 
              <div className='border-2 border-black rounded-md p-4'>
                <span>Contact Information</span>
              </div>

              <div className='border-2 border-black rounded-md p-4'>
                <span>Shipping Address</span>
              </div>

              <div className='border-2 border-black rounded-md p-4'>
                <span>Payment methodM</span>
              </div>
            </div>

            <div className='flex flex-col pt-14 md:pt-0 md:m-2 lg:ml-4'>
              <OrderSummary cartList={cartList}/>
            </div>
        </div>
    </div>
  )
}

export default Cart

