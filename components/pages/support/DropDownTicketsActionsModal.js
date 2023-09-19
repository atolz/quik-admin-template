import AppDialog from "@/components/app-dialog/AppDialog";
import DropDown from "@/components/drop-down/DropDown";
import { useRouter } from "next/router";
import React, { useState } from "react";

const DropDownTicketsActionsModal = ({ ticket }) => {
  const router = useRouter();
  const dropDownItems = [
    <span key={1} className="flex items-center justify-between w-28 ">
      <span className=" text-black font-medium ">View Ticket</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#39BD78" className="w-5 h-5 ">
        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
        <path
          fillRule="evenodd"
          d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
          clipRule="evenodd"
        />
      </svg>
    </span>,
    <span key={2} className="flex items-center justify-between w-28">
      <span className="  font-medium mr-9">Assign Ticket</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F9B32E" className="w-5 h-5">
        <path
          fillRule="evenodd"
          d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z"
          clipRule="evenodd"
        />
      </svg>
    </span>,
    <span key={3} className="flex items-center text-[#F9B32E] justify-between w-28">
      <span className="  font-medium ">Set Priority</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
    </span>,
    <span key={4} className="flex items-center text-red-500 justify-between w-28">
      <span className="  font-medium ">Close Ticket</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
    </span>,
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState("");

  const onMenuChange = (index, user) => {
    if (index == 0) {
      router.push("/support/1232");
    }
    if (index == 1) {
      setIsOpen(true);
      setActiveModal("AssingModal");
    }
    if (index == 2) {
      setIsOpen(true);
      setActiveModal("PriorityModal");
    }
  };
  return (
    <div>
      <AppDialog header={false} isOpen={isOpen} panelClassName={" max-w-[450px] pt-10 pb-6 px-8 text-center rounded-[12px]"} setIsOpen={setIsOpen}>
        {activeModal == "AssingModal" && <div>Assign TIck modal</div>}
        {activeModal == "PriorityModal" && <div>Priority Modal</div>}
      </AppDialog>

      <DropDown
        onChange={(index) => {
          onMenuChange(index, ticket);
        }}
        items={dropDownItems}
        itemClassName={"!px-4 !py-2"}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </DropDown>
    </div>
  );
};

export default DropDownTicketsActionsModal;
