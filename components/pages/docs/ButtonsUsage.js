import React from "react";
import UsageContainer from "./UsageContainer";
import Button from "@/components/form-elements/Button";
import ButtonWarn from "@/components/form-elements/ButtonWarn";
import ButtonError from "@/components/form-elements/ButtonError";

const ButtonsUsage = () => {
  return (
    <div>
      <UsageContainer title={"#Buttons"}>
        <div className=" space-y-5">
          <div className="flex items-center gap-4">
            <Button>Primary Button</Button>
            <Button outlined={true}>Primary Button Outlined</Button>
            <Button loading={true}>Primary Button Loading</Button>
            <Button loading={true} outlined={true}>
              Primary Button Outlined Loading
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <ButtonError>Error Button</ButtonError>
            <ButtonError className={" !rounded-lg"} outlined={true}>
              Error Button Outlined
            </ButtonError>
            <ButtonError loading={true}>Loading</ButtonError>
            <ButtonError loading={true} outlined={true}>
              Loading and Outlined
            </ButtonError>
            <ButtonError className={" !rounded-lg"}>Error Button With Overide className</ButtonError>
          </div>
          <div className="flex items-center gap-4">
            <ButtonWarn>Error Button</ButtonWarn>
            <ButtonWarn outlined={true}>Error Button Outlined</ButtonWarn>
            <ButtonWarn loading={true}>Loading</ButtonWarn>
            <ButtonWarn>
              <span className=" mr-2">Error Button</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
            </ButtonWarn>
          </div>
        </div>
      </UsageContainer>
    </div>
  );
};

export default ButtonsUsage;
