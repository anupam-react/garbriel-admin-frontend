import React, { useState } from "react";
import "./index.scss";
import { PerformanceChart } from "./PerformanceChart";
import { DialogDefault } from "../common/DilogBox";
import { useNavigate } from "react-router-dom";
const ViewProduct = ({ isOfferCard = false, isPast = false }) => {
  const [openInfo, setOpenInfo] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between">
      <p className="text-2xl font-bold">Live Campaign View</p>
      <button className="back" onClick={()=> navigate("/marketing")}> 
        <img src="../back.png" alt="" />
        Back</button>

      </div>
      <div className="campaign-view-container">
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold">Ad preview</p>
          {isPast && (
            <button
              className="run-agains"
              onClick={() => navigate("/marketing/review-campaign")}
            >
              Run Again
            </button>
          )}
        </div>
        <div className="campaign-view-main">
          <div className="type-text">
            <p>Campaign Type</p>
            <span>:</span>
            <p className="text-[#1BB4F0]">
              {isOfferCard ? "Buy 1 Get 1 Free" : "Gain More Followers"}
            </p>
          </div>
          <div className="type-text">
            <p>Campaign Type</p>
            <span>:</span>
            <div className="flex items-center gap-3">
              Live
              <p className="live-dot"></p>
            </div>
          </div>
          <img src="../Group 38313.png" alt="" className="w-[300px] " />
        </div>
        <div className="campaign-view-main">
          <p className="text-xl font-bold text-[#1BB4F0]">Performance</p>
          <div className="type-text">
            <p>People Reached</p>
            <span>:</span>
            <p className="text-[#1BB4F0]">2000</p>
          </div>
          <div className="type-text">
            <p>Current Sales</p>
            <span>:</span>
            <p className="text-[#00B050]">£2500 </p>
          </div>
          <div className="type-text">
            <p>Ad Spent</p>
            <span>:</span>
            <p className="text-[#FEA82F]">£2500 </p>
          </div>
          {isOfferCard && (
            <div className="type-text">
              <p>Current ROAS</p>
              <span>:</span>
              <div className="flex gap-2">
                <div className="text-[#1BB4F0]">10.2</div>
                <img
                  src="../Group 38355.png"
                  alt=""
                  className="w-4 h-4 cursor-pointer"
                  onClick={() => setOpenInfo(true)}
                />
              </div>
            </div>
          )}
        </div>
        <div className="campaign-view-main">
          <p className="text-xl font-bold text-[#1BB4F0]">Daily Performance</p>
          <div className="flex justify-between">
            <p className="text-[#131313]">Growth</p>
            <p>Yearly</p>
          </div>
          <PerformanceChart />
          <p className="text-[#131313] underline text-center">
            A day of the week
          </p>
        </div>
        <div className="campaign-view-main">
          <p className="text-xl font-bold text-[#1BB4F0]">
            Reached by Location
          </p>
          <div className="flex items-center gap-2">
            <p>London</p>
            <p className="w-[200px] py-2 bg-[#0070BC] h-fit"></p>
            <p>4000</p>
          </div>
          <div className="flex items-center gap-2">
            <p>Manchester</p>
            <p className="w-[200px] py-2 bg-[#FEA82F] h-fit"></p>
            <p>2000</p>
          </div>
        </div>
        <div className="campaign-view-main">
          <p className="text-xl font-bold text-[#1BB4F0]">Details</p>
          <div className="type-text">
            <p>Ad Duration</p>
            <span>:</span>
            <p className="text-[#1BB4F0]">25 days</p>
          </div>
          <div className="type-text">
            <p>Start Date</p>
            <span>:</span>
            <p className="text-[#00B050]">08 Jan 2024 18:26 </p>
          </div>
          <div className="type-text">
            <p>End date</p>
            <span>:</span>
            <p className="text-[#FEA82F]">30 Jan 2024 18:26</p>
          </div>
          <div className="type-text">
            <p>Created by</p>
            <span>:</span>
            <p className="text-[#1BB4F0]">Cafè Nero</p>
          </div>
          <div className="type-text">
            <p>Placements</p>
            <span>:</span>
            <p className="text-[#1BB4F0]">Moneychat</p>
          </div>
          <div className="type-text">
            <p>Current Amount Spent</p>
            <span>:</span>
            <p className="text-[#FEA82F]">£250</p>
          </div>
        </div>
        <div className="campaign-view-main">
          <p className="text-xl font-bold text-[#1BB4F0]">Payment Mode</p>
          <div className="flex items-center gap-4 bg-[#0070BC] p-4 text-white w-[330px]">
            <img src="../Rectangle 8758.png" alt="" />
            <p>Mastercard- 6500</p>
          </div>
        </div>
      </div>
      <DialogDefault open={openInfo} handleOpen={setOpenInfo}>
        <div className="text-[#121212] p-[20px] text-xl">
          ROAS is short for return on ad spend. It is a metric that helps you
          measure how much revenue was earned in comparison to how much budget
          was spent on running your ad
        </div>
      </DialogDefault>
    </div>
  );
};

export default ViewProduct;
