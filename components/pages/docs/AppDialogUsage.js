import React, { useState } from "react";
import AppDialog from "../../app-dialog/AppDialog";
import Button from "../../form-elements/Button";
import UsageContainer from "./UsageContainer";

const AppDialogUsage = () => {
  const [activeModal, setActiveModal] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const modalOneHandler = () => {
    setActiveModal("Modal One");
    setIsOpen(true);
  };
  const modalTwoHandler = () => {
    setActiveModal("Modal Two");
    setIsOpen(true);
  };
  return (
    <div>
      <AppDialog header={false} isOpen={isOpen} panelClassName={" max-w-[450px] pt-10 pb-6 px-8 text-center rounded-[12px]"} setIsOpen={setIsOpen}>
        {activeModal == "Modal One" && <div>Modal One</div>}
        {activeModal == "Modal Two" && <div>Modal Two</div>}
      </AppDialog>

      <UsageContainer title="#Modal Usage Styles">
        <div className="flex items-center gap-4">
          <Button onClick={modalOneHandler}>Open Modal 1</Button>
          <Button onClick={modalTwoHandler}>Open Modal 2</Button>
        </div>
      </UsageContainer>
    </div>
  );
};

export default AppDialogUsage;
