import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface ProductCardProps {
  title: string;
  description: string;
  originalPrice: string;
  discountedPrice: string;
  imagesGeneral: string[];
  imagesColor: {
    color: string;
    url: string;
  }[];
  category: string;
  productCode: string;
  rating: number;
  noOfReviews: number;
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
    title,
    description,
    originalPrice,
    discountedPrice,
    imagesGeneral,
    imagesColor,
    category,
    productCode,
    rating,
    noOfReviews,
    onAddToCart,
    onAddToWishlist,
     }) => {

    const [selectedImage, setSelectedImage] = React.useState(imagesGeneral[0]);
    const [quantity, setQuantity] = React.useState(1);
    const [color, setColor ]= React.useState(imagesColor[0].color);

    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => (prev === 1 ? prev : prev - 1)); 

    const productColor = ( color: string ) => {
        setColor(color);
    }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* <div className="flex flex-col items-center justify-center p-4 m-4 bg-white rounded-lg shadow-lg">
            <div className='flex justify-center'>
                <img src={images[0]} alt={name} className="w-48 h-48 object-cover rounded-lg" />
            </div>
            <div className='flex gap-2'>
                <img src={imageAlt} alt={name} className="w-48 h-48 object-cover rounded-lg" />
                <img src={imageAlt} alt={name} className="w-48 h-48 object-cover rounded-lg" />
                <img src={imageAlt} alt={name} className="w-48 h-48 object-cover rounded-lg" />
            </div>
        </div> */}
        <div className="flex flex-col items-center justify-center ml-20 pr-6 bg-white">
            {/* Enlarged Image */}
            <div className="w-full h-68 mb-4 flex items-center justify-center">
                <img
                className="w-full h-full object-cover rounded-lg"
                src={selectedImage}
                />
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-2 mb-6">
                {imagesGeneral.map((image, index) => (
                <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                    selectedImage === image ? 'border-blue-500' : 'border-gray-200'
                    }`}
                >
                    <img
                    className="w-full h-full object-cover"
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    />
                </button>
                ))}
            </div>
        </div>


        <div className=" pl-6 mr-20 bg-white ">
            <p className="text-gray-600"> 
                <Rating name="read-only" sx={{'& .MuiRating-iconFilled': {color: "#343839"}}} size='small' value={rating} readOnly />
                <span className="ml-3 text-[15px]">{noOfReviews} reviews</span>
            </p>

            <h2 className="mt-4 text-4xl text-left mb-4">{title}</h2>
            <p className="mt-2 text-gray-600 text-left">{description}</p>
            <div className="flex items-center mt-4 mb-4 pb-4 border-b">
                <span className="text-xl font-semibold text-gray-900">{discountedPrice}</span>
                <span className="text-base text-gray-500 line-through ml-2">{originalPrice}</span>
            </div>

            <div className='pb-4 border-b'>Offer
                <div className='w-full h-[50px] bg-gray-200'>20 25 10</div>
            </div>

            <div className="mb-4 mt-4">
                <p className='text-gray-500 text-sm mb-4'>Choose Color</p>
                <p className='text-gray-900 text-lg mb-4'>{color}</p>
                <div className="flex space-x-2">
                    {imagesColor.map((image, index) => (
                        <button key={index} className="w-11 h-11 overflow-hidden border-2 border-gray-200" onClick={() => productColor(image.color)}>   
                            <img
                                className="w-full h-full object-cover"
                                src={image.url}
                                alt={image.color}
                            />
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-[auto_1fr] items-center gap-4 mt-4">
                <div className="flex items-center justify-between bg-gray-100 rounded-lg p-2">
                    <button className='text-gray-500 px-2' onClick={decrementQuantity}>-</button>
                    <span className='px-4 text-black'>{quantity}</span>
                    <button className='text-gray-500 px-2' onClick={incrementQuantity}>+</button>
                </div>

                    <button
                        onClick={onAddToWishlist}
                        className='flex-grow border border-black bg-white text-black text-sm text-center p-2 rounded-lg hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center'><FavoriteBorderIcon sx={{color: 'inherit'}} />  Wishlist</button>
            </div>

            <button
                onClick={onAddToCart}
                className="w-full mt-4 px-4 py-2 text-black bg-black-500 border border-black rounded-lg hover:bg-black hover:text-white transition-colors duration-300"
            >
                Add to Cart
            </button>
        </div>
    </div>
  );
}

export default ProductCard