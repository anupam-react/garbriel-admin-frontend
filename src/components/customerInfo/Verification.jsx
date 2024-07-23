import React, { useState } from "react";
import InfoHeader from "./InfoHeader";
import { DialogDefault } from "../common/DilogBox";
import AwardCustomer from "./AwardCustomer";
import Notification from "./Notification";

const Verification = ({ handleOpen }) => {
  const [openPromotion, setOpenPromotion] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  return (
    <div className="info-container">
      <div className="gift-main">
        <p className="title">Student Verification</p>
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
        <p style={{ color: "#0070BC", fontWeight: 600 }}  className="cursor-pointer" onClick={()=> handleOpen(false)}>
          STUDENT VERIFICATION
        </p>
        <hr className="hr3" style={{ width: "205px" }} />
      </div>
      <table className="table2">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Educational Institution</th>
            <th>Status</th>
            <th>Date</th>
            <th>Notification</th>
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
              {" "}
              <span className="text-[#121212] font-[500]" >
              University Of Manchester
              </span>{" "}

            </td>
            <td>
            <span className="id-link" style={{ color: "#3BB54A" }}>
                Verified
              </span>{" "}
            </td>
            <td>18/12/2023</td>
            <td>
              {" "}
              <button
                className="menuButton6"
                onClick={() => setOpenPromotion(true)}
              >
                Send Customized Student Promotion
              </button>
            </td>
          </tr>
          {/* <tr>
            <td>
              <div className="flex justify-center">
                <img src="./carbon_user-avatar-filled (2).png" alt="" />
              </div>
              <p style={{ color: "#121212", fontWeight: 600 }}>ID : MC12345</p>
            </td>
            <td>
              {" "}
              <span className="id-link" style={{ color: "#3BB54A" }}>
                Verified
              </span>{" "}
              <br />
            </td>
            <td>18/12/2023</td>
            <td>
              {" "}
              <button
                className="menuButton6"
                onClick={() => setOpenPromotion(true)}
              >
                Send Customized Student Promotion
              </button>
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
              {" "}
              <span className="id-link" style={{ color: "#FC0005" }}>
                Not Verified
              </span>{" "}
              <br />
            </td>
            <td>N/A</td>
            <td>
              {" "}
              <button
                className="menuButton6"
                onClick={() => setOpenNotification(true)}
              >
                Send a push notification note
              </button>
            </td>
          </tr> */}
        </tbody>
      </table>
      <DialogDefault open={openPromotion} handleOpen={setOpenPromotion}>
        <AwardCustomer
          handleOpen={setOpenPromotion}
          title="Send Customized Student Promotion"
        />
      </DialogDefault>
      <DialogDefault open={openNotification} handleOpen={setOpenNotification}>
        <Notification handleOpen={setOpenNotification} />
      </DialogDefault>
    </div>
  );
};

export default Verification;
