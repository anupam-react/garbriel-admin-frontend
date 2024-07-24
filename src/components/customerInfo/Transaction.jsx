import React, { useState } from "react";
import "./index.scss";
import { DialogDefault } from "../common/DilogBox";
import Bouns from "./Bouns";
import AwardCustomer from "./AwardCustomer";
import TransactionDetails from "./TransactionDetails";
const Transaction = ({onClose}) => {
  const [openAward, setOpenAward] = useState(false);
  const [openPoint, setOpenPoint] = useState(false);
  const [openTransaction, setOpenTransaction] = useState(false);
  return (
    <div>
      <table className="table2">
        <thead>
          <tr>
            <th>Items Bought</th>
            <th>In-Store</th>
            <th>Online</th>
            <th>Points Earned</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>Coffee</div>
            </td>
            <td>
              <div>
                05/12/2023, 6:00 pm Transaction
                <span
                  className="id-link"
                  onClick={() => setOpenTransaction(true)}
                >
                  {" "}
                  ID:CFA3945BFO348U
                </span>{" "}
                Café Nero, Manchester Spinning Fields, M6 3AJ
              </div>
            </td>
            <td>
              <div>N/A</div>
            </td>
            <td>
              <p>300</p>
              <div className="button-container2">
                <button
                  className="menuButton4"
                  onClick={() => setOpenAward(true)}
                >
                  Award Free Bonus
                </button>
                <button
                  className="menuButton4"
                  onClick={() => setOpenPoint(true)}
                >
                  Send Target Point Promotions
                </button>
               
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>Coffee</div>
            </td>
            <td>
              <div>N/A</div>
            </td>
            <td>
              <div>
                05/12/2023, 6:00 pm Transaction{" "}
                <span
                  className="id-link"
                  onClick={() => setOpenTransaction(true)}
                >
                  {" "}
                  ID:CFA3945BFO348U
                </span>{" "}
                Café Nero, Manchester Spinning Fields, M6 3AJ
              </div>
            </td>

            <td>
              <p>300</p>
              <div className="button-container2">
                <button
                  className="menuButton4"
                  onClick={() => setOpenAward(true)}
                >
                  Award Free Bonus
                </button>
                <button
                  className="menuButton4"
                  onClick={() => setOpenPoint(true)}
                >
                  Send Target Point Promotions
                </button>
                
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <DialogDefault open={openAward} handleOpen={setOpenAward}>
                  <Bouns handleOpen={setOpenAward} onClose={onClose}/>
                </DialogDefault>
                <DialogDefault open={openPoint} handleOpen={setOpenPoint}>
                  <AwardCustomer handleOpen={setOpenPoint} />
                </DialogDefault>
                <DialogDefault open={openTransaction} handleOpen={setOpenTransaction}>
                  <TransactionDetails handleOpen={setOpenTransaction} />
                </DialogDefault>
    </div>
  );
};

export default Transaction;
