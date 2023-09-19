const IconCircleContainer = ({ Icon, className = "bg-[2F80ED]/2 text-[2F80ED]" }) => {
  return <div className={`w-8 h-8 rounded-full   flex items-center justify-center mr-3 ${className}`}>{Icon}</div>;
};

export default IconCircleContainer;
