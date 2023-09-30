import React from "react";
import "../../styles/Reuseble/Leftsite.scss";
import { Link } from "react-router-dom";
import { Bottom_navbars } from "./leftnavicon";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function BottomNavbars() {
  return (
    <div className="bottom_container bottom">
      <div className="bottom_cover">
        <div className="navbars">
          <div className="sidebar">
            {Bottom_navbars.map((items) => {
              return (
                <Link to={items.render} className="small_leftbar">
                  <items.icon
                    style={{ fontSize: "32px", verticalAlign: "bottom" }}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomNavbars;
