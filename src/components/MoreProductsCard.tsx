import React from 'react'
import ShopCard from './ShopCard'
import { productList } from '../constants'

function MoreProductsCard() {
  return (
    <div className=' w-full overflow-x-auto'>
      <div className="flex space-x-4 min-w-max">
        {productList.map((product, index) => (
          <ShopCard key={index} {...product} />
        ))}
      </div>
      
    </div>
  )
}

export default MoreProductsCard
