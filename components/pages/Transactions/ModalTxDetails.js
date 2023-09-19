import TagsV2 from "@/components/tags/TagsV2";
import React from "react";

const ModalTxDetails = () => {
  return (
    <div className="p-2  flex items-center justify-center">
      <section className="py-3 px-[1rem] border border-[#1215281a] rounded-[12px]">
        <div>
          <div className="flex items-center justify-between gap-[3rem]">
            <p className="uppercase font-[600]">Transaction</p>
            {/* <StatusTag text={"successful"} bg={"green"} /> */}
            {/* <TagsV2 type={el?.isActive ? "SUCCESS" : "PENDING"}>{el?.isActive ? "Active" : "Inactive"}</TagsV2> */}
            <TagsV2 type="SUCCESS">Successful</TagsV2>
          </div>
          <div className="my-3 border border-[#12152866] border-dashed"></div>
          <div className="py-4">
            <div className="py-2 flex items-center">
              <p className="w-[60%]">Date:</p>
              <p className="text-[#12152899] text-[14px]">01/3/2022</p>
            </div>
            <div className="py-2 flex items-center">
              <p className="w-[60%]">Time: :</p>
              <p className="text-[#12152899] text-[14px]">13:00 pm</p>
            </div>
            <div className="py-2 flex items-center">
              <p className="w-[60%]">Type:</p>
              <p className="text-[#12152899] text-[14px]">Credit</p>
            </div>
            <div className="py-2 flex items-center">
              <p className="w-[60%]">Reference Id:</p>
              <p className="text-[#12152899] text-[14px]">345335674</p>
            </div>
            <div className="my-3 border border-[#12152866] border-dashed"></div>
            <div className="py-2 flex items-center">
              <p className="w-[60%]">Amount:</p>
              <p className="text-[#12152899] text-[14px]">$40000</p>
            </div>
            <div className="my-3 border border-[#12152866] border-dashed"></div>
            <div className="py-2 flex items-center">
              <p className="w-[60%]">Event Title:</p>
              <p className="text-[#12152899] text-[14px]">Celebration</p>
            </div>
            <div className="py-2 flex items-center">
              <p className="w-[60%]">Paid By:</p>
              <p className="text-[#12152899] text-[14px]">Chinonoso David</p>
            </div>
            <div className="py-2 flex items-center">
              <p className="w-[60%]">Recieved By:</p>
              <p className="text-[#12152899] text-[14px]">Mark David</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModalTxDetails;
