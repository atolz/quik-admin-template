import React, { useEffect } from "react";

const GBTN = () => {
  const handleCallBackResponse = (resp) => {
    console.log("resp is::::::::", resp.credential, resp.access_token, resp);
  };

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: "83464368645-vvilifqiqngu7mds98e5lumhb8u0lk8e.apps.googleusercontent.com",
      callback: handleCallBackResponse,
      login_uri: "http://localhost/signin",
    });

    google.accounts.id.prompt((notification) => {
      if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
        // try next provider if OneTap is not displayed or skipped
        google.accounts.id.renderButton(document?.getElementById("g-btn"), { theme: "outline", size: "large", shape: "pill", logo_alignment: "center", text: "continue_with" });
      }
    });
  }, []);
  return <div className=" text-sm w-full h-12" id="g-btn" data-type="standard" data-shape="pill"></div>;
};

export default GBTN;
