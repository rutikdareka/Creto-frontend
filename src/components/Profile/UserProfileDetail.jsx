import React, { useState } from "react";
import { Avatar } from "@mui/material";
import rutik from "../../assets/rutik.jpg";
import ProfileuserPost from "./ProfileuserPost";
import PlaceIcon from "@mui/icons-material/Place";
import { useEffect } from "react";
import { BASE_URL } from "../../config/dev.enviromental";
import moment from "moment/moment";
import { Link } from "react-router-dom";

function UserProfileDetail() {
  const [Profile, setProfile] = useState();

  // const Profileinfo = async () => {
  //     const userdata = await fetch(`${BASE_URL}/api/v1/user/getProfile`, {
  //         method: "GET",
  //         headers: {
  //             "Content-Type": "application/json",
  //             "auth-token": localStorage.getItem('token')
  //         }
  //     })
  //     const json = await userdata.json();
  //     setProfile(json);
  //     localStorage.setItem('avatar', json.pic)
  //     console.log(json)
  // }

  // useEffect(() => {
  //     Profileinfo();
  // }, [])

  return (
    <>
      <div className="top_container">
        <div className="user_banner">
          <img src={rutik} alt="" />
        </div>
        <div className="user_info">
          <div className="user_img">
            <Avatar
              src={
                "https://pbs.twimg.com/profile_banners/1643687006713835520/1686412339/600x200"
              }
              sx={{ width: 130, height: 130, border: "1px solid #4444" }}
            />
            <Link
              to={`/setting/me/${localStorage.getItem("username")}`}
              className="edit"
            >
              <button>Edit Profile</button>
            </Link>
          </div>
          <div className="user_details">
            <div className="name">
              <span>
                {Profile?.name ||
                  localStorage.getItem("username") ||
                  "Rutik Darekar"}
              </span>
              <span style={{ fontSize: "13px", paddingTop: "3px" }}>
                @{localStorage.getItem("username")}
              </span>
            </div>
            <div className="bio">
              <span>
                {Profile?.bio ||
                  "Beileive in yourself and anything is possible"}
              </span>
            </div>
            <div className="flex">
              {Profile?.location && (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  {Profile?.location}
                </span>
              )}
              {Profile?.website && (
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="bi bi-link-45deg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                  </svg>
                  {Profile?.website}
                </span>
              )}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-calendar3"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
                &nbsp;joined {moment(Profile?.createdAt).format("MMM Do")}
              </span>
            </div>
            <div className="fol_fol">
              <span>0 Post</span>
              <span>0 followors</span>
              <span>0 following</span>
            </div>
          </div>
          <ProfileuserPost />
        </div>
      </div>
    </>
  );
}

export default UserProfileDetail;
