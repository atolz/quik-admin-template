import React from "react";

const Tab = ({
  items = [
    {
      name: "First Tab",
      icon: (
        <svg aria-hidden="true" class="w-5 h-5 mr-2 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clip-rule="evenodd"
          ></path>
        </svg>
      ),
    },
    { name: "Second Tab", icon: <span>icon</span> },
  ],
  onChange = (index) => {},
  className,
  active,
  setActive = () => {},
}) => {
  return (
    <div class={`border-b border-gray-200 dark:border-gray-700 w-full overflow-scroll scroll_hide ${className}`}>
      <ul class="flex overflow-scroll scroll_hide w-full -mb-px text-sm font-medium text-center text-[#BDBDBD] dark:text-gray-400">
        {items.map((el, i) => {
          return (
            <li key={i} class="mr-4">
              <span
                tabIndex={0}
                onClick={() => {
                  setActive(i);
                  onChange(i);
                }}
                class={` whitespace-nowrap inline-flex py-3 px-2 cursor-pointer group ${
                  active == i
                    ? "text-color-primary border-b-2 border-color-primary font-bold rounded-t-lg dark:text-green-500 dark:border-green-500 "
                    : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 font-normal hover:border-gray-300 dark:hover:text-gray-300"
                } `}
              >
                {el?.icon && <div className="mr-2">{el?.icon}</div>}
                {el?.name}
              </span>
            </li>
          );
        })}

        {/* <li class="mr-2">
          <a href="#" class="inline-flex p-4 group" aria-current="page">
            <svg aria-hidden="true" class="w-5 h-5 mr-2 text-green-600 dark:text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
            </svg>
            Dashboard
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default Tab;
