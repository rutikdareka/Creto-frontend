import React from "react";
import LeftSide from "../others_left_nav_section/LeftSide";
import Navbar from "../Navbar";
import { Avatar, Box, TextField } from "@mui/material";

function EditProfile() {
  return (
    <>
      <Navbar />
      <section className="setup_three">
        <LeftSide />
        <div className="edit_container">
          <div className="word">
            <svg
              onClick={() => window.location.replace("/me/ruik")}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            <span>Settings</span>
          </div>
          <hr />
          <div className="user_info">
            <span>User Information</span>
            <p>
              Here you can edit public information about yourself <br />
              The changes will be displed for others within few minutes
            </p>
          </div>
          <div className="manage">
            <Box
              sx={{
                width: 450,
                height: 550,
                border: "1px solid #4444",
              }}
            >
              <div className="fgdg">
                <span>Edit Profile</span>
              </div>
              <form className="update_options">
                <div className="users_profile">
                  <div className="change">
                    <Avatar
                      sx={{ height: "60px", width: "60px" }}
                      src={
                        localStorage.getItem("avatar") ||
                        "https://pbs.twimg.com/profile_banners/1643687006713835520/1686412339/600x200"
                      }
                    />
                    <label htmlFor="profile">update</label>
                    <label htmlFor="profile">Remove</label>
                  </div>
                  <div className="two_more">
                    <p>
                      Recommended: Square JPG, PNG, or GIF, at least 1,000
                      pixels per side.
                    </p>
                  </div>
                  <input type="file" id="profile" style={{ display: "none" }} />
                </div>
                <TextField
                  sx={{ width: "100%" }}
                  id="outlined-size-small"
                  size="small"
                  required
                  label="Name"
                  variant="outlined"
                />
                <TextField
                  sx={{ width: "100%" }}
                  multiline
                  maxRows={2}
                  id="outlined-basic"
                  label="Bio"
                  variant="outlined"
                />
                <TextField
                  sx={{ width: "100%" }}
                  size="small"
                  id="outlined-size-small"
                  label="location"
                  variant="outlined"
                />
                <TextField
                  sx={{ width: "100%" }}
                  size="small"
                  id="outlined-size-small"
                  label="website"
                  variant="outlined"
                />
                <div className="inforomation">
                  <input required type="checkbox" />
                  <p>you are Sure to your profile suggest in othres account </p>
                </div>
                <div className="sub_btn">
                  <button type="submit">Save</button>
                </div>
              </form>
            </Box>
          </div>
        </div>
      </section>
    </>
  );
}

export default EditProfile;
