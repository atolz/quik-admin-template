import GoBackHeader from "@/components/common/GoBackHeader";
import NameValue from "@/components/common/NameValue";
import SideBarLayout from "@/components/layouts/SideBarLayout";
import AppContainer from "@/components/layouts/containers/AppContainer";
import ContainerShadow from "@/components/layouts/containers/ContainerShadow";
import DropDownUserActionsModal from "@/components/pages/members/DropDownUserActionsModal";
import ProfileSidebar from "@/components/pages/profile/ProfileSidebar";
import React from "react";

const MembersDetails = () => {
  const details = {
    "Business Name type": "Live Stock",
    "Total Available Land Area": "Live Stock",
    "Farm Type": "Live Stock",
    Location: "Nigeria",
    "Land area Cultivated": "2 km",
    LGA: "Oyun",
    State: "Kwara",
  };
  return (
    <AppContainer>
      <GoBackHeader link="/members">
        <DropDownUserActionsModal />
      </GoBackHeader>

      <div className="flex gap-6">
        <ProfileSidebar />
        <div className=" space-y-6 flex-1">
          <ContainerShadow>
            <h2 className=" text-lg font-semibold mb-3">Farm Address</h2>
            <p className=" text-[#9BA5B7] font-medium">House 298, S.O Benson Avenue 21, Ikeja Ipaja, Lagos Island, Lagos state</p>
          </ContainerShadow>
          <ContainerShadow>
            <h2 className=" text-lg font-semibold mb-3">Farm Details</h2>
            <hr></hr>

            <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] border-b py-11 gap-8">
              {Object.entries(details).map(([key, value]) => {
                return <NameValue key={key} name={key} value={value} />;
              })}
            </div>
          </ContainerShadow>
        </div>
      </div>
    </AppContainer>
  );
};

export default MembersDetails;
MembersDetails.Layout = SideBarLayout;
