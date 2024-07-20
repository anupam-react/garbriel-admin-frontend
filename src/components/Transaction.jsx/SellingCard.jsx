import React, { useState } from "react";
import Select from "../common/Select";
import AvailableProduct from "./AvailableProduct";

const SellingCard = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const data = [
    { image: "./Ellipse 1 (1).svg", name: "Lorem Ipsum", count: 56 },
    { image: "./Ellipse 1 (1).svg", name: "Lorem Ipsum", count: 56 },
    { image: "./Ellipse 1 (1).svg", name: "Lorem Ipsum", count: 56 },
  ];
  return (
    <div className="shadow-xl rounded-md bg-white flex flex-col items-center gap-4 py-4 px-4 w-[23vw]">
      <p className="text-[#0070BC] text-xl font-semibold">TOP SELLING ITEMS</p>
      <Select />
      <div className="flex flex-col gap-6 my-4">
        {data?.map((d, i) => (
          <div className="flex gap-4">
            <p className="underline text-[22px] rank font-semibold">#{i + 1}</p>
            <img
              src={d?.image}
              alt="image"
              className="rounded-full w-10 h-10"
            />
            <div>
              <p className="font-semibold ">{d?.name}</p>
              <p className="text-[#000000B2]">
                Total Sale :
                <span className="text-[#0070BC] font-semibold">56</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <hr className="bg-[#00000080] w-full" />
      <p
        className="text-[#1E1E1E99] font-[500] cursor-pointer"
        onClick={() => setOpen(true)}
      >
        VIEW MORE
      </p>
      <AvailableProduct open={open} setOpen={setOpen} handleOpen={handleOpen} />
    </div>
  );
};

export default SellingCard;
