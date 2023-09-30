import React from "react";
import { Helmet } from "react-helmet";
import LeftSide from "../components/others_left_nav_section/LeftSide";
import RightSite from "../components/RightSite";
import ExploreComp from "../components/ExploreComp";
import Navbar from "../components/Navbar";

function Explore() {
  // if (!localStorage.getItem('token')) {
  //     window.location.replace('/validation/login')
  // }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Explore</title>
      </Helmet>
      <Navbar />
      <section className="setup_three">
        <LeftSide />
        <RightSite />
      </section>
    </>
  );
}

export default Explore;
