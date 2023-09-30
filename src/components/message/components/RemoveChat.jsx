import React, { useContext } from "react";
import { Box, Avatar, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import Context from "../../../context/cretoContext";
import { GetTokenFromCoockies } from "../../../helper/authhelper";

function RemoveChat({ deletechat }) {
  const context = useContext(Context);
  const { setconversation } = context;

  async function deleteuserchat() {
    try {
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": GetTokenFromCoockies(),
        },
        body: JSON.stringify({ deletedId: deletechat.id }),
      };

      let url = `http://localhost:5000/api/v1/message/delete-contact`;

      await fetch(url, config)
        .then((data) => {
          setconversation([]);
          const element = document.getElementById("delete_drop");
          setTimeout(() => {
            element.style.visibility = "hidden";
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
      <div id="delete_drop">
        <Box
          sx={{
            height: "320px",
            width: "280px",
            border: "1px solid #4444",
            background: "white",
            borderRadius: "10px",
          }}
        >
          <div className="delete_user">
            <Avatar src={deletechat?.avatar} />
            <span>{deletechat?.displayname}</span>
          </div>
          <hr style={{ color: "#4444" }} />
          <div className="leave_head">
            <b>Leave conversation?</b>
            <p>
              This conversation will be deleted from your inbox. Other people in
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
                onClick={deleteuserchat}
              >
                Leave
              </Button>
            </div>
            <div className="cancel_btn">
              <Button
                disabled={false}
                size="medium"
                variant="outlined"
                style={{ width: "200px", borderRadius: "20px", color: "black" }}
                onClick={() =>
                  (document.getElementById("delete_drop").style.visibility =
                    "hidden")
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

export default RemoveChat;
