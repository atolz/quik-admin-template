import React, { useEffect, useRef, useState } from "react";
import { Menu } from "@headlessui/react";
import { usePopper } from "react-popper";

const DropDown = ({ items = ["Item 1", "Item 2", "Item 3"], onChange = () => {}, className, children, menuItemsClassName, itemClassName }) => {
  const triggerRef = useRef(null);
  const dropDownRef = useRef(null);
  const [btnHeight, setBtnHeight] = useState("30px");

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "arrow", options: { element: arrowElement } }],
  });

  useEffect(() => {
    console.log("ref is", triggerRef, dropDownRef.current);
    // console.log("height is", triggerRef?.current?.clientHeight);
    // setBtnHeight(triggerRef.current.clientHeight);
  }, []);

  return (
    <Menu className={` flex flex-col relative  ${className}`} as="div">
      <Menu.Button ref={setReferenceElement} as="button">
        {children}
      </Menu.Button>

      <Menu.Items
        ref={setPopperElement}
        style={{ ...styles.popper, ...{ "box-shadow": " 0px 8px 8px rgba(6, 42, 84, 0.04)" } }}
        {...attributes.popper}
        as="div"
        className={` outline-none bg-white rounded-lg p-4 !fixed z-[1000] text-sm text-color-primary font-normal ${menuItemsClassName}`}
      >
        <div ref={setArrowElement} style={styles.arrow} />
        {items.map((el, i) => {
          return (
            <Menu.Item key={i} className="flex items-center rounded">
              {({ active }) => (
                <button onClick={() => onChange(i)} className={`text-left whitespace-nowrap ${active && "bg-[#F6FBFD]"} px-3 py-2 ${itemClassName}`}>
                  {el}
                </button>
              )}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default DropDown;
