import React from "react";
import { useNavigate } from "react-router-dom";

const AddOutlate2 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Adding  Outlet</p>
        <div
          className="inventory-button2"
          onClick={() => navigate("/inventory")}
        >
          <img src="../../back.png" alt="" />
          <p className="font-bold">Back</p>
        </div>
      </div>
      <div className="loyalty-form-container">
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Outlet Name</p>
          <input type="text" className="input-loyalty2" value="" />
        </div>
        <p className="text-lg font-semibold pt-4">Address</p>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Enter your Postcode</p>
          <input type="text" className="input-loyalty2" value="" />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Select Your Address</p>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="input-loyalty2"
          >
            <option className="font-semibold" value="">
              {/* M35J5 */}
            </option>
          </select>
        </div>
        <div className="my-4">
          <p className="text-lg font-semibold pb-2">
            Enter your Address Manually
          </p>
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              className="input-loyalty2"
              value=""
            />
            <input
              type="text"
              className="input-loyalty2"
              value=""
            />
          </div>
          <div className="flex gap-4 mb-4">
            <input type="text" className="input-loyalty2" value="" />
            <input type="text" className="input-loyalty2" value="" />
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              className="input-loyalty2"
              value=""
            />
            <input type="text" className="input-loyalty2" value="" />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Opening Time</p>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="input-loyalty2"
          >
            <option className="font-semibold" value="">
              {/* 9:00 AM */}
            </option>
          </select>
        </div>
        <div className="my-4">
          <p className="text-lg font-semibold pb-2">Closing Time</p>
          <select
            id="countries"
            // value={selectedOption}
            // onChange={handleChange}
            className="input-loyalty2"
          >
            <option className="font-semibold" value="">
              {/* 9:00 PM */}
            </option>
          </select>
        </div>
      <div className="flex justify-center my-4">
        <button className="inventory-button2" onClick={()=> navigate('/inventory/add-product') }>SAVE</button>
        </div>
      </div>
    </div>
  );
};

export default AddOutlate2;
