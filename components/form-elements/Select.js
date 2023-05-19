import React from "react";

const Select = ({ placeholder = "Placeholder", onChange = () => {}, items = ["Option 1", "Option 2"], label = "", inputClassName, rootClassName, labelClassName, ...props }) => {
  return (
    <div className={` flex flex-col ${rootClassName}`}>
      {label && (
        <label className=" text-color_text_default font-semibold text-base mb-2 block" for={props.name}>
          {label}
        </label>
      )}
      <select
        style={{
          backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
          backgroundPosition: "right .5rem center",
          backgroundSize: "1.5em 1.5em",
          appearance: "none",
          backgroundRepeat: "no-repeat",
        }}
        onChange={onChange}
        className={` 
         focus:ring-0
         h-12 w-full px-3 py-2 text-sm text-color_text_default placeholder:text-[#97A0AF] rounded-lg bg-[#F0F3F5] border-[#BDBDBD] border focus:!border-color-primary focus:outline-none ${inputClassName}`}
        // name="cars"
        // id="cars"
        {...props}
      >
        <option value="" disabled selected>
          {placeholder}
        </option>
        {items.map((el, i) => {
          return (
            <option key={i} className="cu cursor-pointer" value={el}>
              {el}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
