import React from 'react'
import { cartList } from '../constants';
import ClearIcon from '@mui/icons-material/Clear';

function Cart() {
  const[quantity, setQuantity] = React.useState(1);

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev === 1 ? prev : prev - 1));

  return (
    <div>
        <div className='flex flex-col justify-center items-center h-96'>
            <div className='text-4xl font-semibold pb-9'>Cart</div>
            <div className='grid grid-cols-3 gap-4'>
                <button className='flex items-center text-left gap-4 pb-6 pr-14 text-black border-black border-b-2 text-sm'><div className='flex w-10 h-10 rounded-full bg-black justify-center items-center text-white'>1</div> Shopping cart</button>
                <button className='flex items-center text-left text-gray-300 gap-4 pb-6 pr-14 text-sm'><div className='flex w-10 h-10 rounded-full bg-gray-300 justify-center items-center text-white'>2</div>Checkout details</button>
                <button className='flex items-center text-left text-gray-300 gap-4 pb-6 pr-14 text-sm'><div className='flex w-10 h-10 rounded-full bg-gray-300 justify-center items-center text-white'>3</div>Order complete</button>
            </div>
        </div>

        <div className='grid grid-cols-2 pr-20 pl-20'>
            <table className='w-full'>
                <thead>
                    <tr className='border-b-2 border-gray-300'>
                        <th className='text-left pb-4 font-semibold pr-20' >Product</th>
                        <th className='text-center pb-4 font-semibold' >Quantity</th>
                        <th className='text-center pb-4 font-semibold' >Price</th>
                        <th className='text-right whitespace-nowrap pb-4 font-semibold'>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                  {cartList.map((cart, index) => (
                    <tr key={index}>
                        <td className='text-left py-4'>
                          <div className='flex flex-row items-center gap-4'>
                            <img src={cart.imageUrl}></img>
                            <div className='flex flex-col'>
                              <div>{cart.title}</div>
                              <div className='text-gray-400 text-sm'>Color:{cart.color}</div>
                              <button className='text-gray-600 text-sm'><ClearIcon /> Remove</button>
                            </div>
                          </div>
                        </td>

                        <td className='flex items-center justify-center py-4'>
                          <div className="flex items-center justify-between w-[50%] rounded-lg p-2 space-x-2 border border-black mt-4">
                            <button className='text-gray-500' onClick={decrementQuantity}>-</button>
                            <span className='text-black'>{cart.quantity}</span>
                            <button className='text-gray-500' onClick={incrementQuantity}>+</button>
                          </div>
                        </td>

                        <td className='text-center py-4'>${cart.price}.00</td>
                        <td className='text-right py-4'>${cart.price * cart.quantity}.00</td>
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
    </div>
  )
}

export default Cart

