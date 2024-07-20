import React, { useState } from "react";
import { DialogDefault } from "../common/DilogBox";
import TransactionDetails from "./TransactionDetails";
import Referal from "./Referal";

const RefferalTable = () => {
  const [openAward, setOpenAward] = useState(false);
  const [openTransaction, setOpenTransaction] = useState(false);
  return (
    <div>
      <table className="table2">
        <thead>
          <tr>
            <th>Referee</th>
            <th>Referral ID</th>
            <th>Transaction Made</th>
            <th>Referral Points Earned</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex justify-center">
                <img src="./carbon_user-avatar-filled (2).png" alt="" />
              </div>
              <p>ID : MC12345</p>
            </td>
            <td>
              <div>BRF84852858</div>
            </td>
            <td>
              <div>
                05/12/2023, 11:05 pm Transaction{" "}
                <span
                  className="id-link"
                  onClick={() => setOpenTransaction(true)}
                >
                  {" "}
                  ID:CFA3945BFO348U
                </span>{" "}
              </div>
            </td>
            <td>
              <p>300</p>
              <button
                className="menuButton4"
                onClick={() => setOpenAward(true)}
              >
                Send Referal Reward
              </button>
              <DialogDefault open={openAward} handleOpen={setOpenAward}>
                <Referal handleOpen={setOpenAward} />
              </DialogDefault>
              <DialogDefault
                open={openTransaction}
                handleOpen={setOpenTransaction}
              >
                <TransactionDetails handleOpen={setOpenTransaction} />
              </DialogDefault>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RefferalTable;
