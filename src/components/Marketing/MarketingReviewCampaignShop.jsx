import React from "react";
import { useNavigate } from "react-router-dom";
import useCampaign from "../../hooks/useCampaign";
import { getDateFromISOString } from "../../utiils";

const MarketingReviewCampaignShop = () => {

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/marketing/shop-ad");
  };

  const data1 = [
    {
      title: "Campaign Type",
      value: "Get more shop visitors",
      //   handleCLick: () => {
      //     setOpenCustom(true);
      //   },
    },
    {
      title: "Description",
      value: "New Winter Delight. Now available.",
      //   handleCLick: () => {
      //     setOpenCustom(true);
      //   },
    },
    {
      title: "Audience",
      value: `1500`,
      //   handleCLick: () => {
      //     setOpenCustom(true);
      //   },
    },
    {
      title: "Campaign Duration",
      value: `25-jan-2024`,
      //   handleCLick: () => {
      //     setOpenCustom(true);
      //   },
    },
    {
      title: "Target Location",
      value: "4517 Washington Ave. Manchester, Kentucky 39495",
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
          {/* <div className="cardContainer" style={{width:"480px"}}>
        <img src={campaignData?.couponImage} alt="" className="w-[200px] h-[100px]" />
        <p className="font-[600] text-2xl">{campaignData?.typeOfCampaign}</p>
      </div> */}
            <img src="../Group 38237.png" alt="" />
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
          See Campaign Review
        </button>
      </div>
    </div>
  );
};

export default MarketingReviewCampaignShop;
