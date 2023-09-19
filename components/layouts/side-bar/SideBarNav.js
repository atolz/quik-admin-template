import useToggleMobileNav from "@/hooks/useToggleMobileNav";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  IconBell,
  IconBellFilled,
  IconDashboard,
  IconForms,
  IconHome,
  IconMedal,
  IconSettings,
  IconSettings2,
  IconSettingsFilled,
  IconTable,
  IconUserBolt,
  IconUsers,
  IconUsersGroup,
  IconWallet,
} from "@tabler/icons-react";

const SideBarNav = ({ setIsMobileNavOpened, isMobileNavOpened }) => {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState([]);

  const defaultNavs = [
    {
      name: "Dashboard",
      pageLink: `/`,
      navLink: "/",
      page: "admin",
      icon: <IconHome size={20} strokeWidth={2} />,
    },
    {
      name: "Members",
      pageLink: `/members`,
      navLink: "/members",
      page: "admin",
      icon: <IconUsers size={20} strokeWidth={2} />,
    },
    {
      name: "Transactions",
      pageLink: `/transactions`,
      navLink: "/transactions",
      page: "admin",
      icon: <IconWallet size={20} strokeWidth={2} />,
    },
    {
      name: "Notification Management",
      pageLink: `/notification`,
      navLink: "/notification",
      page: "admin",
      icon: <IconBell size={20} strokeWidth={2} />,
    },
    {
      name: "Support",
      pageLink: `/support`,
      navLink: "/support",
      page: "admin",
      icon: <IconUsersGroup type="Filled" size={20} strokeWidth={2} />,
    },
    {
      name: "Settings",
      pageLink: `/settings`,
      navLink: "/settings",
      page: "admin",
      icon: <IconSettings size={24} strokeWidth={2} />,
    },
  ];

  const isActive = (link) => {
    console.log(router?.pathname, router?.pathname?.split("/"), link);
    // return router.pathname == link;
    return router?.pathname?.split("/")[1] == link?.slice(1);
  };

  useEffect(() => {
    let activeSection = router?.pathname.split("/")[1];
    console.log(router?.pathname);
    console.log("active sections is", activeSection);
    if (activeSection == "first section") {
      setActiveNav(adminNav);
    } else {
      setActiveNav(defaultNavs);
    }
  }, [router]);
  return (
    <ul>
      {activeNav?.map((nav, i) => {
        return (
          <Link key={i} href={nav.pageLink}>
            <li
              onClick={() => {
                setIsMobileNavOpened(false);
              }}
              className={` mb-4 px-5 py-3 flex items-center cursor-pointer rounded-xl ${isActive(nav.navLink) ? " bg-[rgba(129,207,3,0.6)]" : " border-l-2 border-transparent"} `}
            >
              <span className={`flex items-center  ${isActive(nav.navLink) ? " text-white" : " text-white"}`}>
                <div className=" w-6 h-6">{nav?.icon}</div>
                <span title={nav.name} className={`ml-3 line-clamp-1  text-base font-light ${isActive(nav.navLink) ? " text-white !font-medium" : " text-white"}`}>
                  {nav.name}
                </span>
              </span>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default SideBarNav;
