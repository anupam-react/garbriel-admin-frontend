import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import TransactionDetails from "./TransactionDetails";
import ProductDetails3 from "./ProductDetails3";
const TransactionDiscount = ({ handleOpen }) => {
  const [openProduct, setProduct] = useState(false);
  const [openProductInfo, setProductInfo] = useState(false);
  const [isDownload, setDownload] = useState(false);
  return (
    <div className="">
      <div className="trans-header p-6">
        <p className="text-white font-[500] text-[18px]">Transaction’s</p>
        <img
          src="../Mask group (2).png"
          alt=""
          className="cross-image2"
          onClick={() => handleOpen(false)}
        />
      </div>
      <table className="table3">
        <thead>
          <tr>
            <th>Percentage Discount</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: "100px" }}>Dunkins (60%)</td>
            <td>
              <div className="flex items-center justify-between gap-4">
                <img
                  src="../image 711.png"
                  alt=""
                  className="cursor-pointer"
                  onClick={() => setProductInfo(true)}
                />
                <div>
                  Purchased , Yesterday, 10:30 pm <br />
                  <span
                    className="text-[#0070BC] underline cursor-pointer"
                    onClick={() => {
                      setProduct(true);
                    }}
                  >
                    See Transaction.
                  </span>{" "}
                </div>
                <img
                  src="../Vector (42).png"
                  alt=""
                  className="h-fit cursor-pointer"
                  onClick={() => {
                    setDownload(true);
                    setTimeout(() => {
                      setDownload(false);
                    }, 2000);
                  }}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ width: "100px" }}>Dunkins (60%)</td>
            <td>
              <div className="flex items-center justify-between gap-4">
                <img
                  src="../image 711.png"
                  alt=""
                  className="cursor-pointer"
                  onClick={() => setProductInfo(true)}
                />
                <div>
                  Purchased , Yesterday, 10:30 pm <br />
                  <span
                    className="text-[#0070BC] underline cursor-pointer"
                    onClick={() => {
                      setProduct(true);
                    }}
                  >
                    See Transaction.
                  </span>{" "}
                </div>
                <img
                  src="../Vector (42).png"
                  alt=""
                  className="h-fit cursor-pointer"
                  onClick={() => {
                    setDownload(true);
                    setTimeout(() => {
                      setDownload(false);
                    }, 2000);
                  }}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ width: "100px" }}>Dunkins (60%)</td>
            <td>
              <div className="flex items-center justify-between gap-4">
                <img
                  src="../image 711.png"
                  alt=""
                  className="cursor-pointer"
                  onClick={() => setProductInfo(true)}
                />
                <div>
                  Purchased , Yesterday, 10:30 pm <br />
                  <span
                    className="text-[#0070BC] underline cursor-pointer"
                    onClick={() => {
                      setProduct(true);
                    }}
                  >
                    See Transaction.
                  </span>{" "}
                </div>
                <img
                  src="../Vector (42).png"
                  alt=""
                  className="h-fit cursor-pointer"
                  onClick={() => {
                    setDownload(true);
                    setTimeout(() => {
                      setDownload(false);
                    }, 2000);
                  }}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div className="flex justify-center my-4">
        <button
          className="menuButton4 w-[200px]"
          onClick={() => {
            setDownload(true);
            setTimeout(() => {
              setDownload(false);
            }, 2000);
          }}
        >
          Download Invoice
        </button>
      </div>
      <DialogDefault open={openProduct} handleOpen={setProduct}>
        <TransactionDetails isProdInfo={true} handleOpen={setProduct} />
      </DialogDefault>
      <DialogDefault open={openProductInfo} handleOpen={setProductInfo}>
        <ProductDetails3 isProdInfo={true} handleOpen={setProductInfo} />
      </DialogDefault>
      <DialogDefault open={isDownload} handleOpen={setDownload}>
        <div className="alert">
          <img src="../Vector (2).png" alt="" />
          <p className="text-center text-lg">Invoice(s) downloaded</p>
        </div>
      </DialogDefault>
    </div>
  );
};

export default TransactionDiscount;
