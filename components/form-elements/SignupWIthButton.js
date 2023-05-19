import React from "react";
import Loading from "../common/Loading/Loading";

const SignupWIthButton = ({ type, img, children, ...props }) => {
  return (
    <button
      {...props}
      className=" border-border border border-solid rounded-full h-12 px-7 w-full flex items-center justify-center from-inherit font-medium bg-transparent outline-inherit cursor-pointer"
    >
      {props?.loading ? (
        <Loading />
      ) : (
        <>
          <img className=" mr-[.9rem] " src={img}></img> {children}
        </>
      )}
    </button>
  );
};

export default SignupWIthButton;
