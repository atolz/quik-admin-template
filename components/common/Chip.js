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

export default Chip;
