import React from "react";
import "../../styles/small/googlelogin.scss";
import google from "../../assets/Google.svg";
import { useState } from "react";
import Loader from "../Loader";

function Googlelogin({ func }) {
  return (
    <div
      className="google_login_container"
      onClick={() => {
        func();
      }}
    >
      <div className="google_login_subcontainer">
        <img alt="google_auth_login" src={google} />
        <span>Continue with Google</span>
      </div>
    </div>
  );
}

export default Googlelogin;
