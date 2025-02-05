import React from 'react'
import ShoppingCart from './ShoppingCart'
import { Outlet } from 'react-router-dom'

function Cart() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Cart
