import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import BirthdayOffer from "./BirthdayOffer";
import CatalogueProduct from "./CatalogueProduct";
import ProductDetails from "./ProductDetails";
const InventoryProduct = ({ handleOpen , isProdInfo = false }) => {
  const [isView , setView] = useState()
  const [openDetails , setDetails] = useState()
  const [isSelect , setSelect] = useState(-1)
  const product = [
    {id:1, image:"../img/image 711.png" , name:"Chai Oatmilk latte"},
     {id:2, image:"../img/image 713 (1).png" , name:"Donuts"},
     {id:3, image:"../img/image 713 (2).png" , name:"Oreo Coffee"},
     {id:4, image:"../img/image 711.png" , name:"Chai Oatmilk latte"},
    {id:5, image:"../img/image 713 (2).png" , name:"Chai Oatmilk latte"},
     {id:6, image:"../img/image 713 (1).png" , name:"Donuts"},

    ]
    const divRef = useRef(null);
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
          setView(-1);
        }
      };
  
      if (isView !== -1) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isView]);

  return (
   
    <div className="gift-container">
    <div className="gift-main">
      <p className="title">Inventory</p>
      <img
        src="./Mask group (2).png"
        alt=""
        className="cross-image"
        onClick={() => {
          handleOpen(false);
        }}
      />
    </div>
    <hr className="hr" />
    <div className="catalogue">
      <label>Select Product from catalogue</label>
      <div
          className="flex items-center px-6 w-full my-3 h-12 shadow"
          style={{
            backgroundColor: "#FFFFFF",
           
            borderRadius: "12px",
            color: "#8BA3CB",
          }}
        >
          <img src="../image 2 (3).svg" alt="search" className="w-6 h-6" />
          <input
            type="text"
            className="border-none w-full bg-transparent outline-none focus:ring-0 focus:shadow-none focus:border-none"
            placeholder="Search Products  , Ex : Coffee , Donuts etc...."
          />
        </div>
      <div className="catalogue-flex flex-wrap catalogue-container">
        {product?.map((d, i)=>(
        <div className="catelogue-main"  key={i} onClick={()=> setSelect(i)}>
          <div className="relative">
            <img src={d?.image} alt="" className={isSelect === i  ? "border-4 rounded-xl  border-[#FE903C]" :"" }/>
            <img
              src="../Group (9).png"
              alt=""
              className="absolute top-2 right-2 cursor-pointer"
              onClick={()=> setView(i)}
            />
             {isView === i && (
                      <div className="absolute top-8 right-2 cursor-pointer" ref={divRef}  onClick={()=> setDetails(true)}>
                     <p className="viewProd text-[14px]">View Product</p>
                      </div>
                    )}
          </div>
          <p className={isSelect === i  ? "prod-name2" : "text-[#000000B2] text-center"} style={{ fontSize: "14px" }}>
           {d?.name}
          </p>
        </div>

        ))}
    
      </div>
    </div>
  
    <div className="flex-center mt-6">
      <button
        className="menuButton4"
        onClick={() => {
          handleOpen(false);
        }}
      >
      {isProdInfo ? "Back" : "Select Product"}
      </button>
    </div>
    <DialogDefault open={openDetails} handleOpen={setDetails}>
            <ProductDetails handleOpen={setDetails}/> 
        </DialogDefault>
  </div>
  );
};

export default InventoryProduct;
