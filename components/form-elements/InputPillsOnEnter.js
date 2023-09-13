import React, { forwardRef, useRef, useState } from "react";
import InputField from "./InputField";
import { country_list } from "@/consts/CountryList";
import Chip from "../common/Chip";

const InputPillsOnEnter = forwardRef(function ({ onChange = (items) => {}, label = "Press Enter to Add Item", placeholder = "list", ...inputProps }, ref) {
  const [tags, setTags] = useState([]);
  const inputRef = useRef(null);

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  const handleDelete = (i) => {
    console.info("You clicked the delete icon.");
    const newTags = tags.filter((el, index) => index != i);
    setTags(newTags);
  };
  const onAddItem = (e) => {
    // console.log("key event is", inputRef.current.innerText, inputRef.current);
    console.log("Key vent is...", e.which);
    console.log("Key vent is...", e);
    // Use keycodes for mobile
    if (e.key == "Enter" || e.code == "Enter" || e.keyCode == 13 || e.which == 13) {
      let valIsEmpty = ref ? ref.current.value.trim() == "" : inputRef.current.value.trim() == "";

      if (valIsEmpty) {
        console.log("Empty value");
      } else {
        let val = ref ? ref.current.value.trim() : inputRef.current.value.trim();
        setTags([...tags, val]);
        onChange([...tags, val]);
      }
      ref ? (ref.current.value = null) : (inputRef.current.value = null);
    }

    // if ((e.key == "Backspace" || e.code == "Backspace" || e.keyCode == 8 || e.which == 8) && inputRef.current.value == "") {
    //   console.log("Backspace Reached", inputRef.current.value);
    //   console.log(tags);
    //   inputRef.current.value = tags[tags.length - 1] ?? "";
    //   inputRef.current.focus();
    //   setTags((val) => val.slice(0, -1));
    // }
  };
  return (
    <div>
      <InputField
        ref={ref || inputRef}
        label={label}
        onKeyDown={(e) => {
          onAddItem(e);
        }}
        // list="input_data_list"
        {...inputProps}
      ></InputField>
      {/* <datalist id="input_data_list">
        {country_list.map((el, ket) => {
          return (
            <option
              onClick={() => {
                console.log("option clickeds");
              }}
              key={ket}
              value={el}
            ></option>
          );
        })}
      </datalist> */}
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
      </div>
    </div>
  );
});

InputPillsOnEnter.displayName = "InputPillsOnEnter";
export default InputPillsOnEnter;
