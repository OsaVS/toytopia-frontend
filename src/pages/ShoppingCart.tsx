import React from 'react'
import { Link } from 'react-router-dom';
import { cartList } from '../constants';
import ClearIcon from '@mui/icons-material/Clear';
import { red } from '@mui/material/colors';
import CartSummary from '../components/CartSummary';

const ShoppingCart = () => {
  const[quantity, setQuantity] = React.useState(1);
  const[deliveryMethod, setDeliveryMethod] = React.useState('free');

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
                <div className='flex items-center text-left gap-4 pb-6 pr-8 mm:pr-20 md:pr-14 text-black border-black border-b-2 text-sm'><div className='flex w-10 h-10 rounded-full bg-black justify-center items-center text-white'>1</div> <span className='lg:text-xl'>Shopping cart</span></div>
                <div className='flex items-center text-left text-gray-300 gap-4 pb-6 md:pr-14 text-sm'><div className='flex w-10 h-10 rounded-full bg-gray-300 justify-center items-center text-white'>2</div><span className='hidden md:block lg:text-xl'>Checkout details</span></div>
                <div className='hidden md:flex items-center text-left text-gray-300 gap-4 pb-6 pr-14 text-sm'><div className='flex w-10 h-10 rounded-full bg-gray-300 justify-center items-center text-white'>3</div><span className='lg:text-xl'>Order complete</span></div>
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr] lg:grid-cols-2 p-8 sd:grid-cols-2 md:pr-10 md:pl-10 lg:pr-16 lg:pl-16 2xl:pr-20 2xl:pl-20'>
            <div className='flex flex-col md:mt-8 md:mr-2 lg:m-4'>
              <table className='w-full'>
                  <thead>
                      <tr className='border-b-2 border-black'>
                          <th className='text-left pb-4 font-semibold md:pr-4 lg:pr-10' >Product</th>
                          <th className='hidden lg:table-cell text-left pb-4 font-semibold' >Quantity</th>
                          <th className='hidden sd:table-cell text-center pb-4 font-semibold' >Price</th>
                          <th className='hidden sd:table-cell text-right whitespace-nowrap pb-4 font-semibold'>Subtotal</th>
                      </tr>
                  </thead>
                  <tbody>
                    {cartList.map((cart, index) => (
                      <tr key={index} className='border-b border-gray-400'>
                          <td className='text-left py-4'>
                            <div className='flex flex-row items-center gap-4'>
                              <img src={cart.imageUrl}></img>
                              <div className='flex flex-col'>
                                <div>{cart.title}</div>
                                <div className='text-gray-400 text-xs mm:text-sm'>Color:{cart.color}</div>
                                <div className="lg:hidden flex items-center justify-between w-[75%] rounded-lg p-2 space-x-2 border border-gray-400 border-2 mt-4">
                                  <button className='text-gray-500' onClick={decrementQuantity}>-</button>
                                  <span className='text-black'>{cart.quantity}</span>
                                  <button className='text-gray-500' onClick={incrementQuantity}>+</button>
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className='hidden lg:table-cell flex items-center justify-center py-4'>
                            <div className="flex items-center justify-between xl:w-[90%] rounded-lg p-2 space-x-2 border border-gray-400 border-2 mt-4">
                              <button className='text-gray-500' onClick={decrementQuantity}>-</button>
                              <span className='text-black'>{cart.quantity}</span>
                              <button className='text-gray-500' onClick={incrementQuantity}>+</button>
                            </div>
                          </td>

                          <td className='text-right sd:text-center py-4'>
                            <div className='flex flex-col'>
                              <div>${cart.price}.00</div>
                              <div className='sd:hidden'><ClearIcon sx={{color:"red"}}/></div>
                            </div>
                          </td>
                          <td className='hidden sd:table-cell text-right py-4'>${cart.price * cart.quantity}.00</td>
                          <td className='hidden sd:table-cell text-right py-4'><ClearIcon sx={{color:"red"}}/></td>
                      </tr>
                    ))}
                      {/* <tr>
                          <td className='text-left py-4'>Product 1</td>

                          <td className='flex items-center justify-center py-4'>
                            <div className="flex items-center justify-between w-[50%] bg-gray-100 rounded-lg p-2 space-x-2">
                              <button className='text-gray-500' onClick={decrementQuantity}>-</button>
                              <span className='text-black'>{quantity}</span>
                              <button className='text-gray-500' onClick={incrementQuantity}>+</button>
                            </div>
                          </td>

                          <td className='text-left py-4'>$19.00</td>
                          <td className='text-right py-4'>$38.00</td>
                      </tr> */}
                  </tbody>
              </table>
            </div>

            <div className='flex flex-col pt-14 md:pt-0 md:m-2 lg:m-0'>
              <CartSummary subTotal={subTotal}/>
            </div>
        </div>
    </div>
  )
}

export default ShoppingCart

