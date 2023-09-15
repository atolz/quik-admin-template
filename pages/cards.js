import UsageContainer from "@/components/pages/docs/UsageContainer";
import { IconTicket, IconUsersGroup } from "@tabler/icons-react";
import React from "react";
import StatCardV1 from "../components/cards/StatCardV1";
import formatNumberWithCommas from "@/utils/addCommas";
import NairaSymbol from "@/components/common/NairaSymbol";
import SideBarLayout from "@/components/layouts/SideBarLayout";
import TagsV1 from "@/components/tags/TagsV1";
import TagsV2 from "@/components/tags/TagsV2";

const Cards = () => {
  const stats = [
    {
      name: "Total Tickets",
      value: <span className="text-[#2F80ED] text-2xl"> {5000}</span>,
    },
    {
      name: "Total Amount",
      value: (
        <span className="text-[#F2994A] text-2xl">
          <NairaSymbol />
          {formatNumberWithCommas(10000)}
        </span>
      ),
    },
    {
      name: "Total Sales",
      value: (
        <span className=" text-2xl flex items-center">
          <IconTicket size={24} className=" mr-2 text-[#F2994A]" /> {formatNumberWithCommas(40000)}
        </span>
      ),
    },
    {
      name: "Total People",
      value: (
        <span className="text-[#9B51E0] text-2xl flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {0}
        </span>
      ),
    },
    {
      name: "Total Tags",
      value: (
        <span className="text-[#2F80ED] text-2xl flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
          </svg>
          {0}
        </span>
      ),
    },
    {
      name: "Total Likes",
      value: (
        <span className=" text-2xl flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5  mr-2 text-[#2F80ED]">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
            />
          </svg>
          {0}
        </span>
      ),
    },
    {
      name: "Total Views",
      value: (
        <div className="flex items-center text-2xl text-[#2F80ED]">
          <div className=" w-8 h-8 rounded-full bg-[#2f81ed83]  flex items-center justify-center mr-4">
            <IconUsersGroup size={16} />
          </div>
          <span>4000</span>
        </div>
        // <span className="text-[#2F80ED] text-2xl flex items-center">
        //   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
        //     <path
        //       strokeLinecap="round"
        //       strokeLinejoin="round"
        //       d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        //     />
        //     <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        //   </svg>
        //   {0}
        // </span>
      ),
    },
  ];
  return (
    <div>
      <UsageContainer title={"Cards V1"}>
        <div className=" grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
          {stats.map((el, i) => {
            return <StatCardV1 title={el.name} content={el.value} key={i}></StatCardV1>;
          })}
        </div>
      </UsageContainer>
      <UsageContainer title={"Tags V1"}>
        <div className="flex flex-wrap gap-4">
          <TagsV1>Active</TagsV1>
          <TagsV1 type="PENDING">Pending</TagsV1>
        </div>
      </UsageContainer>
      <UsageContainer title={"Tags V2"}>
        <div className="flex flex-wrap gap-4">
          <TagsV2>Active</TagsV2>
          <TagsV2 type="PENDING">Pending</TagsV2>
        </div>
      </UsageContainer>
    </div>
  );
};

export default Cards;
Cards.Layout = SideBarLayout;
