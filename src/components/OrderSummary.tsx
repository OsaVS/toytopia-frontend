import React from 'react'
import { ProductCart } from '../types/product'

interface OrderSummaryProps {
    cartList: ProductCart[]
}

const OrderSummary = ({ cartList }: OrderSummaryProps
) => {
    const subTotal = sessionStorage.getItem('subTotal');
    const total = sessionStorage.getItem('total');
    const shippingCost = sessionStorage.getItem('shippingCost');

  return (
    <div className='border-2 border-gray-400 p-4 rounded-lg '>
        <span className='lg:text-xl font-bold'>Order Summary</span>
        <div className='flex flex-col pt-4'>
            {cartList.map((cart, index) => (
                <div key={index} className='flex flex-row border-b border-gray-300 pt-4 pb-4 w-full'>
                    <div className='flex flex-row justify-between items-center gap-4 w-full'>
                        <div className='flex flex-row'>
                            <img src={cart.imageUrl} alt={cart.title} className='w-20 h-20'/>

                            <div className='flex flex-col gap-2'>
                                <div>{cart.title}</div>
                                <div className='text-gray-400 text-xs'>{cart.color}</div>
                                <div className='flex items-center gap-4'>
                                    <div className='flex items-center gap-4'>
                                        <span className='text-sm'>Quantity:</span>
                                        <span>{cart.quantity}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>${cart.price}.00</div>
                    </div>
                </div>
            ))}
        </div>

        <div className='flex flex-col pt-4'>
            <div className='flex flex-row justify-between pt-4 border-b border-gray-300'>
                <div>Shipping</div>
                {
                    shippingCost === '0' ? (
                    <div>Free</div>
                    ) : Number(shippingCost) < 0 ? (
                    <div className='text-green-500'>-${(Math.abs(Number(shippingCost)).toFixed(2))}</div>
                    ) : (
                    <div className='text-red-600'>+${shippingCost}.00</div>
                    )
                }
            </div>
            <div className='flex flex-row justify-between pt-4 border-b border-gray-300'>
                <div>Subtotal</div>
                <div>${subTotal}.00</div>
            </div>
            <div className='flex flex-row justify-between pt-4 font-bold'>
                <div>Total</div>
                <div>${total}.00</div>
            </div>
        </div>
    </div>
  )
}

export default OrderSummary
