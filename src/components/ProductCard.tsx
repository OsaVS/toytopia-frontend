import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ProductCardProps {
  title: string;
  description: string;
  originalPrice: string;
  discountedPrice?: string;
  imagesGeneral: string[];
  imagesColor: {
    color: string;
    url: string;
  }[];
  category: string;
  productCode: string;
  rating: number;
  noOfReviews: number;
  isNew?: boolean;
  discount?: number;
  productDetails?: string;
  productReviews?: { name: string; review: string; rating: number }[];
  productQuestions?: string;
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
    isNew,
    discount,
    onAddToCart,
    onAddToWishlist,
    productDetails,
    productReviews,
    productQuestions,
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
        {/* Left Section */}
        <div className="flex flex-col h-full ml-20 pr-6 bg-white">
            {/* Enlarged Image */}
            <div className="h-[70vh] min-h-[400px] max-h-[600px] flex items-center justify-center mb-4">
                {/* NEW and 50% off tags */}
                <div className="absolute top-20 left-20 flex flex-col space-y-2">
                    {isNew && (<span className="bg-white text-black text-sm sm:text-base md:text-lg px-2 py-1 rounded shadow">
                    NEW
                    </span>)}
                    {discount && (<span className="bg-green-500 text-white text-sm sm:text-base md:text-lg px-2 py-1 rounded shadow"> -{discount}% </span>)}

                </div>

                <img
                className="w-full h-full object-contain rounded-lg"
                src={selectedImage}
                />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-2 h-[30vh] overflow-y-auto">
                {imagesGeneral.map((image, index) => (
                <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`rounded-lg overflow-hidden border-2 ${
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

        {/* Right Section */}

        <div className=" pl-6 mr-20 bg-white ">
            <p className="text-gray-600"> 
                <Rating name="read-only" sx={{'& .MuiRating-iconFilled': {color: "#343839"}}} size='small' value={rating} readOnly />
                <span className="ml-3 text-[15px]">{noOfReviews} reviews</span>
            </p>

            <h2 className="mt-4 text-4xl text-left mb-4">{title}</h2>
            <p className="mt-2 text-gray-600 text-left">{description}</p>
            <div className="flex items-center mt-4 mb-4 pb-4 border-b">
                {discountedPrice ? (
                    <div>
                        <span className="text-xl font-semibold text-gray-900">{discountedPrice}</span>
                        <span className="text-base text-gray-500 line-through ml-2">{originalPrice}</span>
                    </div>
                ) : (
                    <div>
                        <span className="text-xl font-semibold text-gray-900">{originalPrice}</span> 
                    </div>
                )}
                {/* <span className="text-xl font-semibold text-gray-900">{discountedPrice}</span>
                <span className="text-base text-gray-500 line-through ml-2">{originalPrice}</span> */}
            </div>

            <div className='pb-4 border-b'>Offer
                <div className='w-full h-[50px] bg-gray-200'>20 25 10</div>
            </div>

            {/* Color */}
            <div className="mb-6 mt-4">
                <p className='text-gray-500 text-sm mb-4'>Choose Color</p>
                <p className='text-gray-900 text-lg mb-4'>{color}</p>
                <div className="flex space-x-2">
                    {imagesColor.map((image, index) => (
                        <button key={index} className="w-11 h-11 overflow-hidden border-2 border-gray-200 focus:border-black" onClick={() => productColor(image.color)}>   
                            <img
                                className="w-full h-full object-cover"
                                src={image.url}
                                alt={image.color}
                            />
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-[1fr_3fr] items-center gap-4 mt-6">
                {/* Quantity */}
                <div className="flex items-center justify-between bg-gray-100 rounded-lg p-2">
                    <button className='text-gray-500 px-2' onClick={decrementQuantity}>-</button>
                    <span className='px-4 text-black'>{quantity}</span>
                    <button className='text-gray-500 px-2' onClick={incrementQuantity}>+</button>
                </div>

                {/* Wishlist */}
                    <button
                        onClick={onAddToWishlist}
                        className='flex-grow border border-black bg-white text-black text-sm text-center p-2 rounded-lg hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center'><FavoriteBorderIcon sx={{color: 'inherit'}} />  Wishlist</button>
            </div>

            {/* Add to Cart */}
            <button
                onClick={onAddToCart}
                className="w-full mt-4 px-4 py-2 text-black bg-black-500 border border-black rounded-lg hover:bg-black hover:text-white transition-colors duration-300"
            >
                Add to Cart
            </button>
        </div>

        {/* Content Section */}
        <div className="col-span-2 mt-10 ">
            <Accordion sx={{
                borderTop: 'none', // No top border
                borderLeft: 'none', // No left border
                borderRight: 'none', // No right border
                borderBottom: '1px solid black', // Light gray border
                borderRadius: '0rem', // Rounded corners
                boxShadow: 'none', // Explicitly remove shadow
                }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ fontWeight: 'bold' }}>Product Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ fontWeight: 'normal' }}>
                        {productDetails}
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion  sx={{
                borderTop: 'none', // No top border
                borderLeft: 'none', // No left border
                borderRight: 'none', // No right border
                borderBottom: '1px solid black', // Light gray border
                borderRadius: '0rem', // Rounded corners
                boxShadow: 'none', // Explicitly remove shadow
                }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography  sx={{ fontWeight: 'bold' }}>Reviews ({noOfReviews})</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography  sx={{ fontWeight: 'normal' }}>
                        <div>
                            <Rating name="your-rating" sx={{'& .MuiRating-iconFilled': {color: "#343839"}}} size='small' value={rating} />
                        </div>
                        <div>
                            {productReviews && productReviews.map((review, index) => (
                                <div key={index} className="mb-4 border-b border-black pb-4 text-sm">
                                    <p className="text-gray-900 mt-2 text-semibold">{review.name}</p>
                                    <Rating name="read-only" sx={{'& .MuiRating-iconFilled': {color: "#343839"}}} size='small' value={review.rating} readOnly />
                                    <p className="text-gray-600 mt-2 text-light text-xs">{review.review}</p>
                                    
                                </div>
                            ))}
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
                        

    </div>
  );
}

export default ProductCard