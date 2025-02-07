import React from 'react'
import ShopCard from './ShopCard'
import { productList } from '../constants'
import { ArrowForward } from '@mui/icons-material'

function MoreProductsCard() {
  return (
    <div>
      <div className='flex justify-between mr-8 ml-8 mb-4 md:mr-20 md:ml-20 md:mb-10'>
        <div className='font-semibold text-lg'>You might also like</div>
        <div className='xs:hidden border-b border-black text-xs sd:flex items-center'>
          More Products
          <ArrowForward />
        </div>
      </div>

      <div className='min-w-screen overflow-x-auto ml-20'>
        <div className="flex space-x-4 sd:space-x-10 min-w-max">
          {productList.map((product, index) => (
            <ShopCard key={index} {...product} />
          ))}
        </div>
      </div>

      <div className='xs:block sd:hidden mt-4 mr-8 ml-8'> 
        <div className='flex text-xs items-center text-left w-full'>
            More Products
            <ArrowForward />
        </div>
        <div className='border-b border-black w-[108px]'></div>
      </div>

    </div>
    
  )
}

export default MoreProductsCard
