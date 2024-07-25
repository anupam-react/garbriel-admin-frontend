import React, { useState } from "react";
import "./index.scss";
import InfoHeader from "./InfoHeader";
import { DialogDefault } from "../common/DilogBox";
import HistoryDetails from "./HistoryDetails";
import TransactionCupon from "./TransactionCupon";
import TransactionDiscount from "./TransactionDiscount";
import ProductDetails3 from "./ProductDetails3";
import TransactionDetails from "./TransactionDetails";

const Promotions = ({ handleOpen , onClose}) => {
  const [openProduct, setOpenproduct] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);
  const [openCupon, setOpenCupon] = useState(false);
  const [openDiscount, setOpenDiscount] = useState(false);
  const [openTransaction, setOpenTransaction] = useState(false);
  return (
    <div className="info-container">
      <div className="gift-main">
        <p className="title">Participation In Promotions</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={() => handleOpen(false)}
        />
      </div>
      <hr className="hr2" />
      <InfoHeader onClose={onClose}/>

      <div style={{ paddingTop: "30px", paddingBottom: "20px" }}>
        <p
          style={{
            color: "#0070BC",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
          className="cursor-pointer"
          onClick={()=> handleOpen(false)}
        >
          Participation in Promotions
        </p>
        <hr className="hr3" style={{ width: "270px" }} />
      </div>
      <table className="table2">
        <thead>
          <tr>
            <th>Participation Type</th>
            <th>Participation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: "100px" }}>Percentage Discount</td>
            <td style={{ textAlign: "left", paddingLeft: "50px" }}>
              30 Purchases made on discounts –{" "}
              <span
                style={{
                  color: "#0070BC",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={()=>setOpenDiscount(true)}
              >
                {" "}
                See Transactions
              </span>
            </td>
          </tr>
          <tr>
            <td style={{ width: "100px" }}>Coupons</td>
            <td style={{ textAlign: "left", paddingLeft: "50px" }}>
              Redeemed 30 Coupons –{" "}
              <span
                style={{
                  color: "#0070BC",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={()=>setOpenCupon(true)}
              >
                {" "}
                See Transactions
              </span>
            </td>
          </tr>
          <tr>
            <td style={{ width: "100px" }}>Featured Deals</td>
            <td>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginLeft: "40px",
                }}
              >
                <img
                  src="./image 711.png"
                  alt=""
                  style={{ cursor: "pointer", width: "180px" }}
                  onClick={() => setOpenproduct(true)}
                />
                <div className="text-left">
                  Viewed{" "}
                  <span
                    style={{
                      color: "#0070BC",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    onClick={() => setOpenHistory(true)}
                  >
                    30 times
                  </span>
                  ,<br />
                  Last view: Yesterday, 10:30 pm
                </div>
              </div>
              <hr className="hr5" />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginLeft: "40px",
                }}
              >
                <img
                  src="./image 711.png"
                  alt=""
                  style={{ cursor: "pointer", width: "180px" }}
                  onClick={() => setOpenproduct(true)}
                />
                <div className="text-left">
                  Viewed{" "}
                  <span
                    style={{
                      color: "#0070BC",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    onClick={() => setOpenHistory(true)}
                  >
                    30 times
                  </span>
                  ,<br />
                  Last view: Yesterday, 10:30 pm
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ width: "100px" }}>Make A Saving</td>
            <td>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginLeft: "40px",
                }}
              >
                <img
                  src="./image 711 (1).png"
                  alt=""
                  style={{ cursor: "pointer", width: "180px" }}
                  onClick={() => setOpenproduct(true)}
                />
                <div className="text-left">
                  Viewed{" "}
                  <span
                    style={{
                      color: "#0070BC",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    onClick={() => setOpenHistory(true)}
                  >
                    30 times
                  </span>
                  ,<br />
                  Last view: Yesterday, 10:30 pm
                </div>
              </div>
              <hr className="hr5" />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginLeft: "40px",
                }}
              >
                <img
                  src="./image 711 (1).png"
                  alt=""
                  style={{ cursor: "pointer", width: "180px" }}
                  onClick={() => setOpenproduct(true)}
                />
                <div className="text-left">
                  Viewed{" "}
                  <span
                    style={{
                      color: "#0070BC",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    onClick={() => setOpenHistory(true)}
                  >
                    30 times
                  </span>
                  ,<br />
                  Last view: Yesterday, 10:30 pm
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ width: "100px" }}>Buy 1 Get 1 Free Deal</td>
            <td>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginLeft: "40px",
                }}
              >
                <img
                  src="./Group 38188.png"
                  alt=""
                  style={{ cursor: "pointer", width: "180px" }}
                  onClick={() => setOpenproduct(true)}
                />
                <div className="text-left cursor-pointer" onClick={()=> setOpenTransaction(true)}>
                  Bought 2 times,
                  <span
                    style={{
                      color: "#0070BC",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    see transactions
                  </span>
                  .<br />
                  Last purchase: Yesterday, 2:00 pm
                </div>
              </div>
              <hr className="hr5" />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginLeft: "40px",
                }}
              >
                <img
                  src="./Group 38188.png"
                  alt=""
                  style={{ cursor: "pointer", width: "180px" }}
                  onClick={() => setOpenproduct(true)}
                />
                <div className="text-left cursor-pointer" onClick={()=> setOpenTransaction(true)}>
                  Bought 2 times,
                  <span
                    style={{
                      color: "#0070BC",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    see transactions
                  </span>
                  .<br />
                  Last purchase: Yesterday, 2:00 pm
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <DialogDefault open={openProduct} handleOpen={setOpenproduct}>
        <ProductDetails3 handleOpen={setOpenproduct} />
      </DialogDefault>
      <DialogDefault open={openHistory} handleOpen={setOpenHistory}>
        <HistoryDetails handleOpen={setOpenHistory} />
      </DialogDefault>
      <DialogDefault open={openCupon} handleOpen={setOpenCupon}>
        <TransactionCupon handleOpen={setOpenCupon} />
      </DialogDefault>
      <DialogDefault open={openDiscount} handleOpen={setOpenDiscount}>
        <TransactionDiscount handleOpen={setOpenDiscount} />
      </DialogDefault>
      <DialogDefault open={openTransaction} handleOpen={setOpenTransaction}>
        <TransactionDetails handleOpen={setOpenTransaction} />
      </DialogDefault>
    </div>
  );
};

export default Promotions;
