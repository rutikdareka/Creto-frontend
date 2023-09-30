import React from "react";
import LeftSide from "../components/others_left_nav_section/LeftSide";
import Contact from "../components/message/components/Contact";
import Middlechat from "../components/message/components/Middlechat";
import Navbar from "../components/Navbar";
import "../styles/message/message_land.scss";
import "../styles/message/message.scss";
import CreatechatDrop from "../components/message/components/CreatechatDrop";

function Message() {
  return (
    <>
      <Navbar />
      <div className="wrapper_landing" id="change_back">
        <div className="message_sub_wrapper">
          <LeftSide />
          <div className="two_factor_msg">
            <Contact />
            <Middlechat />
          </div>
          <CreatechatDrop />
        </div>
      </div>
    </>
  );
}

export default Message;
