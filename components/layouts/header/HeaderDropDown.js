import Link from "next/link";
import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { usePopper } from "react-popper";

{
  /* <!-- Dropdown menu --> */
}
const HeaderDropDown = ({ children }) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "arrow", options: { element: arrowElement } }],
  });
  return (
    <Menu className={`flex flex-col relative`} as="div">
      <Menu.Button ref={setReferenceElement} as="button">
        {children}
      </Menu.Button>
      {/* <div id="dropdownAvatarName" class="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-80 dark:bg-gray-700 dark:divide-gray-600"> */}
      {/* <div class="flex items-center space-x-4 p-9">
          <div class="flex-shrink-0">
            <img class="w-8 h-8 rounded-full" src="/avatar.jpg" alt="Neil image" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Neil Sims</p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@windster.com</p>
          </div>
        </div> */}
      <Transition enter="transition duration-100 ease-out" enterFrom=" opacity-0" enterTo=" opacity-100" leave="transition duration-75 ease-out" leaveFrom="  opacity-100" leaveTo=" opacity-0">
        <Menu.Items
          // ref={setPopperElement}
          // style={{ ...styles.popper }}
          // {...attributes.popper}
          as="ul"
          aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
          className={`z-10  bg-white absolute top-12 divide-y divide-gray-100 rounded-lg overflow-hidden shadow w-80 dark:bg-gray-700 dark:divide-gray-600 right-0 focus:outline-none`}
        >
          <Menu.Item as="div" disabled>
            {({ active }) => (
              <div class={`flex items-center space-x-4 p-9 ${active ? " bg-gray-100 dark:bg-gray-600 dark:text-white" : ""}`}>
                <div class="flex-shrink-0">
                  <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="Neil image" />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">Neil Sims</p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">email@windster.com</p>
                </div>
              </div>
            )}
          </Menu.Item>
          <div>
            <Menu.Item>
              {({ active }) => (
                <Link href="/profile" class={`block px-4 py-2 ${active ? " bg-gray-100 dark:bg-gray-600 dark:text-white" : ""} `}>
                  Profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/profile" class={`block px-4 py-2 ${active ? " bg-gray-100 dark:bg-gray-600 dark:text-white" : ""} `}>
                  Profile
                </Link>
              )}
            </Menu.Item>
          </div>
          <Menu.Item>
            {({ active }) => (
              <Link href="/profile" class={`block px-4 py-2 ${active ? " bg-gray-100 dark:bg-gray-600 dark:text-white" : ""} `}>
                Sign Out
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
      {/* </div> */}
    </Menu>
  );
};

export default HeaderDropDown;
