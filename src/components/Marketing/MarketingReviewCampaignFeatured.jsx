import React from "react";
import { useNavigate } from "react-router-dom";
import useCampaign from "../../hooks/useCampaign";
import { getDateFromISOString } from "../../utiils";

const MarketingReviewCampaignFeatured = () => {

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/marketing/ad-preview-featured");
  };

  const data1 = [
    {
      title: "Campaign Type",
      value: "Campaign Type",
      //   handleCLick: () => {
      //     setOpenCustom(true);
      //   },
    },
    {
      title: "Product Title",
      value: "Dunkin Dozen Day",
      //   handleCLick: () => {
      //     setOpenCustom(true);
      //   },
    },
    {
      title: "Description",
      value: `Get any 12 donuts for just
£12.Available all day in store
on the 12th of every month.its
the sweetest deal you can get.`,
      //   handleCLick: () => {
      //     setOpenCustom(true);
      //   },
    },
    {
      title: "Location",
      value: "Kolkata",
      //   handleCLick: () => {
      //     setOpenCustom(true);
      //   },
    },
    {
      title: "Estimated  Reach",
      value: "5000 Customers",
      //   handleCLick: () => {
      //     setOpenCustom(true);
      //   },
    },
    {
      title: "Expriy Date",
      value: "2024-04-15",
      //   handleCLick: () => {
      //     setOpenCustom(true);
      //   },
    },
    

  ];
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Review Campaign</p>
        <button className="back" onClick={()=> navigate("/marketing/newCampaign")}> 
        <img src="../back.png" alt="" />
        Back</button>
      </div>
      <div className="loyalty-form-container" style={{padding:"20px 40px"}}>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Ad Review</p>
          <div className="">
          <div className="">
        <img src="../img/Group 38237.png" alt="" className="w-[300px] h-[280px]" />
      </div>
            {/* <img src="../Group 38237.png" alt="" /> */}
          </div>
        </div>
        <div className="footer-Main2">
          {data1?.map((d, i) => (
            <div className="footer-container2">
              <p>{d?.title}</p>
              <span>:</span>
              <p>{d?.value}</p>
              <button className="edit-button2">Edit</button>
            </div>
          ))}
      
    
        </div>
        <button
          className="loyalty-button1"
          style={{ width: "300px" }}
          onClick={handleSubmit}
        >
          See feature deal preview
        </button>
      </div>
    </div>
  );
};

export default MarketingReviewCampaignFeatured;
