import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import { useNavigate } from "react-router-dom";
const CustomizedPreview = () => {
    const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
    const navigate = useNavigate()
    const handleSubmit = () => {
        setOpenDeleteConfirm(true);
        setTimeout(() => {
            navigate('/inventory')
        },1000)
    }
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Preview</p>
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
      <div className="gift-container2">
        <div className="gift-main2">
          <img src="../Rectangle 8765 (3).png" alt="" className="back-image2" />
          <div className="image-text2">
            <p className="text-2xl">Gift Butter Croissant</p>
            <p className="text-[12px]">Gift a Butter Corrisant for £6.00</p>
          </div>
        </div>
        <div className="w-[500px] font-bold mt-2">
          <p className="pb-2">
            Rewards - 300 Points
          </p>
          <p className="pb-2">Discount Issued -70 % Off (£450.00)</p>
          <p className="pb-2">Expiry Date - DD/MM/YYYY</p>
          <button
            className="loyalty-button1"
            style={{ width: "300px" }}
            onClick={handleSubmit}
          >
            Sent To Customer Gift Folder
          </button>
        </div>
          </div>
                <DialogDefault open={openDeleteConfirm} handleOpen={setOpenDeleteConfirm}>
        <div className="alert">
          <img src="../Vector (2).png" alt="" />
          <p className="text-center text-lg">
            Product successfully sent to customer Gift Folder'
          </p>
        </div>
      </DialogDefault>
    </div>
  );
};

export default CustomizedPreview;
