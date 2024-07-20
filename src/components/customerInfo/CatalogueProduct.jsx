import React, { useEffect, useRef, useState } from "react";
import { DialogDefault } from "../common/DilogBox";

import InventoryProduct from "./InventoryProduct";
import ProductDetails from "./ProductDetails";

const CatalogueProduct = () => {
  const [isView , setView] = useState()
  const [openView , setOpenView] = useState()
  const [isSelect , setSelect] = useState()
  const [openDetails , setDetails] = useState()
  const divRef = useRef(null);
  const product = [
    {id:1, image:"../img/image 711.png" , name:"Chai Oatmilk latte"},
     {id:1, image:"../img/image 713 (1).png" , name:"Donuts"},
     {id:1, image:"../img/image 713 (2).png" , name:"Oreo Coffee"},
     {id:1, image:"../img/image 711.png" , name:"Chai Oatmilk latte"},
    ]

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
    <div className="catalogue-container">
      <p className="view-all cursor-pointer" onClick={()=> setOpenView(true)} >View All</p>
      <div className="catalogue-flex">
        {product?.map((d, i)=>(
        <div className="catelogue-main" key={i} onClick={()=> setSelect(i)}>
          <div className="relative">
            <img src={d?.image} alt="" className={isSelect === i  ? "border-4 rounded-xl  border-[#FE903C]" :"" }/>
            <img
              src="../Group (9).png"
              alt=""
              className="absolute top-2 right-2 cursor-pointer"
              onClick={()=> setView(i)}
            />
             {isView === i && (
                      <div className="absolute top-8 right-2 cursor-pointer" ref={divRef} onClick={()=> setDetails(true)}>
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
      <DialogDefault open={openView} handleOpen={setOpenView}>
            <InventoryProduct handleOpen={setOpenView}/> 
        </DialogDefault>
      <DialogDefault open={openDetails} handleOpen={setDetails}>
            <ProductDetails handleOpen={setDetails}/> 
        </DialogDefault>
    </div>
  );
};

export default CatalogueProduct;
