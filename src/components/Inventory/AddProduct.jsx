import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { DialogDefault } from "../common/DilogBox";
import Select from "react-select";
const AddProduct = () => {
  const [openSuccess, setSuccess] = useState(false);
  const [openSuccess1, setSuccess1] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 1000);
    setTimeout(() => {
      setSuccess1(true);
    }, 2000);
    setTimeout(() => {
      setSuccess1(false);
      navigate('/inventory')
    }, 3000);
  };
  const options = [
    { value: 'Outlet -  01', label: 'Outlet -  01' },
    { value: 'Outlet -  02', label: 'Outlet -  02' },
    { value: 'Outlet -  03', label: 'Outlet -  03' },
    { value: 'Outlet -  04', label: 'Outlet -  04' },
    { value: 'Outlet -  05', label: 'Outlet -  05' },
  ]
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Adding Product</p>
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
          <p className="text-lg font-semibold pb-2">Select Outlet</p>
           <Select
    // defaultValue={[colourOptions[2], colourOptions[3]]}
    isMulti
    name="colors"
    options={options}
    className="basic-multi-select"
    classNamePrefix="select"
    placeholder="Ex : Outlet - 01 , Outlet - 02"
  />

        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Product Name</p>
          <input
            type="text"
            className="input-loyalty2"
            value="Butter Croissant"
          />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Product Decription</p>
          <textarea
            className="input-loyalty2"
            value="Description"
            name=""
            id=""
            rows="3"
          ></textarea>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Allergens</p>
          <textarea
            className="input-loyalty2"
            value="Nuts, Egg, Milk, Soya, Wheat etc. Customers with allergies can find product information 
here: dunkin.co.uk/allergens"
            name=""
            id=""
            rows="3"
          ></textarea>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Nutrition</p>
          <textarea
            className="input-loyalty2"
            value="Small 364 Kcal, Medium 447 Kcal, Large 549 Kcal. Adults need around 2000 kcal per day"
            name=""
            id=""
            rows="3"
          ></textarea>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Product Images</p>
          <div className="input-loyalty2">
            <label
              for="dropzone-file"
              className="flex justify-end bg-white  shadow rounded-md w-full "
            >
              <div className="upload-file">
                <p className="text-sm">UPLOAD</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Product Category</p>
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
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Product Sub- Category</p>
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
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">SKU</p>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="input-loyalty2"
          >
            <option className="font-semibold" value="custom">
              Enter SKU or Choose N/A
            </option>
          </select>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Product Price</p>
          <input type="text" className="input-loyalty2" value="£50" />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Quantity Available</p>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="input-loyalty2"
          >
            <option className="font-semibold" value="custom">
              enter quantity or Choose N/A, e.g30, 40 or N/A etc
            </option>
          </select>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Dimensions and Weight</p>
          <input type="text" className="input-loyalty2" value="Dunkins" />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Brand Name</p>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="input-loyalty2"
          >
            <option className="font-semibold" value="custom">
              Dunkins
            </option>
          </select>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Shipping Information</p>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="input-loyalty2"
          >
            <option className="font-semibold" value="custom">
              Enter Shipping information or choose N/A
            </option>
          </select>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Return Policy</p>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="input-loyalty2"
          >
            <option className="font-semibold" value="custom">
              Enter Return Policy or Choose N/A
            </option>
          </select>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Product Color</p>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="input-loyalty2"
          >
            <option className="font-semibold" value="custom">
              Enter Product colour or choose N/A
            </option>
          </select>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Product Size</p>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="input-loyalty2"
          >
            <option className="font-semibold" value="custom">
              Enter Product Size or choose NA
            </option>
          </select>
        </div>
        <div className="mt-4">
          <div className="flex gap-1">
            <p className="text-lg font-semibold pb-2">Available Online </p>
            <p className="dots"></p>
          </div>
          <input type="text" className="input-loyalty2" value="Yes/No" />
        </div>
        <div className="mt-4">
          <div className="flex gap-1">
            <p className="text-lg font-semibold pb-2">Available Instore</p>
            <p className="dots"></p>
          </div>
          <input type="text" className="input-loyalty2" value="Yes/No" />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Search Keywords</p>
          <textarea
            className="input-loyalty2"
            value="Add search keywords which will make it easy to find your product when customers search for it in the app"
            name=""
            id=""
            rows="3"
          ></textarea>
        </div>
        <div className="loyalty-button-container">
          <button
            className="loyalty-button2"
            onClick={() => {
              navigate("/inventory");
            }}
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
      </div>
      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
        <div className="alert">
          <img src="../../Vector (2).png" alt="" />
          <p className="text-center text-lg">
            Your inventory is under review. We will get back in touch to let you
            when it is live.
          </p>
        </div>
      </DialogDefault>
      <DialogDefault open={openSuccess1} handleOpen={setSuccess1}>
        <div className="alert">
          <img src="../../Vector (2).png" alt="" />
          <p className="text-center text-lg">
            Congratulations! Your inventory is now Live
          </p>
        </div>
      </DialogDefault>
    </div>
  );
};

export default AddProduct;
