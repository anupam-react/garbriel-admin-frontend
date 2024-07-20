import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import InventoryProduct from "./InventoryProduct";
const ProductDetails3 = ({ handleOpen }) => {
  const [openProduct, setProduct] = useState(false);
  return (
    <div className="details-container">
      <p className="details-title">Product Details</p>
      <img
        src="../Mask group (2).png"
        alt=""
        className="cross-image2"
        onClick={() => handleOpen(false)}
      />
      <img
        src="../image 711.png"
        alt=""
        className="details-image"
        onClick={() => setProduct(true)}
      />
      <hr className="my-4 bg-[#A2A2A2] w-full" />
      <div className="details-info" style={{gap:"20px"}}>
        <div className="info2">
          <p>
            Product <span className="pl-4">:</span>
          </p>

          <p>Dunkins Coffee</p>
        </div>
        <div className="info2">
          <p>
            Price <span className="pl-4">:</span>
          </p>

          <p>£200</p>
        </div>
        <div className="info2">
          <p>
            Date <span className="pl-4">:</span>
          </p>

          <p>10/12/2023</p>
        </div>
        <div className="info2">
          <p>
            Available in store <span className="pl-4">:</span>
          </p>

          <div className="text-[#00B050]">Yes</div>
        </div>
        <div className="info2">
          <p>
            Available in online <span className="pl-4">:</span>
          </p>

          <div className="text-[#121212]">NO</div>
        </div>
      </div>
      <DialogDefault open={openProduct} handleOpen={setProduct}>
        <InventoryProduct isProdInfo={true} handleOpen={setProduct} />
      </DialogDefault>
    </div>
  );
};

export default ProductDetails3;
