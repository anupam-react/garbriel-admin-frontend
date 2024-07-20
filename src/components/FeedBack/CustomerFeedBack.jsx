import React from "react";
import { DialogDefault } from "../common/DilogBox";

const CustomerFeedBack = ({ open, setOpen, handleOpen }) => {
  return (
    <div>
      <DialogDefault open={open} handleOpen={handleOpen}>
        <div className="">
          <div className="p-8 rounded-md text-black bg-[#F5F5F5]">
            <div className="flex justify-between">
              <p className="font-semibold text-black text-xl">
                Customer Feedback
              </p>

              <div onClick={() => setOpen(false)}>
                <img
                  src="./Mask group (2).png"
                  alt=""
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
            </div>
            <hr className="bg-[#00000099] w-full my-6" />
            <div className="rounded-lg shadow p-[16px] h-[50vh] overflow-auto bg-white">
              <div className="flex justify-between">
                <p className="font-bold">Lorem Ipsum Heading!</p>
                <p>
                  DD/MM/YYYY <span className="text-[#0070BC]">(6:30 AM)</span>
                </p>
              </div>
              <div className="flex items-center gap-3 mb-[24px] mt-3">
                <p className="text-[#3BB54A]">4.5</p>
                <img src="./Group 409.png" alt="" className="h-fit" />
              </div>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque efficitur eu magna et malesuada. Nullam eget odio
                condimentum metus tempor gravida a vel neque. Mauris at ornare
                neque, id ultrices felis. Fusce augue lacus, porta quis metus
                quis, sollicitudin condimentum elit. Etiam eget dolor non erat
                porta sodales. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Pellentesque
                scelerisque orci ac neque porta fringilla. Quisque elementum
                enim vitae quam fermentum consequat. Nam vel hendrerit tortor.
                Sed volutpat nulla luctus, gravida neque eu, elementum tortor.
                Donec non nulla quam. Morbi sit amet euismod est. Mauris non
                arcu non diam efficitur sagittis quis quis enim. Aliquam sit
                amet sodales sapien. Maecenas rhoncus est urna. Nunc vel quam eu
                tortor euismod fringilla quis ac magna. Sed commodo sem risus,
                eget ullamcorper magna varius ut. Aliquam consequat tellus vel
                augue faucibus fringilla. Suspendisse eu eros a libero convallis
                finibus a sit amet enim. Cras luctus pellentesque eros, id
                pharetra quam egestas id. Duis nec placerat ante. Aliquam
                lacinia, mi tempor egestas egestas, sapien libero ultricies
                magna, id vulputate eros velit eget nunc. Nulla facilisi. Cras
                blandit purus vel ultrices fermentum. Sed mattis, sapien id
                fermentum vehicula, neque dolor mollis tellus, sit amet
                condimentum nunc tortor eget lorem.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-10 my-8">
            <button className="sign-button w-48" onClick={() => setOpen(false)}>
              CLOSE
            </button>
          </div>
        </div>
      </DialogDefault>
    </div>
  );
};

export default CustomerFeedBack;
