import GoBackHeader from "@/components/common/GoBackHeader";
import PillOnSelectV2 from "@/components/form-elements-v2/PillOnSelect-v2";
import Button from "@/components/form-elements/Button";
import CheckBox from "@/components/form-elements/CheckBox";
import InputField from "@/components/form-elements/InputField";
import InputPillsOnEnter from "@/components/form-elements/InputPillsOnEnter";
import Radio from "@/components/form-elements/Radio";
import SideBarLayout from "@/components/layouts/SideBarLayout";
import AppContainer from "@/components/layouts/containers/AppContainer";
import ContainerShadow from "@/components/layouts/containers/ContainerShadow";
import { IconSettings } from "@tabler/icons-react";
import React from "react";

const P = ({ children }) => {
  return <p className=" mb-6 text-[#2D2D35]/60 font-medium text-base">{children}</p>;
};

const CreateNotification = () => {
  return (
    <AppContainer>
      <GoBackHeader className={"mb-6"} link="/notification" />

      <hr />

      <div className="flex">
        <div className=" p-6 pr-16 border-r w-[40%]">
          <h2 className=" text-[#2D2D35] font-semibold text-xl mb-4 flex items-center gap-4">
            <IconSettings /> Settings
          </h2>
          <section className=" mb-6">
            <P>Which type of email would you like to send </P>
            <ContainerShadow className={"mb-6 border max-w-[363px]"}>
              <CheckBox
                value={"one-time"}
                onChange={() => {}}
                // checked={permission?.active}
                className={" !items-start"}
                id={"one-time"}
              >
                <div className=" cursor-pointer ml-1">
                  <span className=" text-lg leading-4 font-regular text-[#023E4F]">One Time Message</span>
                  <p className="mt-3 text-[#979797] text-sm">Send a one-time email to your contacts. Send the email right away or schedule for later.</p>
                </div>
              </CheckBox>
            </ContainerShadow>
            <ContainerShadow className={" border max-w-[363px]"}>
              <CheckBox
                value={"one-time"}
                onChange={() => {}}
                // checked={permission?.active}
                className={" !items-start"}
                id={"one-time"}
              >
                <div className=" cursor-pointer ml-1">
                  <span className=" text-lg leading-4 font-regular text-[#023E4F]">Automated</span>
                  <p className="mt-3 text-[#979797] text-sm">Automatically send an email after an event like registration.</p>
                </div>
              </CheckBox>
            </ContainerShadow>
          </section>
          <section>
            <P>Send Message To </P>
            <div className="flex flex-wrap mb-6">
              <Radio>All Users</Radio>
              <Radio>She Famers Users</Radio>
              <Radio>Custom </Radio>
            </div>

            {/* <PillOnSelectV2 placeholder={"Select user"} items={["JR", "Barney"]} /> */}
            <InputPillsOnEnter label="Press Enter to Add User" />
          </section>
        </div>
        <div className=" p-6 pl-16 max-w-[499px]  flex-1">
          <h2 className=" text-[#2D2D35] font-bold text-2xl mb-8">Compose Notification</h2>

          <P>Notification type </P>
          <div className="flex flex-wrap gap-4 mb-8 w-full">
            <Radio>In App</Radio>
            <Radio>Push</Radio>
            <Radio>Bulk </Radio>
          </div>
          <div>
            <InputField rootClassName="w-full" label="Title" />
            <Button className=" mt-6">Send</Button>
          </div>
        </div>
      </div>
    </AppContainer>
  );
};

export default CreateNotification;
CreateNotification.Layout = SideBarLayout;
