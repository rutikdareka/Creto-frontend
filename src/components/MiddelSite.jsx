import React from "react";
import "../styles/middlesite.scss";
import { Link } from "react-router-dom";
import phulpakhru from "../assets/phulpakhru.jpg";
import Middelpost from "./Middelpost";
import { Avatar } from "@mui/material";
import { Pagination } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import rutik from "../assets/rutik.jpg";

function MiddelSite() {
  return (
    <>
      <div className="middel_container">
        <section className="post_container">
          <div className="sub_post_container">
            <div className="user_an">
              <Avatar src={rutik} />
              <div className="name_and_create">
                <p>Rutik Darekar</p>
                <p>24 june</p>
              </div>
            </div>
            <div className="write_content">
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </span>
            </div>
            <div className="images_for_post">
              <Carousel showThumbs={false} showStatus={false}>
                <img src={rutik} alt="" />
                <img src={phulpakhru} alt="" />
                <img src={rutik} alt="" />
                <img src={phulpakhru} alt="" />
                <img src={rutik} alt="" />
              </Carousel>
            </div>
            <div className="user_choice">
              <div className="like">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </div>
              <div className="comment">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chat-left-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </div>
              <div className="bookmark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bookmark"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                </svg>
              </div>
            </div>
            <div className="info_style">
              <span>0 likes</span>
              <span>View all 0 comments</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default MiddelSite;
