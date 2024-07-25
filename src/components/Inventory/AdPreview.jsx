import React from "react";
import "./index.scss";
import InventoryCard from "./InventoryCard";
import { useNavigate } from "react-router-dom";
const AdPreview = ({ isPay = false }) => {
  const data = {
    image: "../../Rectangle 8765 (3).png",
    name: "Butter Croissant",
  };
  const navigate = useNavigate();
  const handleSubmit = () => {
    isPay ? navigate("/inventory/payment/inventory") : navigate("/inventory/ad-confirm");
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Discount Ad Preview</p>
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
      <div className="ad-container">
        <p className="text-[#121212] font-semibold text-xl pb-4">Ad Preview</p>
        <div className="ad-main">
          <div className="flex gap-4">
            <img src="../image 720.png" alt="" className="h-fit" />
            <div>
              <div className="image-shadow w-fit">
                <InventoryCard data={data} />
              </div>
              <div className="flex justify-end gap-2 mt-2">
                <img src="../mdi_gift.png" alt="" />
                <p className="font-semibold"> : 500</p>
                <img src="../image 698 (3).png" alt="" />
              </div>
            </div>
          </div>
          <div className="font-bold mt-2">
            <p className="pb-2">
              Buy Any Hot Drinks Today And Double Your Points.
            </p>
            <p className="pb-2">Exp: 05 Jan 2024</p>

            <button
              className="loyalty-button1"
              style={{ width: "260px" }}
              onClick={handleSubmit}
            >
              {isPay ? "Pay £1" : "Run  Campaign"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdPreview;
