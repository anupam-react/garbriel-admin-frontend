import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DialogDefault } from "../common/DilogBox";

const MarketingEdit2 = () => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    setOpenSuccess(true);
  };

  const data1 = [
    {
      title: "Campaign Type",
      value: "Gain More Followers",
      handleCLick: () => {
        navigate("/marketing/newCampaign");
      },
    },
    {
      title: "Description",
      value: "50% discount coupon on all hot drinks",
      handleCLick: () => {
        navigate("/marketing/newCampaign");
      },
    },
    {
      title: "Location",
      value: "4517 Washington Ave. Manchester, Kentucky 39495",
      handleCLick: () => {
        navigate("/marketing/newCampaign");
      },
    },
    {
      title: "Current link clicks",
      value: "300 Cutomers",
      handleCLick: () => {
        navigate("/marketing/newCampaign");
      },
    },
    {
      title: "Current Visitors to shop",
      value: "300 Cutomers",
      handleCLick: () => {
        navigate("/marketing/newCampaign");
      },
    },
  ];
  const data2 = [
    {
      title: "Campaign Duration",
      value: "5 Days",
      handleCLick: () => {
        navigate("/marketing/newCampaign");
      },
    },

    {
      title: "Product Category",
      value: "Hot Drinks",
      handleCLick: () => {
        navigate("/marketing/newCampaign");
      },
    },
    {
      title: "Expiry Date",
      value: "25-jan-2024",
      handleCLick: () => {
        navigate("/marketing/newCampaign");
      },
    },

    {
      title: "Campaign Cost",
      value: "£1",
      handleCLick: () => {
        navigate("/marketing/newCampaign");
      },
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Edit Campaign</p>
        <button className="back" onClick={()=> navigate("/marketing")}> 
        <img src="../back.png" alt="" />
        Back</button>
      </div>
      <div className="loyalty-form-container">
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Ad Review</p>
          <div className="">
            <img src="../Group 38237.png" alt="" />
          </div>
        </div>
        <div className="footer-Main2">
          {data1?.map((d, i) => (
            <div className="footer-container2">
              <p>{d?.title}</p>
              <span>:</span>
              <p>{d?.value}</p>
              <button className="edit-button2" onClick={d?.handleCLick}>
                Edit
              </button>
            </div>
          ))}
          <div className="footer-container2">
            <p>Estimated Reach</p>
            <span>:</span>
            <p>5000 Cutomers</p>
            <button className="edit-button2 invisible">Edit</button>
          </div>
          {data2?.map((d, i) => (
            <div className="footer-container2">
              <p>{d?.title}</p>
              <span>:</span>
              <p>{d?.value}</p>
              <button className="edit-button2" onClick={d?.handleCLick}>
                Edit
              </button>
            </div>
          ))}
        </div>

        <button
          className="loyalty-button1"
          style={{ width: "250px" }}
          onClick={handleSubmit}
        >
          Updated
        </button>
      </div>
      <DialogDefault open={openSuccess} handleOpen={setOpenSuccess}>
        <div className="alert">
          <img src="../Vector (2).png" alt="" />
          <p className="text-center text-lg">
            Successfully !!!!
            <br />
            Edited the Ad Campaign
          </p>
        </div>
      </DialogDefault>
    </div>
  );
};

export default MarketingEdit2;
