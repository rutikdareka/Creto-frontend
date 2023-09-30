import { Avatar, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import "../../../styles/message/message.scss";
import { Button } from "@mui/material";
import { useContext } from "react";
import Context from "../../../context/cretoContext";
import Messagesloader from "../../loaders/Messagesloader";
import Navbar from "../../Navbar";
import LeftSide from "../../others_left_nav_section/LeftSide";
import { useNavigate } from "react-router-dom";

function Sapratechat() {
  const [isTyping, setisTyping] = useState(false);
  const [isUserTyping, setisUserTyping] = useState(null);

  const context = useContext(Context);
  const { conversation, Onlineusers, socket } = context;
  const naviget = useNavigate();

  const handlekeyup = (e) => {
    let typingTimeout;
    clearTimeout(typingTimeout);

    let obj = {
      user: JSON.parse(localStorage.getItem("user")),
      id: conversation.id,
    };

    setTimeout(() => {
      socket.current.emit("typing", obj);
    }, 500);

    typingTimeout = setTimeout(() => {
      socket.current.emit("stop_typing", obj);
    }, 5000);
  };

  useEffect(() => {
    socket.current.on("stop_user_typing", (data) => {
      setTimeout(() => {
        setisTyping(false);
      }, 1000);
    });
  }, []);

  useEffect(() => {
    socket.current.on("show-user-typing", (data) => {
      console.log(data);
      setisUserTyping(data);
      setisTyping(true);
    });
  }, []);

  if (!conversation) {
    naviget("/messages/thread");
  }

  useEffect(() => {
    document.getElementsByClassName("bottom")[0].style.display = "none";
  }, []);

  return (
    <>
      <Navbar />
      <div className="wrapper_landing">
        <div className="message_sub_wrapper">
          <LeftSide />
          <div className="two_factor_msg">
            {conversation.id ? (
              <div className="small_container">
                <div className="middle_sub_wrapper">
                  <div className="middle_user_heading">
                    <div className="heading_user">
                      <div
                        style={{ display: "flex", cursor: "pointer" }}
                        onClick={() => naviget("/messages/thread")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-arrow-left"
                          viewBox="0 0 16 16"
                        >
                          <title>left</title>
                          <path
                            fill-rule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                          />
                        </svg>
                      </div>
                      <Avatar
                        src={conversation.avatar || ""}
                        sx={{ height: "50px", width: "50px" }}
                      />
                      {Onlineusers.find(
                        (items) => items.userid === conversation.id
                      ) && (
                        <svg
                          class="_1g3Xfh9mljLHWv24M9A3Rw _2dn5Ncenn0BSD4tCSmxQhA GpWjjkZl5_kV4yZYWBaT2"
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
                      )}
                      <div className="basics">
                        <span>{conversation.displayname}</span>
                        {Onlineusers.find(
                          (items) => items.userid === conversation.id
                        ) && (
                          <>
                            <span
                              style={{
                                fontSize: "12px",
                                lineHeight: "18px",
                                paddingLeft: "2px",
                              }}
                            >
                              online
                            </span>{" "}
                          </>
                        )}
                      </div>
                    </div>
                    <div className="middle_messaging_area">
                      <div className="middle_messaging_sub_area">
                        <div className="user_messages">
                          {/* {isUserTyping?.user.id === conversation.id &&
                          isUserTyping?.id ===
                            localStorage.getItem("session_id") ? (
                            isTyping ? (
                              <div className="user_typing_sec">
                                <div className="fgf">
                                  <Avatar src={isUserTyping.user.avatar} />
                                </div>
                                <span>
                                  <Messagesloader />
                                </span>
                              </div>
                            ) : (
                              ""
                            )
                          ) : (
                            ""
                          )} */}
                        </div>
                      </div>
                      <div className="input_messaging_area">
                        <div className="chat_input">
                          <div className="send_options">
                            <div className="media">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                class="bi bi-image"
                                viewBox="0 0 16 16"
                              >
                                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                              </svg>
                            </div>
                            <div className="emoji">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                class="bi bi-emoji-smile"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                              </svg>
                            </div>
                          </div>
                          <TextField
                            size="small"
                            label="Send a Message"
                            sx={{ width: "100%" }}
                            onChange={handlekeyup}
                          />
                          <Button>Send</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="middlechat_container">
                <div className="wrapp">
                  <div className="middle_info">
                    <div className="Bold_text">
                      <b>Select a message</b> <br />
                      <p>
                        Choose from your existing conversations, start a new
                        one, or just keep swimming.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sapratechat;
