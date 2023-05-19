import React, { useState } from "react";

const useToggleMobileNav = () => {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);
  return { isMobileNavOpened, setIsMobileNavOpened };
};

export default useToggleMobileNav;
