import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import CatalogueProduct from "../customerInfo/CatalogueProduct";
const SavingForm = ({ isReview = false }) => {
  const navigate = useNavigate();
  return (
    <div>
    <p className="loyalty-form-header">{!isReview ? "Make a Saving" : "Make a Saving Review"}</p>
      <div className="loyalty-form-container">
    {!isReview &&  <div className="catalogue mt-4">
        <p className="text-lg font-semibold pb-2">Select Product from catalogue</p>
      <CatalogueProduct />
    </div>}
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Upload product photo</p>
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
          <p className="text-lg font-semibold pb-2">Title</p>
          <input
            type="text"
            className="input-loyalty2"
            value="Get 12 for the price of 9 donuts"
          />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Description</p>
          <textarea
            className="input-loyalty2"
            value="Buy any Box of 12 donuts for £21.15A voucher will be added to the Wallet uponpurchase. The voucher is valid for 7 days from thedate of issue. The vouchers can be redeemedacross all Café Elite Stores"
            name=""
            id=""
            rows="3"
          ></textarea>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Price</p>
          <input type="text" className="input-loyalty2" value="£21.15" />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose outlet</p>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="input-loyalty2"
          >
            <option className="font-semibold" value="custom">
              All Outlets
            </option>
          </select>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">T&Cs</p>
          <input
            type="text"
            className="input-loyalty2"
            value="Subject to availability"
          />
        </div>
        <div className="loyalty-button-container">
          <button
            className="loyalty-button2"
            onClick={() => {
              !isReview
                ? navigate("/loyalty")
                : navigate("/loyalty/saving");
            }}
          >
            Back
          </button>
          <button
            className="loyalty-button1"
            onClick={() => {
              !isReview
                ? navigate("/loyalty/saving/review")
                : navigate("/loyalty/saving/preview");
            }}
          >
            {!isReview ? "See Make a Saving review" : "See Make a Saving Preview"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavingForm;
