import GoBackHeader from "@/components/common/GoBackHeader";
import Button from "@/components/form-elements/Button";
import SideBarLayout from "@/components/layouts/SideBarLayout";
import AppContainer from "@/components/layouts/containers/AppContainer";
import ContainerShadow from "@/components/layouts/containers/ContainerShadow";
import DropDownTicketsActionsModal from "@/components/pages/support/DropDownTicketsActionsModal";
import TagsV2 from "@/components/tags/TagsV2";
import React from "react";

const SupportDetails = () => {
  return (
    <AppContainer>
      <GoBackHeader link="/support" className="" />
      <ContainerShadow className={" mt-12 !p-0"}>
        <div className=" border-b pb-12  !p-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className=" mb-4 flex items-center">
                <h1 className=" mr-6 font-bold text-xl leading-8">Case ID - 12426578359 </h1>
                {/* <StatusTag text={"Open"} bg={"#39BD78"} /> */}
                <TagsV2 type={"Open" == "Open" ? "SUCCESS" : "PENDING"}>{"Open"}</TagsV2>

                <div className=" ml-4">Front End</div>
              </div>
              <ul className="flex items-center space-x-5 list-disc text-[rgba(18,21,40,0.66)]">
                <li className=" first:list-none text-[#121528]">Account Terminated</li>
                <li className=" list-inside">Mar 1, 2023 23:14</li>
                <li className=" list-inside">Low Priority</li>
              </ul>
            </div>
            <div className="flex items-center gap-5">
              <Button>Close Ticket</Button>
              <DropDownTicketsActionsModal />
            </div>
          </div>
          <div className=" font-bold text-base mt-6">Chinmay30@gmail.com</div>
        </div>

        <section className=" mt-14 px-14">
          <h1 className=" font-bold text-3xl text-[#131313] mb-12">Correspondence</h1>
          {[1, 2, 3].map((el, i) => {
            return (
              <ContainerShadow key={i} className={"!bg-[#FDFDFD] !mb-6"}>
                <div className="flex items-center justify-between">
                  <div class="flex  space-x-4">
                    <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
                    <div class="font-medium dark:text-white">
                      <div className="flex items-center">
                        <div className=" text-color-secondary mr-3 text-sm font-medium">Support</div>
                      </div>
                      <div class=" text-2x text-color-primary dark:text-gray-400 max-w-[389px]">support@gmail.com</div>
                    </div>
                  </div>
                  <span>Sept. 9, 2022</span>
                </div>
                <p className=" mt-7 max-w-[652px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus viverra habitasse nibh habitasse facilisis nunc amet, urna. Vel lectus ipsum leo.</p>
              </ContainerShadow>
            );
          })}
        </section>
      </ContainerShadow>
    </AppContainer>
  );
};

export default SupportDetails;
SupportDetails.Layout = SideBarLayout;
