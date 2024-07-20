import React, { useState } from "react";
import "./index.scss";
import MenuCard2 from "./MenuCard2";
import { DialogDefault } from "../common/DilogBox";
import TransactionDetails from "./TransactionDetails";
const AppPurchase = () => {
  const [openTransaction, setOpenTransaction] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <table className="table2">
        <thead>
          <tr>
            <th>Item Purchased</th>
            <th>Price</th>
            <th>Applied Promotion type</th>
            <th>Quantity</th>
            <th>Payment Method</th>
            <th>Transaction ID</th>
            <th>Time of Purchase</th>
            <th>Receipt</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>Coffee</p>
            </td>
            <td>
              <div>£3.30</div>
            </td>
            <td>Coupon</td>
            <td>2</td>
            <td>Linked Card</td>
            <td>
              <span
                className="id-link"
                onClick={() => setOpenTransaction(true)}
              >
                Ta9rrgh4u4
              </span>
            </td>
            <td>13:30 pm</td>
            <td>
              <div style={{ position: "relative", width: "120px" }}>
                <img src="./Group 38061.png" alt="" />
                <img
                  src="./Group 38060.png"
                  alt=""
                  on
                  style={{
                    position: "absolute",
                    top: "18%",
                    right: "18%",
                    cursor: "pointer",
                  }}
                />
                <img
                  src="./Group 38060.png"
                  alt=""
                  onClick={() => setOpenMenu(!openMenu)}
                  style={{
                    position: "absolute",
                    top: "18%",
                    right: "18%",
                    cursor: "pointer",
                  }}
                />
                {openMenu && <MenuCard2 />}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p>Donut</p>
            </td>
            <td>
              <div>£10.40</div>
            </td>
            <td>Percentage Discount</td>
            <td>1</td>
            <td>Linked Card</td>
            <td>
              <span
                className="id-link"
                onClick={() => setOpenTransaction(true)}
              >
                Ta9rrgh4u4
              </span>
            </td>
            <td>13:30 pm</td>
            <td>
              <div style={{ position: "relative", width: "120px" }}>
                <img src="./Group 38061.png" alt="" />
                <img
                  src="./Group 38060.png"
                  alt=""
                  on
                  style={{
                    position: "absolute",
                    top: "18%",
                    right: "18%",
                    cursor: "pointer",
                  }}
                />
                <img
                  src="./Group 38060.png"
                  alt=""
                  onClick={() => setOpenMenu(!openMenu)}
                  style={{
                    position: "absolute",
                    top: "18%",
                    right: "18%",
                    cursor: "pointer",
                  }}
                />
                {/* {openMenu && <MenuCard2 />} */}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p>Ice-Tea</p>
            </td>
            <td>
              <div>Stamp Reward</div>
            </td>
            <td></td>
            <td>1</td>
            <td>Stamp Reward</td>
            <td>
              <span
                className="id-link"
                onClick={() => setOpenTransaction(true)}
              >
                Ta9rrgh4u4
              </span>
            </td>
            <td>13:30 pm</td>
            <td>
              <div style={{ position: "relative", width: "120px" }}>
                <img src="./Group 38061.png" alt="" />
                <img
                  src="./Group 38060.png"
                  alt=""
                  on
                  style={{
                    position: "absolute",
                    top: "18%",
                    right: "18%",
                    cursor: "pointer",
                  }}
                />
                <img
                  src="./Group 38060.png"
                  alt=""
                  onClick={() => setOpenMenu(!openMenu)}
                  style={{
                    position: "absolute",
                    top: "18%",
                    right: "18%",
                    cursor: "pointer",
                  }}
                />
                {/* {openMenu && <MenuCard2 />} */}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <DialogDefault open={openTransaction} handleOpen={setOpenTransaction}>
        <TransactionDetails handleOpen={setOpenTransaction} />
      </DialogDefault>
    </div>
  );
};

export default AppPurchase;
