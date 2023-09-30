import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import LeftSide from "../components/others_left_nav_section/LeftSide";
import MiddelSite from "../components/MiddelSite";
import RightSite from "../components/RightSite";
import "../styles/Home.scss";
import { Helmet } from "react-helmet";
import Context from "../context/cretoContext";

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home/c</title>
      </Helmet>
      <Navbar />
      <section className="setup_three">
        <LeftSide />
        <MiddelSite />
        <RightSite />
      </section>
    </>
  );
}

export default Home;
