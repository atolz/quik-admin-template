import React from "react";
import SideBarLayout from "@/components/layouts/SideBarLayout";
import GoBackHeader from "@/components/common/GoBackHeader";
import ContainerShadow from "@/components/layouts/containers/ContainerShadow";
import TagsV2 from "@/components/tags/TagsV2";
import ButtonError from "@/components/form-elements/ButtonError";
import Button from "@/components/form-elements/Button";
import AppContainer from "@/components/layouts/containers/AppContainer";

const NotificationDetails = () => {
  return (
    <AppContainer>
      <GoBackHeader link="/notification" />
      <ContainerShadow className={" mt-12 !p-0"}>
        <div className=" border-b pb-12  !p-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className=" mb-4 flex items-center">
                <h1 className=" mr-6 font-bold text-xl leading-8">New Feature </h1>
                {/* <StatusTag text={"Delivered"} bg={"#39BD78"} /> */}
                <TagsV2 type="SUCCESS">Delivered</TagsV2>
              </div>
              <ul className="flex items-center space-x-5 list-disc text-[rgba(18,21,40,0.66)]">
                <li className=" first:list-none text-[#121528]">Delivered</li>
                <li className=" list-inside">Mar 1, 2023 23:14</li>
                <li className=" list-inside">In-App Notification</li>
              </ul>
            </div>
            <div className="flex items-center gap-5">
              <ButtonError outlined={true}>Trash</ButtonError>
              <Button>Reuse</Button>
            </div>
          </div>
        </div>

        <section className=" mt-14 px-14 pb-10">
          <h1 className=" font-bold text-3xl text-[#131313] mb-12">New Feature Alert!</h1>
          <p className=" mt-7 max-w-[652px] text-[#868686]">
            Hi Bruno Johnson, we are glad to have you on board the Kudibar train.
            <br />
            \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi sit aenean ut arcu pellentesque. Consectetur cursus urna vulputate luctus. Gravida dolor condimentum luctus aliquam
            vitae lectus vitae. Amet, faucibus vel in sapien sed neque ornare tincidunt. Pellentesque ullamcorper nullam in leo, vel et egestas. Vitae sed nec et amet mattis sed lectus. Elementum
            justo, justo, viverra sodales.
          </p>
        </section>
      </ContainerShadow>
    </AppContainer>
  );
};

export default NotificationDetails;
NotificationDetails.Layout = SideBarLayout;
