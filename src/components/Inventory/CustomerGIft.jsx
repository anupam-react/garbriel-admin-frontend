import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";

import InventoryCard from "./InventoryCard";
const CustomerGift = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/inventory/preview-gift");
  };

  const data = {
    image: "../../Rectangle 8765 (3).png",
    price: "£5",
    name: "Butter Croissant",
  };
  const useOptions = [
    {
      label: "Select specific product attached to Coupon ( Burger)",
      value: "Select specific product attached to Coupon ( Burger)",
    },
    {
      label:
        "Select Product Categories To Apply Coupon(Burger, Coke, Dounts , Pizza",
      value:
        "Select Product Categories To Apply Coupon(Burger, Coke, Dounts , Pizza",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Send As Gift To Customer</p>
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
            value="Search user by name  or by Moneychat ID"
          />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Header Text</p>
          <input type="text" className="input-loyalty2" value="Croissant" />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Description</p>
          <textarea
            className="input-loyalty2"
            value="Loremipsum"
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
          <p className="text-lg font-semibold pb-2">Terms & Conditions</p>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="input-loyalty2"
          >
            {useOptions?.map((data, i) => (
              <>
                <option
                  className="font-semibold text-black"
                  key={i}
                  value={data?.value}
                >
                  {data?.label}
                </option>
              </>
            ))}
          </select>
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
            Preview Gift
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerGift;
