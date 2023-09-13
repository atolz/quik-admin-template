const Radio = ({ id = "inline-radio", name = "inline-radio-group", children, ...props }) => {
  return (
    <div class="flex items-center mr-4">
      <input
        id={id}
        type="radio"
        value={id}
        name={name}
        {...props}
        class="w-4 h-4 text-color-secondary bg-gray-100 border-gray-300 focus:ring-color-secondary dark:focus:ring-green-600
    dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label for={id} class="ml-2 text-sm font-medium text-color-primary dark:text-gray-300">
        {children}
      </label>
    </div>
  );
};

export default Radio;
