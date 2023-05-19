import React, { useEffect } from "react";

const LoginFaceBook = () => {
  useEffect(() => {
    console.log("fv en", process.env.FACEBOOK_APP_ID);
    window.fbAsyncInit = function () {
      FB.init({
        appId: 368694190641893,
        cookie: true,
        xfbml: true,
        version: "v12.0",
      });

      FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  function handleFBLogin() {
    FB.login(
      function (response) {
        if (response.authResponse) {
          console.log("Welcome!  Fetching your information.... ");
          FB.api("/me", function (response) {
            console.log("Good to see you, " + response.name + ".");
            console.log(response);
          });
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      },
      { scope: "public_profile,email" }
    );
  }

  return (
    <div>
      <button onClick={handleFBLogin}>Login with Facebook</button>
    </div>
  );
};

export default LoginFaceBook;
