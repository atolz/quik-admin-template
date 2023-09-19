import Image from "next/image";
import { Inter } from "next/font/google";
import SideBarLayout from "@/components/layouts/SideBarLayout";
import AppContainer from "@/components/layouts/containers/AppContainer";
import StatCardV1 from "@/components/cards/StatCardV1";
import NairaSymbol from "@/components/common/NairaSymbol";
import { IconChartBar, IconTicket, IconUsersGroup, IconWallet } from "@tabler/icons-react";
import formatNumberWithCommas from "@/utils/addCommas";
import IconCircleContainer from "@/components/common/IconContainerCircle";

const inter = Inter({ subsets: ["latin"] });

// const contentValue = ({value}) => {
//   return (
//     <div className="flex items-center text-2xl ">
//       <IconCircleContainer className=" bg-[#2F80ED]/50 text-[#2F80ED] " />
//       <span className=" text-black">4000</span>
//     </div>
//   );
// };

export default function Home() {
  const stats = [
    {
      name: "Total Members",

      value: (
        <div className="flex items-center text-2xl ">
          <IconCircleContainer Icon={<IconUsersGroup size={16} />} className=" bg-[#2F80ED]/50 text-[#2F80ED] " />
          <span className=" text-black">4000</span>
        </div>
      ),
    },
    {
      name: "Crop Farmers",
      value: (
        <div className="flex items-center text-2xl ">
          <IconCircleContainer Icon={<IconChartBar size={16} />} className=" bg-[#2F80ED]/50 text-[#2F80ED] " />
          <span className=" text-black">4000</span>
        </div>
      ),
    },
    {
      name: "Livestock Farmers",
      value: (
        <div className="flex items-center text-2xl ">
          <IconCircleContainer Icon={<IconUsersGroup size={16} />} className=" bg-[#2F80ED]/50 text-[#2F80ED] " />
          <span className=" text-black">4000</span>
        </div>
      ),
    },
    {
      name: "Total Transaction",
      value: (
        <div className="flex items-center text-2xl ">
          <IconCircleContainer Icon={<IconWallet size={16} />} className=" bg-[#2F80ED]/50 text-[#2F80ED] " />
          <span className=" text-black">4000</span>
        </div>
      ),
    },
  ];
  const MembersStats = [
    {
      name: "Active Members",

      value: (
        <div className="flex items-center text-2xl ">
          <IconCircleContainer Icon={<IconUsersGroup size={16} />} className=" bg-[#2F80ED]/50 text-[#2F80ED] " />
          <span className=" text-black">40</span>
        </div>
      ),
    },
    {
      name: "Inactive Members",
      value: (
        <div className="flex items-center text-2xl ">
          <IconCircleContainer Icon={<IconChartBar size={16} />} className=" bg-[#2F80ED]/50 text-[#2F80ED] " />
          <span className=" text-black">5</span>
        </div>
      ),
    },
    {
      name: "Newly Joined",
      value: (
        <div className="flex items-center text-2xl ">
          <IconCircleContainer Icon={<IconUsersGroup size={16} />} className=" bg-[#2F80ED]/50 text-[#2F80ED] " />
          <span className=" text-black">50</span>
        </div>
      ),
    },
  ];
  const TxStats = [
    {
      name: "Total Transactions",

      value: (
        <div className="flex items-center text-2xl gap-4 ">
          <div className="flex items-center">
            <IconCircleContainer Icon={<IconWallet size={16} />} className=" bg-[#39BD78]/50 text-[#39BD78] " />
            <span className=" text-black">
              <NairaSymbol />
              {formatNumberWithCommas(40000)}
            </span>
          </div>
          <div className="flex items-center">
            <IconCircleContainer Icon={<IconWallet size={16} />} className=" bg-[#2F80ED]/50 text-[#2F80ED] " />
            <span className=" text-black">40</span>
          </div>
        </div>
      ),
    },
    {
      name: "Successful Transactions",
      value: (
        <div className="flex items-center text-2xl ">
          <IconCircleContainer Icon={<IconChartBar size={16} />} className=" bg-[#2F80ED]/50 text-[#2F80ED] " />
          <span className=" text-black">5</span>
        </div>
      ),
    },
    {
      name: "Failed Transactions",
      value: (
        <div className="flex items-center text-2xl ">
          <IconCircleContainer Icon={<IconUsersGroup size={16} />} className=" bg-[#2F80ED]/50 text-[#2F80ED] " />
          <span className=" text-black">50</span>
        </div>
      ),
    },
    {
      name: "Pending Transactions",
      value: (
        <div className="flex items-center text-2xl ">
          <IconCircleContainer Icon={<IconUsersGroup size={16} />} className=" bg-[#2F80ED]/50 text-[#2F80ED] " />
          <span className=" text-black">50</span>
        </div>
      ),
    },
  ];
  return (
    <AppContainer className=" space-y-8">
      <div className="">
        <h2 className=" text-black text-xl font-semibold mb-6">General Analytics</h2>
        <div className=" grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4 px-2">
          {stats.map((el, i) => {
            return <StatCardV1 title={el.name} content={el.value} key={i}></StatCardV1>;
          })}
        </div>
      </div>
      <div>
        <h2 className=" text-black text-xl font-semibold mb-6">Members</h2>
        <div className=" grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4 px-2">
          {MembersStats.map((el, i) => {
            return <StatCardV1 title={el.name} content={el.value} key={i}></StatCardV1>;
          })}
        </div>
      </div>
      <div>
        <h2 className=" text-black text-xl font-semibold mb-6">Transactions</h2>
        <div className=" grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4 px-2">
          {TxStats.map((el, i) => {
            return <StatCardV1 title={el.name} content={el.value} key={i}></StatCardV1>;
          })}
        </div>
      </div>
    </AppContainer>
  );
}

Home.Layout = SideBarLayout;
