import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import InventoryCard from "./InventoryCard";
const Promote = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/inventory/review-campaign");
  };

  const data = {
    image: "../../Rectangle 8765 (3).png",
    name: "Butter Croissant",
  };

  const CampaignOptions = [
    { label: "Percentage Discount", value: "Percentage Discount" },
    { label: "Coupon", value: "Coupon" },
    { label: "Create An Offer", value: "Create An Offer" },
    { label: "Buy 1 Get 1 Free", value: "Buy 1 Get 1 Free" },
    { label: "Featured Deals", value: "Featured Deals" },
    { label: "Get More Followers", value: "Get More Followers" },
    { label: "Get More Shop Visitors", value: "Get More Shop Visitors" },
  ];
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
  const CustomerOptions = [
    { label: "Active", value: "Active" },
    { label: "New", value: "New" },
    { label: "Slipping", value: "Slipping" },
    { label: "Churn", value: "Churn" },
    { label: "Specific Customer", value: "Specific Customer" },
  ];
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Promote Product</p>
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
          <p className="text-lg font-semibold pb-2">
            Select Type Of Campaign You Have To Run{" "}
          </p>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="input-loyalty2"
          >
            <option
              className="font-semibold"
              disabled
              value="Percentage Dicount"
            >
              Add Discount Value
            </option>
            {CampaignOptions?.map((data, i) => (
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
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Product Image </p>
          <div className="image-shadow w-fit">
            <InventoryCard data={data} />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Discount Value</p>
          <input type="text" className="input-loyalty2" value="50%" />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Expiration date</p>
          <input type="text" className="input-loyalty2" value="01-01-2024" />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Conditions Of Use</p>
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
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Type Of Customers</p>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="input-loyalty2"
          >
            {CustomerOptions?.map((data, i) => (
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
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Target Location</p>
          <textarea
            className="input-loyalty2"
            value="4517 Washington Ave. Manchester, Kentucky 39495"
            name=""
            id=""
            rows="3"
          ></textarea>
        </div>
        <div className="mt-4">
          <div className="input-loyalty2 p-4">
            <p className="font-semibold pb-2">
              4517 Washington Ave. Manchester, Kentucky 39495
            </p>
            <img src="../image 724.png" alt="" />
            <button
              className="loyalty-button1 mt-2"
              style={{ width: "300px" }}
              // onClick={handleSubmit}
            >
              <p className="text-[14px]">Estimated Reach</p>
              <p className="text-[20px]">2500-5000</p>
            </button>
          </div>
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
            onClick={() => {
              navigate("/inventory/review-campaign");
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Promote;
