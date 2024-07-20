import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { DialogDefault } from "../common/DilogBox";
const EditProduct = () => {
  const [openSuccess, setSuccess] = useState(false);
 
  const navigate = useNavigate();
  const handleSubmit = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      navigate('/inventory')
    }, 1000);
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Editing Product</p>
        <div
          className="flex items-center px-6 h-12"
          style={{
            backgroundColor: "#FFFFFF",
            width: "20rem",
            borderRadius: "12px",
            color: "#8BA3CB",
          }}
        >
          <img src="../../image 2 (3).svg" alt="search" className="w-6 h-6" />
          <input
            type="text"
            className="border-none w-48 bg-transparent outline-none focus:ring-0 focus:shadow-none focus:border-none"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="loyalty-form-container h-[80vh] overflow-auto">
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Product Name</p>
          <div className="flex gap-4">
            <input
              type="text"
              className="input-loyalty2"
              value="Butter Croissant"
            />
              <button className="edit-botton1" onClick={()=> navigate('/inventory/edit-prod')}>Edit</button>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Product Description</p>
          <div className="flex gap-4">
            <input
              type="text"
              className="input-loyalty2"
              value="Butter Croissant"
            />
              <button className="edit-botton1" onClick={()=> navigate('/inventory/edit-prod')}>Edit</button>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Allergens</p>
          <div className="flex gap-4">
            <input
              type="text"
              className="input-loyalty2"
              value="Nuts, Egg, Milk, Soya, Wheat etc"
            />
              <button className="edit-botton1" onClick={()=> navigate('/inventory/edit-prod')}>Edit</button>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Nutrition</p>
          <div className="flex gap-4">
            <input
              type="text"
              className="input-loyalty2"
              value="Small 364 Kcal, Medium 447 Kcal, Large 549 Kcal. Adults need around 2000 kcal per day"
            />
              <button className="edit-botton1" onClick={()=> navigate('/inventory/edit-prod')}>Edit</button>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Product Images</p>
          <div className="flex gap-4">
            <div className="input-loyalty2">
              <label
                for="dropzone-file"
                className="flex justify-end bg-white w-full "
              >
                <div className="upload-file h-11 text-center">
                  <p className="text-sm ">UPLOAD</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
              <button className="edit-botton1" onClick={()=> navigate('/inventory/edit-prod')}>Edit</button>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Product Category</p>
          <div className="flex gap-4">
            <select
              id="countries"
              // value={selectedOption}
              // onChange={handleChange}
              className="input-loyalty2"
            >
              <option className="font-semibold" value="custom">
                Shopping
              </option>
            </select>
              <button className="edit-botton1" onClick={()=> navigate('/inventory/edit-prod')}>Edit</button>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Product Sub- Category</p>
          <div className="flex gap-4">
            <select
              id="countries"
              // value={selectedOption}
              // onChange={handleChange}
              className="input-loyalty2"
            >
              <option className="font-semibold" value="custom">
                Food & Beverages
              </option>
            </select>
              <button className="edit-botton1" onClick={()=> navigate('/inventory/edit-prod')}>Edit</button>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">SKU</p>
          <div className="flex gap-4">
            <input
              type="text"
              className="input-loyalty2"
              value="Enter SKU or Choose N/A"
            />
              <button className="edit-botton1" onClick={()=> navigate('/inventory/edit-prod')}>Edit</button>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Product Price</p>
          <div className="flex gap-4">
            <input type="text" className="input-loyalty2" value=" £50" />
              <button className="edit-botton1" onClick={()=> navigate('/inventory/edit-prod')}>Edit</button>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Quantity Available</p>
          <div className="flex gap-4">
            <input
              type="text"
              className="input-loyalty2"
              value="Enter Quantity or Choose N/A, e.g30, 40 or N/A etc"
            />
              <button className="edit-botton1" onClick={()=> navigate('/inventory/edit-prod')}>Edit</button>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Dimensions and Weight</p>
          <div className="flex gap-4">
            <input
              type="text"
              className="input-loyalty2"
              value="Enter Weight or Enter NA"
            />
              <button className="edit-botton1" onClick={()=> navigate('/inventory/edit-prod')}>Edit</button>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Brand Name</p>
          <div className="flex gap-4">
            <input type="text" className="input-loyalty2" value="Dunkins" />
              <button className="edit-botton1" onClick={()=> navigate('/inventory/edit-prod')}>Edit</button>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Shipping Information</p>
          <div className="flex gap-4">
            <input
              type="text"
              className="input-loyalty2"
              value="Enter Shipping information or choose N/A"
            />
              <button className="edit-botton1" onClick={()=> navigate('/inventory/edit-prod')}>Edit</button>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Return Policy</p>
          <div className="flex gap-4">
            <input
              type="text"
              className="input-loyalty2"
              value="Enter Return Policy or Choose N/A"
            />
              <button className="edit-botton1" onClick={()=> navigate('/inventory/edit-prod')}>Edit</button>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Product Color</p>
          <div className="flex gap-4">
            <input
              type="text"
              className="input-loyalty2"
              value="Enter Product colour or choose N/A"
            />
              <button className="edit-botton1" onClick={()=> navigate('/inventory/edit-prod')}>Edit</button>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Product Size</p>
          <div className="flex gap-4">
            <input
              type="text"
              className="input-loyalty2"
              value="Enter Product Size or choose NA"
            />
              <button className="edit-botton1" onClick={()=> navigate('/inventory/edit-prod')}>Edit</button>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex gap-1">
            <p className="text-lg font-semibold pb-2">Available Online </p>
            <p className="dots"></p>
          </div>
          <div className="flex gap-4">
            <input type="text" className="input-loyalty2" value="Yes/No" />
              <button className="edit-botton1" onClick={()=> navigate('/inventory/edit-prod')}>Edit</button>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex gap-1">
            <p className="text-lg font-semibold pb-2">Available Instore</p>
            <p className="dots"></p>
          </div>
          <div className="flex gap-4">
            <input type="text" className="input-loyalty2" value="Yes/No" />
              <button className="edit-botton1" onClick={()=> navigate('/inventory/edit-prod')}>Edit</button>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex gap-1">
            <p className="text-lg font-semibold pb-2">Search Keywords</p>
          
          </div>
          <div className="flex">
            <textarea
              className="input-loyalty2"
              value="Add search keywords which will make it easy to find your product when customers search for it in the app"
              name=""
              id=""
              rows="3"
            />
            <button className="edit-botton1 ml-4" onClick={()=> navigate('/inventory/edit-prod')}>Edit</button>
          </div>
        </div>
        <div className="my-4 flex justify-between">
          <button
            className="border border-black px-10 py-2 rounded-md font-[500]"
          
            onClick={()=> navigate('/inventory')}
          >
            Back
          </button>
          <button
            className="loyalty-button1"
            style={{ width: "150px" }}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        {/* <div className="loyalty-button-container">
          <button
            className="loyalty-button1"
            style={{ width: "150px" }}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div> */}
      </div>
      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
        <div className="alert">
          <img src="../Vector (2).png" alt="" />
          <p className="text-center text-lg">
          Product Edited successfully
          </p>
        </div>
      </DialogDefault>
  
    </div>
  );
};

export default EditProduct;
