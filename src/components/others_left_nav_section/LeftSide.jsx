import React from "react";
import "../../styles/Reuseble/Leftsite.scss";
import { Link } from "react-router-dom";
import { navbars } from "./leftnavicon";
import SmallLeftSide from "./SmallLeftSide";
import BottomNavbars from "./BottomNavbars";

function LeftSide() {
  return (
    <>
      <div className="left_container">
        <div className="cover">
          <div className="navbars">
            <div className="btn_for_create_post">
              <button>Create Post</button>
            </div>
            <div className="sidebar">
              {navbars.map((items) => {
                return (
                  <Link to={items.render} className="big_leftbar">
                    <items.icon />
                    <span>{items.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <SmallLeftSide />
      <BottomNavbars />
    </>
  );
}

export default LeftSide;
