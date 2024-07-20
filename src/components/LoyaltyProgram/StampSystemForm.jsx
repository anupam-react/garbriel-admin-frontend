import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const StampSystemForm = ({ isReview = false }) => {
  const navigate = useNavigate();

  return (
    <div>
      <p className="loyalty-form-header">
        {!isReview
          ? " Attach Stamp System to your products"
          : "Stamp System Preview"}
      </p>
      <div className="loyalty-form-container">
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Product Category</p>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="input-loyalty2"
          >
            <option className="font-semibold" value="custom">
              Beverages
            </option>
          </select>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">
            Choose Product sub-category
          </p>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="input-loyalty2"
          >
            <option className="font-semibold" value="custom">
              Coffees , Milkshakes ,Hot Chocolate (In dropdown)
            </option>
          </select>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">
            Total No. of stamps to collect before reward
          </p>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="input-loyalty2"
          >
            <option className="font-semibold" value="custom">
              5, 6, 7,8,9, 10 (In Dropdown)
            </option>
          </select>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Description</p>
          <textarea
            className="input-loyalty2"
            value="Buy 9 Drinks, Get the 10th one free"
            name=""
            id=""
            rows="3"
          ></textarea>
        </div>
        <div className="loyalty-button-container">
          <button
            className="loyalty-button2"
            onClick={() => {
              !isReview
                ? navigate("/loyalty")
                : navigate("/loyalty/stamp-system");
            }}
          >
            Back
          </button>
          <button
            className="loyalty-button1"
            onClick={() => {
              !isReview
                ? navigate("/loyalty/stamp-system/review")
                : navigate("/loyalty/stamp-system/preview");
            }}
          >
            {!isReview ? "See Stamp System review" : "See Stamp System Preview"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StampSystemForm;
