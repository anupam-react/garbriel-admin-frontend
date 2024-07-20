import React, { useState } from "react";
import { DialogDefault } from "../common/DilogBox";
import InfoHeader from "./InfoHeader";
import "./index.scss";
import HistoryDetails from "./HistoryDetails";
import ProductDetails2 from "./ProductDeatils2";
import TransactionDetails from "./TransactionDetails";
import ProductDetails from "./ProductDetails";

const RefferalActivity = ({ handleOpen }) => {
  const [openProduct, setOpenproduct] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);
  return (
    <div className="info-container">
      <div className="gift-main">
        <p className="title">Referral Activity</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={() => handleOpen(false)}
        />
      </div>
      <hr className="hr2" />
      <InfoHeader />

      <div style={{ paddingTop: "30px", paddingBottom: "20px" }}>
        <p
          style={{
            color: "#0070BC",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          REFFERAL ACTIVITY
        </p>
        <hr className="hr3" style={{ width: "160px" }} />
      </div>
      <table className="table2">
        <thead>
          <tr>
            <th>Refeered Customer</th>
            <th>Personalized Referral Link</th>
            <th>Referee Purchase</th>
            <th>Reward Earned</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex justify-center">
                <img src="./carbon_user-avatar-filled (2).png" alt="" />
              </div>
              <p style={{ color: "#121212", fontWeight: 600 }}>ID : MC12345</p>
            </td>
            <td>
              <div style={{ color: "#000000", fontWeight: 600 }}>
                https:www.Moneychat.com /referral/link
              </div>
            </td>
            <td>
              <div className="flex justify-center items-center gap-6">
                <div>
                  <p
                    className="pb-2"
                    style={{ color: "#000000", fontWeight: 600 }}
                  >
                    Donut
                  </p>
                  <img
                    src="./image 713 (1).png"
                    alt=""
                    style={{
                      cursor: "pointer",
                      width: "120px",
                      height: "100px",
                    }}
                    onClick={() => setOpenproduct(true)}
                  />
                </div>
                <div className="mt-6">
                  09/12/2023,11:00 am <br />
                  <span
                    className="id-link"
                    onClick={() => setOpenHistory(true)}
                  >
                    {" "}
                    See transaction
                  </span>
                </div>
              </div>
            </td>
            <td>
              <div className="flex justify-center items-center gap-6">
                <div>
                  <p
                    className="pb-2"
                    style={{ color: "#000000", fontWeight: 600 }}
                  >
                    Free Donut
                  </p>
                  <img
                    src="./image 713 (1).png"
                    alt=""
                    style={{
                      cursor: "pointer",
                      width: "120px",
                      height: "100px",
                    }}
                    onClick={() => setOpenproduct(true)}
                  />
                </div>
                <div className="mt-6">
                  <span style={{ color: "#FEA82F" }}>Unclaimed</span> <br />
                  09/12/2023,11:00 am
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex justify-center">
                <img src="./carbon_user-avatar-filled (2).png" alt="" />
              </div>
              <p style={{ color: "#121212", fontWeight: 600 }}>ID : MC12345</p>
            </td>
            <td>
              <div style={{ color: "#000000", fontWeight: 600 }}>
                https:www.Moneychat.com /referral/link
              </div>
            </td>
            <td>
              <div className="flex justify-center items-center gap-6">
                <div>
                  <p
                    className="pb-2"
                    style={{ color: "#000000", fontWeight: 600 }}
                  >
                    Coffee
                  </p>
                  <img
                    src="./image 713 (2).png"
                    alt=""
                    style={{
                      cursor: "pointer",
                      width: "120px",
                      height: "100px",
                    }}
                    onClick={() => setOpenproduct(true)}
                  />
                </div>
                <div className="mt-6">
                  09/12/2023,11:00 am <br />
                  <span
                    className="id-link"
                    onClick={() => setOpenHistory(true)}
                  >
                    {" "}
                    See transaction
                  </span>
                </div>
              </div>
            </td>
            <td>
              <div className="flex justify-center items-center gap-6">
                <div>
                  <p
                    className="pb-2"
                    style={{ color: "#000000", fontWeight: 600 }}
                  >
                    Free Coffee
                  </p>
                  <img
                    src="./image 713 (2).png"
                    alt=""
                    style={{
                      cursor: "pointer",
                      width: "120px",
                      height: "100px",
                    }}
                    onClick={() => setOpenproduct(true)}
                  />
                </div>
                <div className="mt-6">
                  <span style={{ color: "#3BB54A" }}>claimed</span> <br />
                  09/12/2023,11:00 am <br />
                  <span
                    className="id-link"
                    onClick={() => setOpenHistory(true)}
                  >
                    {" "}
                    See transaction
                  </span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <DialogDefault open={openProduct} handleOpen={setOpenproduct}>
        <ProductDetails2 handleOpen={setOpenproduct} />
      </DialogDefault>
      <DialogDefault open={openHistory} handleOpen={setOpenHistory}>
        <TransactionDetails handleOpen={setOpenHistory} />
      </DialogDefault>
    </div>
  );
};

export default RefferalActivity;
