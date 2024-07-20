import React from 'react'
import { useNavigate } from 'react-router-dom';
import InventoryCard from './InventoryCard';

const ReviewCampaign = () => {
      const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/inventory/ad-preview");
  };

  const data = {
    image: "../../Rectangle 8765 (3).png",
    name: "Butter Croissant",
    };
     const data2 = [
    {
      title: "Campaign Type",
      value: "Percentage DIscount",
    //   handleCLick: () => {
    //     setOpenCustom(true);
    //   },
    },
    {
      title: "Offer Discount",
      value: "50%",
    //   handleCLick: () => {
    //     setOpenCustom(true);
    //   },
    },
    {
      title: "Reward Type",
      value: "Points",
    //   handleCLick: () => {
    //     setOpenCustom(true);
    //   },
    },
    {
      title: "Description",
      value: "Special Offer coupon on all hot drinks",
    //   handleCLick: () => {
    //     setOpenCustom(true);
    //   },
    },
    {
      title: "No of Points Reward",
      value: "500 POints",
    //   handleCLick: () => {
    //     setOpenCustom(true);
    //   },
    },
    {
      title: "Add Conditions",
      value: "Select specific product attached to Coupon ( Burger)",
    //   handleCLick: () => {
    //     setOpenCustom(true);
    //   },
    },
    {
      title: "Customer",
      value: "New",
    //   handleCLick: () => {
    //     setOpenCustom(true);
    //   },
    },
    {
      title: "Expriy Date",
      value: "25-jan-2024",
    //   handleCLick: () => {
    //     setOpenCustom(true);
    //   },
    },
  ];
  return (
    <div>
         <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Review Campaign</p>
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
            <div className="loyalty-form-container">
     
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Ad Review</p>
          <div className="image-shadow w-fit">
            <InventoryCard data={data} />
          </div>
        </div>
    <div className="footer-Main2">
        {data2?.map((d, i) => (
          <div className="footer-container2">
            <p>{d?.title}</p>
            <span>:</span>
            <p>{d?.value}</p>
            <button className="edit-button2" >Edit</button>
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
  )
}

export default ReviewCampaign
