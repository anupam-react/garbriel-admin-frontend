import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";

import InventoryCard from "./InventoryCard";
const CustomizedGift = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
     navigate('/inventory/customized-preview')
  };

  const data = {
    image: "../../Rectangle 8765 (3).png",
    price: "£5",
    name: "Butter Croissant",
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Customize and Send to customer</p>
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
      <div className="loyalty-form-container">
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Product Image </p>
          <div className="image-shadow w-fit">
            <InventoryCard data={data} />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">
            Send to Specific Customer
          </p>
          <input
            type="text"
            className="input-loyalty2"
            value="Search Moneychat ID"
          />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Message</p>
        <textarea
            className="input-loyalty2"
            value="Description"
            name=""
            id=""
            rows="3"
          ></textarea>
        </div>
      
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Expiry Date</p>
          <input type="text" className="input-loyalty2" value="10-02-2024" />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Type of Rewards</p>
          <input type="text" className="input-loyalty2" value="Points" />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Change Rewards Point</p>
          <input type="text" className="input-loyalty2" value="Eg : 2000" />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Discount</p>
          <input type="text" className="input-loyalty2" value="Eg : 50%" />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">New Amount</p>
          <input type="text" className="input-loyalty2" value="£450.00" />
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
            style={{ width: "300px" }}
            onClick={handleSubmit}
          >
            Send  To Customer Offer  Folder
          </button>
        </div>
     
      </div>
   
    </div>
  );
};

export default CustomizedGift;
