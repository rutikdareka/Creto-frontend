import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import Input from "../../small/Input";
import Addchat from "./Addchat";
import { Createchat, Searching, createrecent } from "../../../services/Apis";
import RecentSearch from "./RecentSearch";

function CreatechatDrop() {
  const [keyword, setkeyword] = useState(null);
  const [getusers, setgetusers] = useState([]);
  const [addchat, setaddchat] = useState();

  useEffect(() => {
    if (keyword !== "") {
      const fetchdata = async () => {
        const items = await Searching(keyword);
        setgetusers(items);
      };
      fetchdata();
    } else {
      setgetusers([]);
    }
  }, [keyword]);

  function handlenone() {
    let hideElement = document.getElementById("hide_create_drop");
    hideElement.style.visibility = "hidden";
    // document.getElementById("change_back").style.background = "white";
  }

  useEffect(() => {
    const element = document.getElementById("key_create_chat");
    const element2 = document.getElementById("hide_create_drop");
    document?.addEventListener("click", (e) => {
      if (!element.contains(e.target) && !element2.contains(e.target)) {
        element2.style.visibility = "hidden";
        // document.getElementById("change_back").style.background = "white";
      }
    });
  }, []);

  const adddropopen = async (e) => {
    const element = document.getElementById("add_drop");
    element.style.display = "flex";
    setaddchat(e);
    createrecent(e);
  };

  return (
    <>
      <div className="drop_down" id="hide_create_drop">
        <div className="drop_content">
          <div className="heading_create_chat">
            <span>Create Chat</span>
            <span className="close_chat" onClick={handlenone} title="Close">
              &times;
            </span>
          </div>
          <div className="create_chat_inputs">
            <div className="sub_inputs_create">
              To:
              <Input
                placeholder={"Search users"}
                type={"text"}
                onChange={(e) => setkeyword(e.target.value)}
              />
            </div>
          </div>
          <div className="search_users_show">
            <div className="show_users_sub">
              {getusers[0] ? (
                getusers.map((items) => {
                  return (
                    <div className="users" onClick={() => adddropopen(items)}>
                      <div className="user_img">
                        <Avatar src={items.avatar} />
                      </div>
                      <div className="user-details">
                        <div className="name">{items.displayname}</div>
                        <div className="username">{items.username}</div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="suggetion_users_keyword">
                  Try searching for people, lists, or keywords
                </div>
              )}
            </div>
          </div>
          <Addchat addchat={addchat} />
        </div>
      </div>
    </>
  );
}

export default CreatechatDrop;
