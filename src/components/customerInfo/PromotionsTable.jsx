import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import PromotionDetails from "./PromotionDetails";
import TransactionDetails from "./TransactionDetails";
const PromotionsTable = () => {
  const [openPromtion1, setOpenPromtion1] = useState(false);
  const [openPromtion2, setOpenPromtion2] = useState(false);
  const [openTransaction, setOpenTransaction] = useState(false);
  return (
    <div>
      <table className="table2">
        <thead>
          <tr>
            <th>Promotion Date</th>
            <th>Promotion Type and Value ID</th>
            <th>Promotion Issued</th>
            <th>Transaction Made</th>
            <th>Points Earned</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>05/12/2023</p>
            </td>
            <td>
              <div>BUY 1 GET 1 Free</div>
            </td>
            <td>
              <img
                src="./Group 38188.png"
                alt=""
                className="cursor-pointer"
                onClick={() => setOpenPromtion1(true)}
              />
            </td>
            <td>
              05/12/2023, 11:05 pm Transaction
              <span
                className="id-link"
                onClick={() => setOpenTransaction(true)}
              >
                {" "}
                ID:CFA3945BFO348U
              </span>
            </td>
            <td>1,500 pts</td>
          </tr>
          <tr>
            <td>
              <p>05/12/2023</p>
            </td>
            <td>
              <div>Percentage Discount, 50%</div>
            </td>
            <td>
              <img
                src="./Group 571.png"
                alt=""
                className="cursor-pointer"
                onClick={() => setOpenPromtion2(true)}
              />
            </td>
            <td>
              05/12/2023, 11:05 pm Transaction
              <span
                className="id-link"
                onClick={() => setOpenTransaction(true)}
              >
                {" "}
                ID:CFA3945BFO348U
              </span>
            </td>
            <td>1,500 pts</td>
          </tr>
        </tbody>
      </table>
      <DialogDefault open={openPromtion1} handleOpen={setOpenPromtion1}>
        <PromotionDetails
          image="./Group 38188.png"
          type="Buy 1 Get 1 Free"
          name="Dunkins  Burger"
          handleOpen={setOpenPromtion1}
        />
      </DialogDefault>
      <DialogDefault open={openPromtion2} handleOpen={setOpenPromtion2}>
        <PromotionDetails
          image="./Group 571.png"
          type="50% Discount "
          name="Nike Sneakers"
          handleOpen={setOpenPromtion2}
        />
      </DialogDefault>
      <DialogDefault open={openTransaction} handleOpen={setOpenTransaction}>
        <TransactionDetails handleOpen={setOpenTransaction} />
      </DialogDefault>
    </div>
  );
};

export default PromotionsTable;
