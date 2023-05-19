import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const AppLogo = ({ sideText, link, imgUrl, imageClassName, className, children }) => {
  const router = useRouter();
  return (
    <Link href={link || router.pathname} className={`flex items-center w-max space-x-3 ${className}`}>
      <div className="">
        {imgUrl ? <img height={40} src={imgUrl} className={`${imageClassName}`} /> : null}
        {!imgUrl ? <div className=" h-11 w-11 rounded-lg bg-color-primary flex justify-center items-center ">Y</div> : null}
      </div>
      {sideText ? <h1>{sideText}</h1> : null}
      {children ? <div>{children}</div> : null}
    </Link>
  );
};

export default AppLogo;
