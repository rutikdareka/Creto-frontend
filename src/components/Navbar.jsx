import React, { useContext } from "react";
import "../styles/small/navbar.scss";
import { LOGO_URL } from "../config/dev.enviromental";
import { Avatar } from "@mui/material";
import Context from "../context/cretoContext";

function Navbar() {
  const context = useContext(Context);
  const { Onlineusers } = context;

  const online = Onlineusers.find(
    (items) => items.userid === localStorage.getItem("session_id")
  );

  return (
    <>
      <div className="navbar_wrapper">
        <div className="sub_wrapper">
          <div className="heading_wraper">
            <div className="image_creto">
              <img src={LOGO_URL} alt="" />
            </div>
            <div className="user_img">
              <div className="icon">
                {online ? (
                  <div className="active">
                    <Avatar
                      sx={{ width: 60, height: 55 }}
                      src={localStorage.getItem("avatar")}
                      alt=""
                    />
                    <svg
                      class="_2dn5Ncenn0BSD4tCSmxQhA GpWjjkZl5_kV4yZYWBaT2"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                    >
                      <circle cx="6" cy="6" r="4"></circle>
                      <path
                        class="_3SlBAJb2MbUHwgBZFH8eL7 "
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
                      ></path>
                    </svg>
                  </div>
                ) : (
                  <div className="unactive">
                    <Avatar
                      sx={{ width: 60, height: 55 }}
                      src={localStorage.getItem("avatar")}
                      alt=""
                    />
                  </div>
                )}
              </div>
              <div className="down_logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <LeftSide /> */}
    </>
  );
}

export default Navbar;
