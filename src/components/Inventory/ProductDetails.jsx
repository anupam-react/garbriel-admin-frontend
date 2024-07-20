import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
      const navigate = useNavigate();
  return (
    <div>
       <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Product Details</p>
        <div
                  className="inventory-button2"
                  style={{width:"150px"}}
          onClick={() => navigate("/inventory")}
        >
          <img src="../../Mask group (12).png" alt="" className='w-6 h-6'/>
          <p>BACK</p>
        </div>
      </div>
          <div className="loyalty-form-container h-[80vh] overflow-auto">
              <div className='mt-3'>
                        <p className="text-lg font-semibold">Product Name</p>
              <p className='text-[#00000080]'>Butter Croissant</p>
            </div>
              <div className='mt-3'>
                        <p className="text-lg font-semibold pb-2">Product Image</p>
                     <img src="../../Rectangle 8765 (3).png" alt="" className='image-shadow'/>
              </div>
                 <div className='mt-3'>
                        <p className="text-lg font-semibold">Product Description</p>
              <p className='text-[#00000080]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
                 <div className='mt-3'>
                        <p className="text-lg font-semibold">Allergens</p>
              <p className='text-[#00000080]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
              </div>
                   <div className='mt-3'>
                        <p className="text-lg font-semibold">Product Category</p>
              <p className='text-[#00000080]'>Beverages</p>
              </div>
                   <div className='mt-3'>
                        <p className="text-lg font-semibold">Product Sub-Category</p>
              <p className='text-[#00000080]'>Hot Drinks</p>
              </div>
                   <div className='mt-3'>
                        <p className="text-lg font-semibold">SKU</p>
              <p className='text-[#00000080]'>37847dhdh</p>
              </div>
                   <div className='mt-3'>
                        <p className="text-lg font-semibold">Product Price</p>
              <p className='text-[#00000080]'>£50</p>
              </div>
                   <div className='mt-3'>
                        <p className="text-lg font-semibold">Quantity Available</p>
              <p className='text-[#00000080]'>NA</p>
              </div>
                   <div className='mt-3'>
                        <p className="text-lg font-semibold">Dimensions and Weight</p>
              <p className='text-[#00000080]'>5000ml ,10g</p>
              </div>
                   <div className='mt-3'>
                        <p className="text-lg font-semibold">Brand Name</p>
              <p className='text-[#00000080]'>Pasanda</p>
              </div>
                   <div className='mt-3'>
                        <p className="text-lg font-semibold">Shipping Information</p>
              <p className='text-[#00000080]'>Lorem ipsum dolor sit amet</p>
              </div>
                   <div className='mt-3'>
                        <p className="text-lg font-semibold">Return Policy</p>
              <p className='text-[#00000080]'>Lorem ipsum dolor sit amet</p>
              </div>
                   <div className='mt-3'>
                        <p className="text-lg font-semibold">Product Color</p>
              <p className='text-[#00000080]'>NA</p>
              </div>
                   <div className='mt-3'>
                        <p className="text-lg font-semibold">Product Size</p>
              <p className='text-[#00000080]'>500ml</p>
              </div>
                   <div className='mt-3'>
                        <p className="text-lg font-semibold">Available Online</p>
              <p className='text-[#00000080]'>No</p>
              </div>
                   <div className='mt-3'>
                        <p className="text-lg font-semibold">Available Instore</p>
              <p className='text-[#00000080]'>YES</p>
              </div>
                   <div className='my-3'>
                        <p className="text-lg font-semibold">Search Keywords</p>
              <p className='text-[#00000080]'>Hot Drink, Hot chocolate</p>
              </div>
              
        
             
   
   </div>
 
    </div>
  )
}

export default ProductDetails
