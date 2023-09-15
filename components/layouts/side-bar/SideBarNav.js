import useToggleMobileNav from "@/hooks/useToggleMobileNav";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IconForms, IconMedal, IconTable } from "@tabler/icons-react";

const SideBarNav = ({ setIsMobileNavOpened, isMobileNavOpened }) => {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState([]);

  const defaultNavs = [
    {
      name: "Page One - Extra long name for test",
      pageLink: `/`,
      navLink: "/",
      page: "admin",
      icon: <IconMedal size={24} strokeWidth={2} />,
    },
    {
      name: "Dialog/Modal",
      pageLink: `/dialog`,
      navLink: `/dialog`,
      page: "admin",
      icon: <IconMedal size={24} strokeWidth={2} />,
    },
    {
      name: "Page With Details Page",
      pageLink: `/page-with-details-page`,
      navLink: `/page-with-details-page`,
      page: "admin",
      icon: <IconMedal size={24} strokeWidth={2} />,
    },

    {
      name: "Form Elements",
      pageLink: `/form-elements`,
      navLink: `/form-elements`,
      page: "admin",
      icon: <IconMedal size={24} strokeWidth={2} />,
    },
    {
      name: "Cards",
      pageLink: `/cards`,
      navLink: `/cards`,
      page: "admin",
      icon: <IconMedal size={24} strokeWidth={2} />,
    },
    {
      name: "Tables",
      pageLink: `/tables`,
      navLink: `/tables`,
      page: "admin",
      icon: <IconMedal size={24} strokeWidth={2} />,
    },
    {
      name: "Components Docs",
      pageLink: `/docs`,
      navLink: `/docs`,
      page: "admin",
      icon: <IconMedal size={24} strokeWidth={2} />,
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
              className={` h-8 mb-6 px-7 flex items-center cursor-pointer ${isActive(nav.navLink) ? " border-l-2 border-color-secondary" : " border-l-2 border-transparent"} `}
            >
              <span className={`flex items-center  ${isActive(nav.navLink) ? " text-color-secondary" : " text-white"}`}>
                {nav?.icon}
                <span title={nav.name} className={`ml-6 line-clamp-1  text-base font-normal ${isActive(nav.navLink) ? " text-color-secondary" : " text-white"}`}>
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
