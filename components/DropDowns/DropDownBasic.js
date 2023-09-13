import React, { useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePopper } from "react-popper";

const DropDownBasic = ({ items = [{ name: "First Item", action: () => {} }], children }) => {
  const router = useRouter();
  let customBoundary;

  // ---------------- popper stuff ----------------
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "top-end",
    modifiers: [
      { name: "arrow", options: { element: arrowElement } },
      {
        name: "offset",
        options: {
          offset: [0, -6],
        },
      },
      {
        name: "preventOverflow",
        options: {
          boundary: customBoundary, // 'clippingParents' by default
        },
      },
    ],
  });

  useEffect(() => {
    customBoundary = document.querySelector("#boundary");
  }, []);
  // ---------------- popper stuff ----------------

  return (
    <Menu as={"div"} className={" relative"}>
      <Menu.Button className={" border-transparent  border-2 focus:!border-slate-800 rounded-md"} ref={setReferenceElement}>
        {children}
      </Menu.Button>
      <Menu.Items
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
        className={" bg-white border border-gray-200 rounded-md shadow-md w-40 absolute right-0 top-0 z-50 focus:outline-none overflow-hidden"}
      >
        {items?.map((el, i) => {
          return (
            <Menu.Item key={i}>
              {({ active }) => (
                <div className=" w-full" onClick={el?.action ? el?.action : () => {}}>
                  <Link href={el?.link ? el?.link : router?.asPath} className={`${active && " !bg-gray-100 "} block w-full px-4 py-2 hover:bg-gray-50 cursor-pointer`}>
                    {el?.title}
                  </Link>
                </div>
              )}
            </Menu.Item>
          );
        })}
        <div ref={setArrowElement} style={styles.arrow} />
      </Menu.Items>
    </Menu>
  );
};

export default DropDownBasic;
