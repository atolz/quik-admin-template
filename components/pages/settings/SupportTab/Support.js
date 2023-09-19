import React, { useState } from "react";
import ContainerShadow from "@/components/layouts/containers/ContainerShadow";
import InputFieldV2 from "@/components/form-elements-v2/InputField";
import Button from "@/components/form-elements/Button";
import AppDialog from "@/components/app-dialog/AppDialog";

const PriorityBox = ({
  EditPriorityHandler = () => {},
  type = "Normal",
  desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi sit aenean ut arcu pellentesque. Consectetur cursus urna vulputate luctus. Gravida dolor condimentum luctus aliquam vitae lectus vitae. Amet, faucibus vel in sapien sed neque ornare tincidunt. Pellentesque ullamcorper nullam in leo, vel et egestas.",
}) => {
  return (
    <ContainerShadow className={" flex items-center !pl-8 !gap-6"}>
      <h3 className=" mr-20 font-bold text-2xl pl-4">{type}</h3>
      <p className=" max-w-[668px] text-[#868686]">{desc}</p>
      <div className="flex items-center gap-4 ml-auto whitespace-nowrap">
        <button onClick={EditPriorityHandler} className="flex items-center">
          Edit Priority{" "}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
        <button className="flex items-center text-red-600">
          Delete
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
    </ContainerShadow>
  );
};

const Support = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [priorityToEidit, setPriorityToEidit] = useState(null);

  const createPriorityHandler = () => {
    setIsOpen(true);
    setActiveModal("EditAddPriorityModal");
    setPriorityToEidit(null);
  };
  const EditPriorityHandler = (user) => {
    setIsOpen(true);
    setActiveModal("EditAddPriorityModal");
    setPriorityToEidit(user);
  };

  return (
    <div>
      <AppDialog header={false} isOpen={isOpen} panelClassName={" max-w-[450px] pt-10 pb-6 px-8 text-center rounded-[12px]"} setIsOpen={setIsOpen}>
        {activeModal == "EditAddPriorityModal" && <div>Didt</div>}
      </AppDialog>
      <div className=" space-y-7">
        <ContainerShadow>
          <h1 className=" font-semibold text-2xl mb-7 text-color-primary">Support</h1>
          <div className="flex justify-between items-center mb-8">
            <h2 className=" font-medium text-color-secondary text-lg">Support System Tags</h2>
            <div className="flex items-center gap-4">
              <InputFieldV2 />
              <Button className="">Add New Tag</Button>
            </div>
          </div>
        </ContainerShadow>
        <ContainerShadow className={" !py-12"}>
          <div className="flex items-center justify-between mb-12">
            <h2 className=" font-semibold text-2xl leading-6 mb-7 text-color-primary">Priority List</h2>
            <Button onClick={createPriorityHandler} className=" ">
              Add Priority
            </Button>
          </div>

          <div className=" space-y-7">
            <PriorityBox EditPriorityHandler={EditPriorityHandler} />
            <PriorityBox />
            <PriorityBox />
          </div>
        </ContainerShadow>
      </div>
    </div>
  );
};

export default Support;
