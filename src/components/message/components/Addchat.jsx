import React, { useState } from "react";
import { Box, Avatar, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { GetTokenFromCoockies } from "../../../helper/authhelper";

function Addchat({ addchat }) {
  async function handlecreatechat() {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "auth-token": GetTokenFromCoockies(),
        },
      };

      let url = `http://localhost:5000/api/v1/message/acsess-contact?contact=${addchat.id}`;
      await axios
        .get(url, config)
        .then((data) => {
          const element2 = document.getElementById("add_drop");
          let hideElement = document.getElementById("hide_create_drop");
          setTimeout(() => {
            element2.style.display = "none";
            hideElement.style.visibility = "hidden";
          }, 500);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <ToastContainer />
      <div id="add_drop">
        <Box
          sx={{
            height: "320px",
            width: "280px",
            border: "1px solid #444",
            background: "white",
            borderRadius: "10px",
            boxShadow: " 0px 0px 30px 5px #4444",
          }}
        >
          <div className="delete_user">
            <Avatar src={addchat?.avatar} />
            <span>{addchat?.displayname}</span>
          </div>
          <hr style={{ color: "#4444" }} />
          <div className="leave_head">
            <b>Add conversation?</b>
            <p>
              This conversation will be added from your inbox. Other people in
              the conversation will still be able to see it.{" "}
            </p>
          </div>
          <div className="btns">
            <div className="leave_btn">
              <Button
                color="secondary"
                disabled={false}
                size="medium"
                variant="outlined"
                style={{
                  width: "200px",
                  background: "red",
                  borderRadius: "20px",
                  color: "white",
                }}
                onClick={handlecreatechat}
              >
                Add
              </Button>
            </div>
            <div className="cancel_btn">
              <Button
                disabled={false}
                size="medium"
                variant="outlined"
                style={{ width: "200px", borderRadius: "20px", color: "black" }}
                onClick={() =>
                  (document.getElementById("add_drop").style.display = "none")
                }
              >
                Cancel
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}

export default Addchat;
