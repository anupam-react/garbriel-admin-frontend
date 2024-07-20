import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import InfoHeader from "./InfoHeader";
import InfoCard from "./InfoCard";
import RotaionProgress from "./RotaionProgress";
import Promotion2 from "./Promotion2";
import LifeCycleStage2 from "./LifeCycleStage2";
import { BarChart } from "./BarChart";
import { DialogDefault } from "../common/DilogBox";
import Demographic from "./Demographic";
import Engagement from "./Engagement";
import Promotions from "./Promotions";
import Loyality from "./Loyality";
import RefferalActivity from "./RefferalActivity";
import TransactionHistory from "./TransactionHistory";
import BookMark from "./BookMark";
import Verification from "./Verification";
import OffersTable from "./OffersTable";
import ReturnForm from "./ReturnForm";
import MenuCard4 from "./MenuCard4";
import ProductDetails from "./ProductDetails";
const CustomeInfo = ({ handleOpen }) => {
  const [openLoyality, setOpenLoyality] = useState(false);
  const [openDemographic, setOpenDemographic] = useState(false);
  const [openEngagement, setOpenEngagement] = useState(false);
  const [openPromotions, setOpenPromotions] = useState(false);
  const [openReferral, setOpenReferral] = useState(false);
  const [openTransaction, setOpenTransaction] = useState(false);
  const [openBookmark, setOpenBookmark] = useState(false);
  const [openVerification, setOpenVerification] = useState(false);
  const [openOffer, setOpenOffer] = useState(false);
  const [openReturn, setOpenReturn] = useState(false);
  const [isView , setView] = useState(false)
  const [isOpenProd , setOpenProd] = useState(false)

  const statisticData = [
    {
      title: "Average Spend",
      image: "./image 701.png",
      amount: "5,000",
    },
    {
      title: "Average Basket Size",
      image: "./image 700 (1).png",
      amount: "£300",
      text: `Customer Average Transaction Value (ATV) is a metric that measures the average amount spent per transaction by customers with a business, calculated by dividing total sales revenue by the number of transactions within a specific time frame. 
It helps assess customer spending habits and business performance.`,
    },
    {
      title: "CLV",
      image: "./image 700.png",
      amount: "5,000",
      showInfo: true,
      text: `Customer Lifetime Value (CLV) is a metric that estimates the total revenue a business can expect from a single customer account throughout the business relationship. 
It factors in the revenue generated from a customer, the duration of the relationship, and the costs associated with serving the customer..`,
    },
  ];
  const mostViewProd = [
    {
      title: "Coffee",

      image: "./Group 527.png",
    },
    {
      title: "Donuts",

      image: "./Group 528.png",
    },
    {
      title: "Coffee",

      image: "./Group 527.png",
    },
  ];
  const data = [
    {
      image: "./carbon_user-avatar-filled (1).png",
      title: "CUSTOMER DEMOGRAPHIC",
      openHandler: () => setOpenDemographic(true),
    },
    {
      image: "./Ellipse 3.png",
      title: "CUSTOMER LOYALITY PROGRAM",
      openHandler: () => setOpenLoyality(true),
    },
    {
      image: "./Ellipse 4.png",
      title: "Customer Engagement Metrics ",
      openHandler: () => setOpenEngagement(true),
    },
    {
      image: "./Ellipse 4 (1).png",
      title: "Participation in Promotions",
      openHandler: () => setOpenPromotions(true),
    },
    {
      image: "./Ellipse 3 (1).png",
      title: "REFERRAL ACTIVITY",
      openHandler: () => setOpenReferral(true),
    },
    {
      image: "./Ellipse 3 (2).png",
      title: "Customer Transaction History",
      openHandler: () => setOpenTransaction(true),
    },
    {
      image: "./Ellipse 3 (3).png",
      title: "Book Marks",
      openHandler: () => setOpenBookmark(true),
    },
    {
      image: "./Ellipse 3 (4).png",
      title: "Student Verification",
      openHandler: () => setOpenVerification(true),
    },
    {
      image: "./Ellipse 3 (5).png",
      title: "Offers",
      openHandler: () => setOpenOffer(true),
    },
    {
      image: "./Ellipse 3 (6).png",
      title: "Returns and Exchange",
      openHandler: () => setOpenReturn(true),
    },
  ];

  const divRef = useRef(null);
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (divRef.current && !divRef.current.contains(event.target)) {
  //       setView(-1);
  //     }
  //   };

  //   if (isView !== -1) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [isView]);
  return (
    <div className="info-container">
      <div className="gift-main">
        <p className="title">Customer Details</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={() => handleOpen(false)}
        />
      </div>
      <hr className="hr2" />
      <InfoHeader />
      <div style={{ paddingTop: "40px", paddingBottom: "30px" }}>
        <p style={{ color: "#0070BC", fontWeight: 600 }}>CUSTOMER INSIGHTS</p>
        <hr className="hr3" />
      </div>
      <div className="mt-8">
        <p className="text-2xl font-[600] pb-4" style={{ color: "black" }}>
          Statistics
        </p>
        <div className="flex gap-10">
          {statisticData?.map((data, i) => (
            <InfoCard data={data} />
          ))}
        </div>
      </div>
      <div className="pt-4 flex justify-between gap-6">
        <div>
          <p className="text-xl font-[600] pb-4" style={{ color: "black" }}>
            Points System
          </p>
          <div className="flex flex-col gap-4">
            <InfoCard
              data={{
                title: "Total  Points Earned",
                image: "./image 699 (3).png",
                amount: "5000",
                showInfo: false,
              }}
            />
            <InfoCard
              data={{
                title: "Total Points Redeemed",
                image: "./image 699.png",
                amount: "1000",
                showInfo: false,
              }}
            />

            <InfoCard
              data={{
                title: "Current  Points Balance",
                image: "./image 701.png",
                amount: "1000",
                showInfo: false,
              }}
            />
            <InfoCard
              data={{
                title: "Point Vouchers",
                image: "./image 701 (1).png",
                amount: "1000",
                showInfo: false,
              }}
            />
          </div>
        </div>
        <div>
          <p className="text-xl font-[600] pb-4" style={{ color: "black" }}>
            Stamp System
          </p>
          <div className="flex flex-col gap-4">
            <InfoCard
              data={{
                title: "Total Stamps Redeemed",
                image: "./image 699 (1).png",
                amount: "300K",
                showInfo: false,
              }}
            />
            <InfoCard
              data={{
                title: "Incomplete Stamps",
                image: "./image 699 (1).png",
                amount: "04",
                showInfo: false,
              }}
            />
            <InfoCard
              data={{
                title: "Stamp vouchers",
                image: "./image 699 (1).png",
                amount: "2",
                showInfo: false,
              }}
            />
          </div>
        </div>
        <div>
          <p className="text-xl font-[600] pb-4" style={{ color: "black" }}>
            Birthday
          </p>
          <div className="rounded-lg shadow-md p-6 items-center bg-white flex h-32 gap-4 min-w-48 ">
            <img src="./image 700 (2).png" alt="" />
            <p style={{ color: "black", fontWeight: 600, fontSize: "24px" }}>
              12/08
            </p>
          </div>
        </div>
        <div>
          <p className="text-xl font-[600] pb-4" style={{ color: "black" }}>
            Loaction
          </p>
          <div>
            <div className="rounded-lg shadow-md p-6 items-center bg-white flex h-32 gap-4 min-w-48 ">
              <img src="./image 700 (3).png" alt="" />
              <p style={{ color: "black", fontWeight: 600, fontSize: "24px" }}>
                London UK
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="status-container">
        {data?.map((d, i) => (
          <div className="status-info" key={i} onClick={d?.openHandler}>
            <img src={d?.image} alt="" />
            <p className="uppercase">{d?.title}</p>
          </div>
        ))}
      </div>
      <div>
        <p className="text-2xl font-[600] pb-4" style={{ color: "black" }}>
          Most Viewed Products
        </p>
        <div className="most-view">
          {mostViewProd?.map((d, i)=>(
          <div className="" key={i}>
            <div className="relative">

            <img src={d?.image} alt="" className="cursor-pointer" onClick={()=> setOpenProd(true)}/>
            <img
              src="../Group (9).png"
              alt=""
              className="absolute top-[30px] right-[40px] cursor-pointer"
              onClick={()=>{
                if(isView === i) setView(-1)
                else setView(i)
              }}
            />
             {isView === i && (
                      <div className="absolute top-[50px] right-[40px] cursor-pointer" ref={divRef}>
                     {/* <p className="viewProd text-[14px]">View Product</p> */}
                     <MenuCard4 />
                      </div>
                    )}
            </div>
            <p>{d?.title}</p>
          </div>

          ))}
     
        </div>
      </div>
      <div className="progress-rotation">
        <RotaionProgress />
        <LifeCycleStage2 />
        <Promotion2 />
      </div>
      <div style={{ margin: "30px 0px" }}>
        <BarChart />
      </div>
      <div style={{ color: "black", margin: "30px 0px" }}>
        <p style={{ fontSize: "20px", fontWeight: 600 }}>Other Details</p>
        <div className="other">
          <p style={{ color: "#000000B2" }}>Customer Milestone</p>
          <div className="other-footer">
            <img src="./image 704.png" alt="" />
            <p style={{ color: "black", fontWeight: 600, fontSize: "18px" }}>
              100th Purchase
            </p>
          </div>
        </div>
      </div>
      {/* <div style={{ color: "black", margin: "30px 0px" }}>
        <div className="basket">
          <p style={{ color: "#000000B2", paddingBottom: "10px" }}>
            Basket Analysis
          </p>
          <div className="basket-container">
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <img src="./image 705.png" alt="" />
              <p style={{ color: "black", fontWeight: 600, fontSize: "18px" }}>
                Lorem Ipsum
              </p>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <p
                style={{
                  color: "#FEA82F",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                +
              </p>
              <img src="./image 705.png" alt="" />
              <p style={{ color: "black", fontWeight: 600, fontSize: "18px" }}>
                Lorem Ipsum
              </p>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <p style={{ color: "#FEA82F", fontSize: "18px" }}>+</p>
              <img src="./image 705.png" alt="" />
              <p style={{ color: "black", fontWeight: 600, fontSize: "18px" }}>
                Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <DialogDefault open={isOpenProd} handleOpen={setOpenProd}>
        <ProductDetails handleOpen={setOpenProd} />
      </DialogDefault>
      <DialogDefault open={openDemographic} handleOpen={setOpenDemographic}>
        <Demographic handleOpen={setOpenDemographic} />
      </DialogDefault>
      <DialogDefault open={openLoyality} handleOpen={setOpenLoyality}>
        <Loyality handleOpen={setOpenLoyality} />
      </DialogDefault>
      <DialogDefault open={openEngagement} handleOpen={setOpenEngagement}>
        <Engagement handleOpen={setOpenEngagement} />
      </DialogDefault>
      <DialogDefault open={openPromotions} handleOpen={setOpenPromotions}>
        <Promotions handleOpen={setOpenPromotions} />
      </DialogDefault>
      <DialogDefault open={openReferral} handleOpen={setOpenReferral}>
        <RefferalActivity handleOpen={setOpenReferral} />
      </DialogDefault>
      <DialogDefault open={openTransaction} handleOpen={setOpenTransaction}>
        <TransactionHistory handleOpen={setOpenTransaction} />
      </DialogDefault>
      <DialogDefault open={openBookmark} handleOpen={setOpenBookmark}>
        <BookMark handleOpen={setOpenBookmark} />
      </DialogDefault>
      <DialogDefault open={openVerification} handleOpen={setOpenVerification}>
        <Verification handleOpen={setOpenVerification} />
      </DialogDefault>
      <DialogDefault open={openOffer} handleOpen={setOpenOffer}>
        <OffersTable handleOpen={setOpenOffer} />
      </DialogDefault>
      <DialogDefault open={openReturn} handleOpen={setOpenReturn}>
        <ReturnForm handleOpen={setOpenReturn} />
      </DialogDefault>
    </div>
  );
};

export default CustomeInfo;
