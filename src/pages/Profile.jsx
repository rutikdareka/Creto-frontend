import React, { useState, useEffect } from "react";
import ProfileInformation from "../components/Profile/ProfileInformation";
import ProfileuserPost from "../components/Profile/ProfileuserPost";
import Navbar from "../components/Navbar";
import LeftSide from "../components/others_left_nav_section/LeftSide";
import RightSite from "../components/RightSite";
import useGoogleOneTapLogin from "../hook/useOneTap";
import axios from "axios";

function Profile() {
  return (
    <>
      <Navbar />
      <section className="setup_three">
        <LeftSide />
        <ProfileInformation />
        <RightSite />
      </section>
    </>
  );
}

export default Profile;
