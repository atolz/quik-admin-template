import React from "react";

const Search = ({ reference, onChange, className }) => {
  return (
    <input
      style={{
        backgroundPosition: "right .5rem center",
        backgroundSize: "1.5em 1.5em",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M14.5403 18.8028C18.6351 17.0625 20.5438 12.3324 18.8036 8.2376C17.0633 4.14284 12.3332 2.23412 8.2384 3.97435C4.14364 5.71458 2.23492 10.4448 3.97515 14.5395C5.71538 18.6343 10.4456 20.543 14.5403 18.8028Z' stroke='%235C5589' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M17.0853 17.0844L23.3333 23.3333' stroke='%235C5589' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
      }}
      ref={reference}
      onChange={onChange}
      placeholder="Search"
      className={` h-10 px-3 py-2 text-sm text-color_text_default placeholder:text-[#97A0AF] rounded bg-white border-[#DFE1E6] border focus:shadow-none focus:ring-0 focus:border-color_primary focus:outline-none ${className}`}
    ></input>
  );
};

export default Search;
