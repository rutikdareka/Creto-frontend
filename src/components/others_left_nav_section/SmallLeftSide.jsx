import React from "react";
import "../../styles/Reuseble/Leftsite.scss";
import { Link } from "react-router-dom";
import { navbars } from "./leftnavicon";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const SmallLeftSide = () => {
  return (
    <>
      <div className="left_container small">
        <div className="cover">
          <div className="navbars">
            <div className="btn_for_create_post">
              <span className="small_btn">
                <AddCircleIcon />
              </span>
            </div>
            <div className="sidebar">
              {navbars.map((items) => {
                return (
                  <Link to={items.render} className="small_leftbar">
                    <items.icon style={{ fontSize: "28px" }} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallLeftSide;
