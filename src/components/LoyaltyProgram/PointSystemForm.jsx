import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { DialogDefault } from "../common/DilogBox";
const PointSystemForm = () => {
  const [openSuccess, setSuccess] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <p className="loyalty-form-header">
        Attach Point System to your products
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
        <div className="loyalty-button-container">
          <button
            className="loyalty-button2"
            onClick={() => {
             navigate("/loyalty")
       
            }}
          >
            Back
          </button>
          <button
            className="loyalty-button1"
            onClick={() => {
          
              setSuccess(true);
              setTimeout(()=> {
                navigate("/loyalty")
              }, 1000)
            }}
          >
           Attach Point System
          </button>
        </div>
      </div>
      <DialogDefault open={openSuccess} handleOpen={setSuccess}>
        <div className="alert2">
          <img src="../../Vector (2).png" alt="" />
          <p>
          Point System is now attached to your products. Your customers can now pay and earn points.
          </p>
        </div>
      </DialogDefault>
    </div>
  );
};

export default PointSystemForm;
