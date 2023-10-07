import { React, useState, useEffect, useRef } from "react";
import Context from "./cretoContext";
import { io } from "socket.io-client";

const Socialstate = (props) => {
  const [conversation, setconversation] = useState([]);
  const [Onlineusers, setOnlineusers] = useState([]);
  const socket = useRef(null);

  function connect() {
    socket.current = io("http://localhost:5000");
    socket.current.emit("add-user", localStorage.getItem("session_id"));
    socket.current.on("get-users", (activeusers) => {
      setOnlineusers(activeusers);
    });
  }

  return (
    <Context.Provider
      value={{ Onlineusers, conversation, setconversation, connect, socket }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Socialstate;
