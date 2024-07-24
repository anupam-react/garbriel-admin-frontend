import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import Select from 'react-select';
import CatalogueProduct from "../customerInfo/CatalogueProduct";
import CustomOption from "./CustomOption";
import useCampaign from "../../hooks/useCampaign";
const NewCampaign = () => {
  const { campaignData , setProductId, handleChange , setCampaignData , handleCreateCampaign} = useCampaign()
  const [selectUserType, setSelectUserType] = useState("")
  const navigate = useNavigate();
  const handleSelect = (event) => {
    setSelectUserType(event);
    setCampaignData({...campaignData , typeOfCustomer : event.value})
  };

  const CampaignOptions = [
    { label: "Percentage Discount", value: "Percentage Discount"},
    { label: "Coupon", value: "Coupon" },
    { label: "Create An Offer", value: "Special Offer" },
    { label: "Buy 1 Get 1 Free", value: "Buy 1 Get 1 Free" },
    { label: "Featured Deals", value: "Featured Deals" },
    { label: "Get More Followers", value: "Get More Followers" },
    { label: "Get More Shop Visitors", value: "Get More Shop Visitors" },
  ];
  const RewardOptions = [
    { label: "Points", value: "Points"},
    { label: "Stamps", value: "Stamps" },

  ];
  const useOptions = [
    {
      label: "Select specific product attached to Coupon ( Burger)",
      value: "Select specific product attached to Coupon ( Burger)",
    },
    {
      label:
        "Select Product Categories To Apply Coupon(Burger, Coke, Dounts , Pizza)",
      value:
        "Select Product Categories To Apply Coupon(Burger, Coke, Dounts , Pizza)",
    },
  ];
  const CustomerOptions = [
    { label: "Active", value: "Active", color: '#03CC5E' },
    { label: "New", value: "New" , color: '#0070C0' },
    { label: "Slipping", value: "Slipping", color: '#ED7D31' },
    { label: "Churn", value: "Churn" , color: '#C00000' },
    { label: "Specific Customer", value: "Specific Customer" },
  ];
  return (
    <div>
      <div className=" mb-6">
        <p className="text-2xl font-bold">Set Up New Campaign</p>
      </div>
      <div className="loyalty-form-container">
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">
            Select type of Campaign You Have To Run{" "}
          </p>
          <select
            id="countries"
            value={campaignData?.typeOfCampaign}
            onChange={handleChange}
            className="input-loyalty2"
            name="typeOfCampaign"
          >
            <option
              className="font-semibold"
              disabled
              value="Percentage Dicount"
            >
              Add Discount Value
            </option>
            {CampaignOptions?.map((data, i) => (
              <>
                <option
                  className="font-semibold text-black "
                  key={i}
                  value={data?.value}
                >
                  {data?.label}
                </option>
              </>
            ))}
          </select>
        </div>
        {campaignData?.typeOfCampaign === "Percentage Discount" 
        && 
        <>
        <div className="catalogue mt-4">
        <p className="text-lg font-semibold pb-2">Upload Product From Inventory</p>

      <CatalogueProduct />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Upload Product Image</p>
          <div className="input-loyalty2">
            <label
              for="dropzone-file"
              className="flex justify-end bg-white  shadow rounded-md w-full "
            >
               {campaignData?.image?.name}
              <div className="upload-file">
                <p className="text-sm">UPLOAD</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={(e)=> setCampaignData({...campaignData , image : e.target.files[0]})}/>
            </label>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Discount Value</p>
          <input type="text" className="input-loyalty2" name="discountValue"  value={campaignData?.discountValue}
            onChange={handleChange} />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Expiration Date</p>
          <input type="text" className="input-loyalty2" name="expireDate"  value={campaignData?.expireDate}
            onChange={handleChange} />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Conditions Of Use</p>
          <select
            id="countries"
            name="conditionOfUse"
            value={campaignData?.conditionOfUse}
            onChange={handleChange}
            className="input-loyalty2"
          >
            {useOptions?.map((data, i) => (
              <>
                <option
                  className="font-semibold text-black"
                  key={i}
                  value={data?.value}
                >
                  {data?.label}
                </option>
              </>
            ))}
          </select>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Type of Customers</p>
          <Select
            options={CustomerOptions}
            components={{ Option: CustomOption }}
            value={selectUserType}
            onChange={handleSelect }
          
        />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Target Location</p>
          <textarea
            className="input-loyalty2"
            name="targetLocation"
            id=""
            rows="3"
            value={campaignData?.targetLocation}
            onChange={handleChange}
          ></textarea>
        </div>
     
        <div className="mt-4">
          <div className="input-loyalty2 p-4">
            <p className="font-semibold pb-2">
            4517 Washington Ave. Manchester, Kentucky 39495
            </p>
            <img src="../image 724.png" alt="" />
            <button
              className="loyalty-button1 mt-2"
              style={{ width: "300px" }}
              // onClick={handleSubmit}
            >
              <p className="text-[14px]">Estimated Reach</p>
              <p className="text-[20px]">2500-5000</p>
            </button>
          </div>
        </div>

        <div className="loyalty-button-container">
          <button
            className="loyalty-button2"
            onClick={() => {
              navigate("/marketing");
            }}
          >
            Back
          </button>
          <button
            className="loyalty-button1"
            style={{ width: "150px" }}
            onClick={()=>{
              // handleCreateCampaign()
              navigate("/marketing/review-campaign");
            }}
          >
            Next
          </button>
        </div>
        </>
        }
        {campaignData?.typeOfCampaign === "Coupon" 
        && 
        <>
        <div className="catalogue mt-4">
        <p className="text-lg font-semibold pb-2">Upload Product From Inventory</p>

      <CatalogueProduct setProductId={setProductId}/>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Upload Coupon Image</p>
          <div className="input-loyalty2">
            <label
              for="dropzone-file"
              className="flex justify-end bg-white  shadow rounded-md w-full "
            >
               {campaignData?.image?.name}
              <div className="upload-file">
                <p className="text-sm">UPLOAD</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={(e)=> setCampaignData({...campaignData , image : e.target.files[0]})}/>
            </label>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Discount Value</p>
          <input type="text" className="input-loyalty2" name="discountValue"  value={campaignData?.discountValue}
            onChange={handleChange} />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Expiration Date</p>
          <input type="text" className="input-loyalty2" name="expireDate"  value={campaignData?.expireDate}
            onChange={handleChange} />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Conditions Of Use</p>
          <select
            id="countries"
            name="conditionOfUse"
            value={campaignData?.conditionOfUse}
            onChange={handleChange}
            className="input-loyalty2"
          >
            {useOptions?.map((data, i) => (
              <>
                <option
                  className="font-semibold text-black"
                  key={i}
                  value={data?.value}
                >
                  {data?.label}
                </option>
              </>
            ))}
          </select>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Type of Customers</p>
          <Select
            options={CustomerOptions}
            components={{ Option: CustomOption }}
            value={selectUserType}
            onChange={handleSelect }
          
        />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Target Location</p>
          <textarea
            className="input-loyalty2"
            name="targetLocation"
            id=""
            rows="3"
            value={campaignData?.targetLocation}
            onChange={handleChange}
          ></textarea>
        </div>
     
        <div className="mt-4">
          <div className="input-loyalty2 p-4">
            <p className="font-semibold pb-2">
            4517 Washington Ave. Manchester, Kentucky 39495
            </p>
            <img src="../image 724.png" alt="" />
            <button
              className="loyalty-button1 mt-2"
              style={{ width: "300px" }}
              // onClick={handleSubmit}
            >
              <p className="text-[14px]">Estimated Reach</p>
              <p className="text-[20px]">2500-5000</p>
            </button>
          </div>
        </div>

        <div className="loyalty-button-container">
          <button
            className="loyalty-button2"
            onClick={() => {
              navigate("/marketing");
            }}
          >
            Back
          </button>
          <button
            className="loyalty-button1"
            style={{ width: "150px" }}
            onClick={()=>{
              // handleCreateCampaign()
              navigate("/marketing/review-campaign");
            }}
          >
            Next
          </button>
        </div>
        </>
        }
        {campaignData?.typeOfCampaign === "Special Offer" 
        && 
        <>
        <div className="catalogue mt-4">
        <p className="text-lg font-semibold pb-2">Upload Product From Inventory</p>

      <CatalogueProduct setProductId={setProductId}/>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Upload Photo</p>
          <div className="input-loyalty2">
            <label
              for="dropzone-file"
              className="flex justify-end bg-white  shadow rounded-md w-full "
            >
               {campaignData?.image?.name}
              <div className="upload-file">
                <p className="text-sm">UPLOAD</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={(e)=> setCampaignData({...campaignData , image : e.target.files[0]})}/>
            </label>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Offer Discount</p>
          <input type="text" className="input-loyalty2" name="discountValue"  value={campaignData?.discountValue}
            onChange={handleChange} />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">
          Choose reward Type
          </p>
          <select
            id="countries"
            // value={campaignData?.typeOfCampaign}
            // onChange={handleChange}
            className="input-loyalty2"
            name="typeOfCampaign"
          >
            {RewardOptions?.map((data, i) => (
              <>
                <option
                  className="font-semibold text-black "
                  key={i}
                  value={data?.value}
                >
                  {data?.label}
                </option>
              </>
            ))}
          </select>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Description</p>
          <textarea
            className="input-loyalty2"
            name="targetLocation"
            id=""
            rows="4"
            value={campaignData?.targetLocation}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Number Of Points To Reward</p>
          <input type="text" className="input-loyalty2" name="locationLong"
            onChange={handleChange} />
        </div>
        
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Specific Products To Attach Your Offer</p>
          <select
            id="countries"
            name="conditionOfUse"
            value={campaignData?.conditionOfUse}
            onChange={handleChange}
            className="input-loyalty2"
          >
            {useOptions?.map((data, i) => (
              <>
                <option
                  className="font-semibold text-black"
                  key={i}
                  value={data?.value}
                >
                  {data?.label}
                </option>
              </>
            ))}
          </select>
        </div>
       
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Type of Customers</p>
          <Select
            options={CustomerOptions}
            components={{ Option: CustomOption }}
            value={selectUserType}
            onChange={handleSelect }
          
        />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Target Location</p>
          <textarea
            className="input-loyalty2"
            name="targetLocation"
            id=""
            rows="3"
            value={campaignData?.targetLocation}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Expiration Date</p>
          <input type="text" className="input-loyalty2" name="expireDate"  value={campaignData?.expireDate}
            onChange={handleChange} />
        </div>
     
        <div className="mt-4">
          <div className="input-loyalty2 p-4">
            <p className="font-semibold pb-2">
            4517 Washington Ave. Manchester, Kentucky 39495
            </p>
            <img src="../image 724.png" alt="" />
            <button
              className="loyalty-button1 mt-2"
              style={{ width: "300px" }}
              // onClick={handleSubmit}
            >
              <p className="text-[14px]">Estimated Reach</p>
              <p className="text-[20px]">2500-5000</p>
            </button>
          </div>
        </div>
      

        <div className="loyalty-button-container">
          <button
            className="loyalty-button2"
            onClick={() => {
              navigate("/marketing");
            }}
          >
            Back
          </button>
          <button
            className="loyalty-button1"
            style={{ width: "150px" }}
            onClick={()=>
              navigate("/marketing/review-offer")
            }
            // onClick={handleCreateCampaign}
          >
            Next
          </button>
        </div>
        </>
        }
        {campaignData?.typeOfCampaign === "Buy 1 Get 1 Free" 
        && 
        <>
        {/* <div className="catalogue mt-4">
        <p className="text-lg font-semibold pb-2">Upload Product From Inventory</p>

      <CatalogueProduct setProductId={setProductId}/>
        </div> */}
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Upload  Coupon Image</p>
          <div className="input-loyalty2">
            <label
              for="dropzone-file"
              className="flex justify-end bg-white  shadow rounded-md w-full "
            >
               {campaignData?.image?.name}
              <div className="upload-file">
                <p className="text-sm">UPLOAD</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={(e)=> setCampaignData({...campaignData , image : e.target.files[0]})}/>
            </label>
          </div>
        </div>
       
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Description</p>
          <textarea
            className="input-loyalty2"
            name="targetLocation"
            id=""
            rows="4"
            value={campaignData?.targetLocation}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Expiration Date</p>
          <input type="text" className="input-loyalty2" name="expireDate"  value={campaignData?.expireDate}
            onChange={handleChange} />
        </div>
        
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Conditions of use</p>
          <select
            id="countries"
            name="conditionOfUse"
            value={campaignData?.conditionOfUse}
            onChange={handleChange}
            className="input-loyalty2"
          >
            {useOptions?.map((data, i) => (
              <>
                <option
                  className="font-semibold text-black"
                  key={i}
                  value={data?.value}
                >
                  {data?.label}
                </option>
              </>
            ))}
          </select>
        </div>
       
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Type of Customers</p>
          <Select
            options={CustomerOptions}
            components={{ Option: CustomOption }}
            value={selectUserType}
            onChange={handleSelect }
          
        />
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Target Location</p>
          <textarea
            className="input-loyalty2"
            name="targetLocation"
            id=""
            rows="3"
            value={campaignData?.targetLocation}
            onChange={handleChange}
          ></textarea>
        </div>
     
     
        <div className="mt-4">
          <div className="input-loyalty2 p-4">
            <p className="font-semibold pb-2">
            4517 Washington Ave. Manchester, Kentucky 39495
            </p>
            <img src="../image 724.png" alt="" />
            <button
              className="loyalty-button1 mt-2"
              style={{ width: "300px" }}
              // onClick={handleSubmit}
            >
              <p className="text-[14px]">Estimated Reach</p>
              <p className="text-[20px]">2500-5000</p>
            </button>
          </div>
        </div>
      

        <div className="loyalty-button-container">
          <button
            className="loyalty-button2"
            onClick={() => {
              navigate("/marketing");
            }}
          >
            Back
          </button>
          <button
            className="loyalty-button1"
            style={{ width: "150px" }}
            onClick={()=>
              navigate("/marketing/review-free")
            }
            
          >
            Next
          </button>
        </div>
        </>
        }
        {campaignData?.typeOfCampaign === "Featured Deals" 
        && 
        <>
        <div className="catalogue mt-4">
        <p className="text-lg font-semibold pb-2">Upload Product From Inventory</p>

      <CatalogueProduct setProductId={setProductId}/>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Upload Photo</p>
          <div className="input-loyalty2">
            <label
              for="dropzone-file"
              className="flex justify-end bg-white  shadow rounded-md w-full "
            >
               {campaignData?.image?.name}
              <div className="upload-file">
                <p className="text-sm">UPLOAD</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={(e)=> setCampaignData({...campaignData , image : e.target.files[0]})}/>
            </label>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Featured product title</p>
          <input type="text" className="input-loyalty2" name="expireDate"  
            onChange={handleChange} />
        </div>
       
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Description</p>
          <textarea
            className="input-loyalty2"
            name="targetLocation"
            id=""
            rows="4"
            value={campaignData?.targetLocation}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Expiration Date</p>
          <input type="text" className="input-loyalty2" name="expireDate"  value={campaignData?.expireDate}
            onChange={handleChange} />
        </div>
        
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Target Location</p>
          <textarea
            className="input-loyalty2"
            name="targetLocation"
            id=""
            rows="3"
            value={campaignData?.targetLocation}
            onChange={handleChange}
          ></textarea>
        </div>
     
     
        <div className="mt-4">
          <div className="input-loyalty2 p-4">
            <p className="font-semibold pb-2">
            4517 Washington Ave. Manchester, Kentucky 39495
            </p>
            <img src="../image 724.png" alt="" />
            <button
              className="loyalty-button1 mt-2"
              style={{ width: "300px" }}
              // onClick={handleSubmit}
            >
              <p className="text-[14px]">Estimated Reach</p>
              <p className="text-[20px]">2500-5000</p>
            </button>
          </div>
        </div>
      

        <div className="loyalty-button-container">
          <button
            className="loyalty-button2"
            onClick={() => {
              navigate("/marketing");
            }}
          >
            Back
          </button>
          <button
            className="loyalty-button1"
            style={{ width: "150px" }}
            onClick={()=> navigate("/marketing/review-featured")}
          >
            Next
          </button>
        </div>
        </>
        }
        {campaignData?.typeOfCampaign === "Get More Followers" 
        && 
        <>
      <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Enter description</p>
          <textarea
            className="input-loyalty2"
            name="targetLocation"
            id=""
            rows="4"
            value={campaignData?.targetLocation}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Upload Coupon Image</p>
          <div className="input-loyalty2">
            <label
              for="dropzone-file"
              className="flex justify-end bg-white  shadow rounded-md w-full "
            >
               {campaignData?.image?.name}
              <div className="upload-file">
                <p className="text-sm">UPLOAD</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={(e)=> setCampaignData({...campaignData , image : e.target.files[0]})}/>
            </label>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Audience Selection</p>
          <input type="text" className="input-loyalty2" name="expireDate"  
            onChange={handleChange} />
        </div>
       
      

        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Campaign Duration</p>
          <input type="text" className="input-loyalty2" name="expireDate"
            onChange={handleChange} />
        </div>
        
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Target Location</p>
          <textarea
            className="input-loyalty2"
            name="targetLocation"
            id=""
            rows="3"
            value={campaignData?.targetLocation}
            onChange={handleChange}
          ></textarea>
        </div>
     
        <div className="mt-4">
          <div className="input-loyalty2 p-4">
            <p className="font-semibold pb-2">
            4517 Washington Ave. Manchester, Kentucky 39495
            </p>
            <img src="../image 724.png" alt="" />
            <button
              className="loyalty-button1 mt-2"
              style={{ width: "300px" }}
              // onClick={handleSubmit}
            >
              <p className="text-[14px]">Estimated Reach</p>
              <p className="text-[20px]">2500-5000</p>
            </button>
          </div>
        </div>
      

        <div className="loyalty-button-container">
          <button
            className="loyalty-button2"
            onClick={() => {
              navigate("/marketing");
            }}
          >
            Back
          </button>
          <button
            className="loyalty-button1"
            style={{ width: "150px" }}
            onClick={()=> navigate('/marketing/review-follower')}
          >
            Next
          </button>
        </div>
        </>
        }
        {campaignData?.typeOfCampaign === "Get More Shop Visitors" 
        && 
        <>
      <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Enter description</p>
          <textarea
            className="input-loyalty2"
            name="targetLocation"
            id=""
            rows="4"
            value={campaignData?.targetLocation}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Upload Coupon Image</p>
          <div className="input-loyalty2">
            <label
              for="dropzone-file"
              className="flex justify-end bg-white  shadow rounded-md w-full "
            >
               {campaignData?.image?.name}
              <div className="upload-file">
                <p className="text-sm">UPLOAD</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={(e)=> setCampaignData({...campaignData , image : e.target.files[0]})}/>
            </label>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Audience Selection</p>
          <input type="text" className="input-loyalty2" name="expireDate"  
            onChange={handleChange} />
        </div>
       
      

        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Add Campaign Duration</p>
          <input type="text" className="input-loyalty2" name="expireDate"
            onChange={handleChange} />
        </div>
        
        <div className="mt-4">
          <p className="text-lg font-semibold pb-2">Choose Target Location</p>
          <textarea
            className="input-loyalty2"
            name="targetLocation"
            id=""
            rows="3"
            value={campaignData?.targetLocation}
            onChange={handleChange}
          ></textarea>
        </div>
     
     
        <div className="mt-4">
          <div className="input-loyalty2 p-4">
            <p className="font-semibold pb-2">
            4517 Washington Ave. Manchester, Kentucky 39495
            </p>
            <img src="../image 724.png" alt="" />
            <button
              className="loyalty-button1 mt-2"
              style={{ width: "300px" }}
              // onClick={handleSubmit}
            >
              <p className="text-[14px]">Estimated Reach</p>
              <p className="text-[20px]">2500-5000</p>
            </button>
          </div>
        </div>
      

        <div className="loyalty-button-container">
          <button
            className="loyalty-button2"
            onClick={() => {
              navigate("/marketing");
            }}
          >
            Back
          </button>
          <button
            className="loyalty-button1"
            style={{ width: "150px" }}
            onClick={()=> navigate("/marketing/review-shop")}
          >
            Next
          </button>
        </div>
        </>
        }
      </div>
    </div>
  );
};

export default NewCampaign;
