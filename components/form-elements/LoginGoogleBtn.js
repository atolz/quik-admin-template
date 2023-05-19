import { useEffect } from "react";
import SignupWIthButton from "./SignupWIthButton";
import apiRequest from "@/utils/apiRequest";
import Loading from "../common/Loading/Loading";

export default function GoogleLoginBtn({ onSuccess = () => {}, loading }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js";
    script.onload = () => {
      gapi.load("auth2", () => {
        gapi.auth2.init({
          client_id: "1090997225320-513n0ochs1ojmi5fjvock1e4b152v45s.apps.googleusercontent.com",
        });
      });
    };
    document.body.appendChild(script);
  }, []);

  async function handleSignIn() {
    console.log("butn clikd");
    try {
      let googleUser = await gapi.auth2.getAuthInstance().signOut();
      console.log("google user", googleUser.getAuthResponse(true)?.access_token);
      // let accT = await gapi.auth2.AuthResponse();
      // let accT = await gapi.auth2.getAuthInstance()?.access_token;
      // console.log("autb resp", accT);
      // console.log("access toke is", googleUser.getAuthResponse(true)?.access_token, googleUser.getAuthResponse().id_token, googleUser.getBasicProfile().getId());
      onSuccess(googleUser.getAuthResponse(true)?.access_token);
    } catch (error) {}

    // .then((googleUser) => {
    //   const idToken = googleUser.getAuthResponse().id_token;

    //   // Send the idToken to your server-side for authentication
    // });
  }

  return (
    <SignupWIthButton loading={loading} onClick={handleSignIn} type="Google" img={"/images/logo-google.png"}>
      Continue With Google
    </SignupWIthButton>
  );
}
