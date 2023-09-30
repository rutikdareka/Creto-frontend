import { Avatar, Box, Button, TextField } from "@mui/material";
import React, { useState, useEffect, useContext, useRef } from "react";
import "../../../styles/message/message.scss";
import { Createchat, Searching } from "../../../services/Apis";
import Showusers from "./Showusers";
import Loader from "../../Loader";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Context from "../../../context/cretoContext";
import { io } from "socket.io-client";
import RemoveChat from "./RemoveChat";
import { useNavigate } from "react-router-dom";
import { GetTokenFromCoockies } from "../../../helper/authhelper";

function Contact() {
  const [getusers, setgetusers] = useState([]);
  const [contact, setcontact] = useState("");
  const [deletechat, setdeletechat] = useState();
  const [keyword, setkeyword] = useState();

  const renderThread = useNavigate();

  const context = useContext(Context);
  const { setconversation, Onlineusers } = context;

  useEffect(() => {
    if (keyword) {
      const fetchdata = async () => {
        const items = await Searching(keyword);
        setgetusers(items);
      };
      fetchdata();
    }
  }, [keyword]);

  const getuserChats = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "auth-token": GetTokenFromCoockies(),
        },
      };

      let url = `http://localhost:5000/api/v1/message/get-contact`;
      await axios
        .get(url, config)
        .then((data) => {
          if (data.data) {
            setcontact(data.data);
          } else {
            setcontact([]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getuserChats();
  }, [contact, deletechat]);

  const deletedrop = async (e) => {
    const element = document.getElementById("delete_drop");
    element.style.visibility = "visible";
    setdeletechat(e?.user);
  };

  function handlechange(e) {
    setconversation(e?.user);
  }

  const handleclick = () => {
    const mediaQuery = window.matchMedia("(max-width: 870px)");
    if (mediaQuery.matches === true) {
      renderThread("/messages/thread/chats");
    }
  };

  function handelshow() {
    let hideElement = document.getElementById("hide_create_drop");
    hideElement.style.visibility = "visible";
  }

  return (
    <>
      <ToastContainer />
      <div className="chat_contact_wrapper">
        <div className="chat_sub_wrapper">
          <div className="chat_wrapp adjust">
            <div className="heading_contact">
              <span>Message</span>
              <span
                className="create_chat_icon"
                id="key_create_chat"
                onClick={handelshow}
              >
                <svg
                  aria-label="New message"
                  class="x1lliihq x1n2onr6"
                  color="rgb(0, 0, 0)"
                  fill="rgb(0, 0, 0)"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>New message</title>
                  <path
                    d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="16.848"
                    x2="20.076"
                    y1="3.924"
                    y2="7.153"
                  ></line>
                </svg>
              </span>
            </div>
            <div className="users_contact_wrapper">
              <div className="users_sub_contact_wrappers">
                {contact[0] ? (
                  contact ? (
                    contact?.map((e, i) => {
                      return (
                        <div
                          className="users"
                          key={i}
                          onClick={() => handlechange(e)}
                        >
                          <div className="user_img" onClick={handleclick}>
                            {Onlineusers.find(
                              (items) => items.userid === e?.user?.id
                            ) ? (
                              <>
                                <Avatar src={e?.user?.avatar} />
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
                              </>
                            ) : (
                              <>
                                <Avatar src={e?.user?.avatar} />
                              </>
                            )}
                          </div>
                          <div className="user-details" onClick={handleclick}>
                            <div className="name">{e?.user?.displayname}</div>
                            {e.lastmessage !== null ? (
                              e.lastmessage.sender ===
                              localStorage.getItem("session_id") ? (
                                <div className="username">
                                  You: {e.lastmessage.lastMessage}
                                </div>
                              ) : (
                                <div className="username">
                                  {e.lastmessage.lastMessage}
                                </div>
                              )
                            ) : (
                              <div className="username">
                                {e?.user?.username}
                              </div>
                            )}
                          </div>
                          <div className="delete_options">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              onClick={() => deletedrop(e)}
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-trash"
                              viewBox="0 0 16 16"
                            >
                              <title>Delete chat</title>
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                            </svg>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    ""
                  )
                ) : (
                  <div className="error_info">
                    <div className="dsfsd">
                      <b>Welcome to your inbox!</b>
                      <p>
                        Drop a line, share posts and more with private
                        conversations between you and others on Creto.{" "}
                      </p>
                    </div>
                  </div>
                )}
                <RemoveChat deletechat={deletechat} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
