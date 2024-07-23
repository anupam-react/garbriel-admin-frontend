import React, { useState } from "react";
import InfoCard from "./InfoCard";
import RotaionProgress from "./RotaionProgress";
import LifeCycleStage from "./LifeCycleStage";
import Promotion from "./Promotion";
import { BarChart } from "./BarChart";
import PaginatedTable from "./PaginatedTable";
import Filter from "./Filter";
import "./index.scss";
import useCusomerInfo from "../../hooks/useCusomerInfo";
const CustomerInfo = () => {
  const {  
    dashboard,
  } = useCusomerInfo()

  const [isOpen, setIsOpen] = useState(false)

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);
 
  const customerType = [
    { label: "Frequent Shopper", value: "frequent shopper" },
    { label: "High Spender", value: "high spender" },
    { label: "New Customers", value: "new customers" },
  ];
  const customerSubCat = [
    { label: "SUB-CATEGORY", value: "SUB-CATEGORY" },
    { label: "High Spender", value: "high spender" },
    { label: "New Customers", value: "new customers" },
  ];

  const statisticData = [
    {
      title: "Total  Customers",
      image: "./fluent_people-team-24-filled.png",
      amount: dashboard?.totalCustomer,
      showInfo: false,
    },
    {
      title: "Average Customer ATV",
      image: "./image 700.png",
      amount: `£${dashboard?.averageCustomerATV}`,
      showInfo: true,
      text: `Customer Average Transaction Value (ATV) is a metric that measures the average amount spent per transaction by customers with a business, calculated by dividing total sales revenue by the number of transactions within a specific time frame. 
It helps assess customer spending habits and business performance.`,
    },
    {
      title: "Average Total Spend",
      image: "./image 701.png",
      amount: dashboard?.averageTotalSpend,
      showInfo: true,
      text: `Customer average total spend is a metric indicating how much a customer spends over a specific period.
 
It's calculated by dividing the total revenue from sales by the number of customers.

This metric is crucial for understanding revenue contributions per customer.`,
    },
  ];
  return (
    <div className="px-4">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold">Customer Information</p>
        <div
          className="flex items-center px-6 h-12"
          style={{
            backgroundColor: "#FFFFFF",
            width: "25rem",
            borderRadius: "12px",
            color: "#8BA3CB",
          }}
        >
          <img src="./image 2 (3).svg" alt="search" className="w-6 h-6" />
          <input
            type="text"
            className="border-none w-80 bg-transparent outline-none focus:ring-0 focus:shadow-none focus:border-none"
            placeholder="Search with moneychat ID"
          />
        </div>
        <div className="flex">
          <button className="flex items-center gap-2" onClick={openDrawer}>
            <img src="./Mask group (8).png" alt="" className="w-5 h-5" />
            <p className="text-[#0070BC] font-semibold">FILTERS</p>
          </button>
        </div>
      </div>
      {/* <div className="flex gap-6 mt-8">
        <select
          id="countries"
          // value={selectedOption}
          // onChange={handleChange}
          className="rounded-lg shadow-md text-gray-900 text-sm  border-none block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {customerType?.map((data, i) => (
            <>
              <option className="font-semibold" key={i} value={data?.value}>
                {data?.label}
              </option>
            </>
          ))}
        </select>
        <select
          id="countries"
          // value={selectedOption}
          // onChange={handleChange}
          className="rounded-lg shadow-md text-gray-900 text-sm  border-none block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {customerSubCat?.map((data, i) => (
            <>
              <option className="font-semibold" key={i} value={data?.value}>
                {data?.label}
              </option>
            </>
          ))}
        </select>
      </div> */}
      <div className="mt-8">
        <p className="text-2xl font-[500] pb-4">Statistics</p>
        <div className="flex gap-6">
          {statisticData?.map((data, i) => (
            <InfoCard data={data} />
          ))}
        </div>
      </div>
      <div className="pt-4 flex gap-4">
        <div>
          <p className="text-xl font-[500] pb-4">Customers</p>
          <div className="flex flex-col gap-4">
            <InfoCard
              data={{
                title: "New Customers",
                image: "./fluent_people-team-24-filled (1).png",
                amount: dashboard?.newCustomer,
                showInfo: false,
              }}
            />
            <InfoCard
              data={{
                title: "Active Customers",
                image: "./fluent_people-team-24-filled (2).png",
                amount: dashboard?.activeCustomer,
                showInfo: false,
              }}
            />
          </div>
        </div>
        <div>
          <p className="text-xl font-[500] pb-4">Points System</p>
          <div className="flex flex-col gap-4">
            <InfoCard
              data={{
                title: "Total Points Redeemed",
                image: "./image 699.png",
                amount: dashboard?.totalPointsRedeemed,
                showInfo: false,
              }}
            />
            <InfoCard
              data={{
                title: "Total  Points Earned",
                image: "./image 699 (3).png",
                amount: dashboard?.totalPointEarned,
                showInfo: false,
              }}
            />
            <InfoCard
              data={{
                title: "Total  Average Points Balance",
                image: "./image 701.png",
                amount: dashboard?.totalAveragePointBalance,
                showInfo: false,
              }}
            />
          </div>
        </div>
        <div>
          <p className="text-xl font-[500] pb-4">Stamp System</p>
          <div>
            <InfoCard
              data={{
                title: "Total Stamps Redeemed",
                image: "./image 699 (1).png",
                amount: dashboard?.totalStampsRedeemed,
                showInfo: false,
              }}
            />
          </div>
        </div>
        <div>
          <p className="text-xl font-[500] pb-4">CLV</p>
          <div>
            <InfoCard
              data={{
                title: "CLV",
                image: "./image 699 (2).png",
                amount: dashboard?.CLV,
                showInfo: true,
                text: `Customer Lifetime Value (CLV) is a metric that estimates the total revenue a business can expect from a single customer account throughout the business relationship. 

It factors in the revenue generated from a customer, the duration of the relationship, and the costs associated with serving the customer.`,
              }}
            />
          </div>
        </div>
        <div>
          <p className="text-xl font-[500] pb-4">Basket Size</p>
          <div>
            <InfoCard
              data={{
                title: "Average Basket Size",
                image: "./image 700 (1).png",
                amount: dashboard?.averageBasketSize,
                showInfo: true,
                text: `Customer average basket size is a retail metric that represents the average number of items purchased by customers in a single transaction.

It's calculated by dividing the total number of items sold by the total number of transactions over a specific period.`,
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between my-6">
      <RotaionProgress data={dashboard?.retentionRate} />
      <LifeCycleStage data={dashboard?.LifeCycleStage}/>
      </div>
      <div>
        <Promotion data={dashboard?.recommendedPromotionType}/>
      </div>
      <div className="my-6">
        <BarChart data={dashboard?.favouriteTimeOfTheDay}/>
      </div>
      <div>
        <PaginatedTable  />
      </div>
      <Filter closeDrawer={closeDrawer} open={isOpen} />
    </div>
  );
};

export default CustomerInfo;
