import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import useCampaign from "../../hooks/useCampaign";
import { formatDate } from "../../utiils";
const MarktingAdPreviewCoupon = ({ isPay = false }) => {
  const { campaignData } = useCampaign()
  const navigate = useNavigate();
  const handleSubmit = () => {
    isPay ? navigate("/marketing/payment/customer") : navigate("/marketing/ad-confirm-coupon");
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">
          {isPay ? "Run Campaign" : campaignData?.typeOfCampaign === "Coupon" ? "Coupon Ad Preview" : campaignData?.typeOfCampaign === "Percentage Discount" ?  "Discount Ad Preview" : "Offer Ad Preview"}
        </p>
        {/* <button className="back" onClick={()=>  isPay ? navigate("/marketing/ad-preview") : navigate("/marketing/review-campaign")}> 
        <img src="../back.png" alt="" />
        Back</button> */}
      </div>
      <div className="ad-container">
        <p className="text-[#121212] font-semibold text-xl pb-4">
          {" "}
          {isPay ? "Run Campaign" : "Ad preview"}
        </p>
        <div className="ad-main">
          <div className="flex gap-4">
            <img src="../image 720 (2).png" alt="" className="h-fit" />
            <div>
              <div className="">
              <img src="../Group 38237.png" alt="" />
              </div>
              <div className="flex justify-end gap-2 mt-2">
                <img src="../mdi_gift.png" alt="" />
                <p className="font-semibold"> : 500</p>
                <img src="../image 698 (3).png" alt="" />
              </div>
            </div>
          </div>
          <div className="font-bold mt-2 text-lg">
            <p className="pb-2 ">
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

export default MarktingAdPreviewCoupon;
