import React from "react";

const CheckBox = ({ id = "default-checkbox", className, children, ...props }) => {
  return (
    <div class={`flex items-center ${className}`}>
      <input
        id={id}
        type="checkbox"
        value=""
        class="w-4 h-4 text-[#27AE60] bg-gray-100 border-gray-300 rounded focus:ring-[#27AE60] dark:focus:ring-[#27AE60] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        {...props}
      />
      <label for={id} class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {children}
      </label>
    </div>
  );
};

export default CheckBox;
