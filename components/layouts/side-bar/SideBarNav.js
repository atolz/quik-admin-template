import useToggleMobileNav from "@/hooks/useToggleMobileNav";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const SideBarNav = ({ setIsMobileNavOpened, isMobileNavOpened }) => {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState([]);

  const defaultNavs = [
    {
      name: "Page One",
      pageLink: `/`,
      navLink: "/",
      page: "admin",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
          />
        </svg>
      ),
    },
    {
      name: "Page Two",
      pageLink: `/page-two`,
      navLink: `/page-two`,
      page: "admin",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
      ),
    },
    {
      name: "Components Docs",
      pageLink: `/docs`,
      navLink: `/docs`,
      page: "admin",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
      ),
    },
  ];

  const isActive = (link) => {
    return router.pathname == link;
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
                <span title={nav.name} className={`ml-6  whitespace-nowrap text-ellipsis overflow-hidden text-base font-normal ${isActive(nav.navLink) ? " text-color-secondary" : " text-white"}`}>
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
