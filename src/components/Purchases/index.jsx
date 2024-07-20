import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PurchaseTable1 from "./PurchaseTable1";
import PurchaseTable2 from "./PurchaseTable2";
import PurchasesReport from "./PurchasesReport";
import PromoFilter from "../PromoCode/PromoFilter";
import "./index.scss";
const Purchases = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(!open);
  const closeDrawer = () => setIsOpen(false);
  const [activeLink, setActiveLink] = useState(0);
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  return (
    <div>
      <p className="text-2xl font-bold mb-6">Purchases</p>
      <div className="flex justify-between items-center mb-4">
        <div
          className="flex items-center px-6 h-12"
          style={{
            backgroundColor: "#FFFF",
            width: "25rem",
            borderRadius: "12px",
            color: "#8BA3CB",
          }}
        >
          <img src="./image 2 (3).svg" alt="search" className="w-6 h-6" />
          <input
            type="text"
            className="border-none w-80 bg-transparent outline-none focus:ring-0 focus:shadow-none focus:border-none"
            placeholder="Search"
          />
        </div>
        <div className="flex">
          <button
            className="flex items-center gap-2"
            onClick={() => setIsOpen(true)}
          >
            <img src="./Mask group (8).png" alt="" className="w-5 h-5" />
            <p className="text-[#0070BC] font-semibold">FILTERS</p>
          </button>
        </div>

        <div className="flex">
          <button className="export flex gap-2" onClick={() => setOpen(true)}>
            <img src="./Mask group (7).svg" alt="" className="w-5 h-5" />
            <p>REPORT</p>
          </button>
        </div>
      </div>
      <div className="purchases-buttons">
        <button
          className={`${activeLink === 0 ? "activeButton" : "inActitive"}`}
          onClick={() => handleLinkClick(0)}
        >
          In-App Purchases
        </button>
        <button
          className={`${activeLink === 1 ? "activeButton" : "inActitive"}`}
          onClick={() => handleLinkClick(1)}
        >
          In-Store Purchases
        </button>
      </div>
      {activeLink === 1 ? <PurchaseTable2 /> : <PurchaseTable1 />}
      <PurchasesReport open={open} setOpen={setOpen} handleOpen={handleOpen} />
      {isOpen && <PromoFilter closeDrawer={closeDrawer} open={isOpen} />}
    </div>
  );
};

export default Purchases;
