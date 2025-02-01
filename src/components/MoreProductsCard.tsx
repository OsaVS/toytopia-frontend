import React from 'react'
import ShopCard from './ShopCard'
import { productList } from '../constants'
import { ArrowForward } from '@mui/icons-material'

function MoreProductsCard() {
  return (
    <div>
      <div className='flex justify-between mr-20 ml-20 mb-10'>
        <div className='font-semibold text-lg'>You might also like</div>
        <div className='border-b border-black text-xs flex items-center'>
          More Products
          <ArrowForward />
        </div>
      </div>

      <div className=' w-full overflow-x-auto ml-20'>
        <div className="flex space-x-10 min-w-max">
          {productList.map((product, index) => (
            <ShopCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default MoreProductsCard
