import React from "react";
import MobileBurgerMenu from "../MobileBurgerMenu";
import AppLogo from "../AppLogo";
import HeaderDropDown from "./HeaderDropDown";
import DropDown from "@/components/drop-down/DropDown";

const Header = ({ setIsMobileNavOpened, isMobileNavOpened }) => {
  return (
    <header className=" h-16 flex  justify-between bg-white px-3 md:px-11 shadow-sm">
      <AppLogo className={"md:hidden"}>Side Text</AppLogo>

      <div className="ml-auto hidden md:flex">
        <div className="border-color-border border-r pr-4 items-center ml-auto flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </div>
        <div className="flex items-center pl-5">
          <HeaderDropDown items={["first", "second"]}>
            <div
              class="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
              // type="button"
            >
              <span class="sr-only">Open user menu</span>
              <img class="w-10 h-10 p-1 rounded-full ring-2 mr-2 ring-gray-300 dark:ring-gray-500" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="Bordered avatar" />
              Bonnie Green
              <svg class="w-4 h-4 mx-1.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </div>
          </HeaderDropDown>
        </div>
      </div>

      {/* Burger Menu. Only visible on mobile. md:hidden */}
      <MobileBurgerMenu
        onClick={() => {
          setIsMobileNavOpened((val) => !val);
        }}
      />
    </header>
  );
};

export default Header;
