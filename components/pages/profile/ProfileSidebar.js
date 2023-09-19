import IconCircleContainer from "@/components/common/IconContainerCircle";
import ContainerShadow from "@/components/layouts/containers/ContainerShadow";
import { IconLocation, IconMessage, IconPhone, IconPhoneFilled } from "@tabler/icons-react";
import React from "react";

const DetailRow = ({ icon, text, bgColor, color }) => {
  return (
    <div className="flex items-center text-color_text_default font-medium">
      <IconCircleContainer className="text-[#858484] bg-[#F2F2F2] " Icon={icon} />

      {text}
    </div>
  );
};

const ProfileSidebar = () => {
  return (
    <ContainerShadow className="  w-max shadow px-11 py-20 grid  min-w-[360px] rounded-md">
      <div className=" mb-5 border-b pb-5 flex flex-col items-center">
        <img class=" w-40 h-40 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Neil image" />
        <h1 className=" text-3xl text-green-700 font-semibold mt-3 ">Ezinne Ezeme</h1>
      </div>

      <div className=" mt-4 grid justify-center">
        <div className=" mb-6 border-b pb-6">
          <h3 className=" text-color_text_default text-sm font-semibold mb-6">About</h3>
          <div className=" grid gap-6">
            <DetailRow icon={<IconMessage />} text={"Message"} />
            <DetailRow icon={<IconPhone />} text={"+234 802 934 456"} />
            <DetailRow icon={<IconLocation />} text={"17, Nike Road, Lagos State"} />
          </div>
        </div>
        {/* Work */}
        {/* <div>
          <h3 className=" text-color_text_default text-sm font-semibold mb-6">Work</h3>
          <div className=" grid gap-6">
            <DetailRow icon={<IconMessage />} text={"UI/UX Designer"} />
            <DetailRow icon={<IconMessage />} text={"I.T Department"} />
          </div>
        </div> */}
      </div>
    </ContainerShadow>
  );
};

export default ProfileSidebar;
