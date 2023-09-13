import React, { useRef } from "react";
import { useState } from "react";
import Select from "./Select.js";

const PillOnSelectV2 = ({ status, onChange = () => {}, placeholder, label = "Hello World", items = [1, 2, 3, 4, 5], className }) => {
  const [tags, setTags] = useState([]);
  const [activeText, setActiveText] = useState("  ");
  const inputRef = useRef(null);

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  const handleDelete = (i) => {
    console.info("You clicked the delete icon.");
    const newTags = tags.filter((el, index) => index != i);
    setTags(newTags);
  };
  const onAddItem = (val) => {
    if (val == "") {
    } else {
      setTags([...tags, val]);
      onChange([...tags, val]);
    }
    // inputRef.current.value = "";
  };
  return (
    <div className={`${className}`}>
      {/* <label className="caption_heavy text-black-default flex mb-[8px]">{label}</label>
      <select
        ref={inputRef}
        onChange={(e) => {
          onAddItem(e);
        }}
        className={` flex h-[48px] mb-[10px] max-w-[375px] min-w-[200px] w-full text-black-default body_light focus:border-primary focus:outline-0 ${
          status == "warn" ? `border-warn-default opacity-50` : "border-gray-light"
        } ${status == "error" ? "border-error-default " : "border-gray-light"} border rounded-[16px] px-[8px] py-[14px]`}
      >
        {items.map((el, i) => {
          return <option key={i}>{el}</option>;
        })}
      </select> */}
      <Select
        placeholder={placeholder}
        value=""
        label={label}
        items={items}
        onChange={(e) => {
          onAddItem(e.target.value);
        }}
      />
      <div className="mt-[14px] flex gap-[1.2rem] max-w-[600px] flex-wrap">
        {tags.map((e, i) => {
          return (
            <Chip
              action={() => {
                handleDelete(i);
              }}
              key={i}
              text={e}
            />
          );
        })}

        {/* <Chip text="love" />
        <Chip text="love" />
        <Chip text="love" />
        <Chip text="love" /> */}
      </div>
    </div>
  );
};

export default PillOnSelectV2;

const Chip = ({ action, text }) => {
  return (
    <div className="h-9  rounded-[24px] border border-color-primary bg-[#F0FBFF] flex items-center justify-between px-[16px] py-[8px]  ">
      <span className="mr-[1.4rem] text-color-primary">{text}</span>{" "}
      <span
        onClick={() => {
          action();
        }}
        className=" cursor-pointer"
      >
        🗙
      </span>
    </div>
  );
};
