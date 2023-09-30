import { Routes, Route } from "react-router-dom";
import Signup from "./pages/CreateUser";
import Otpvarification from "./pages/Otpvarification";
import Login from "./pages/Login";
import SendMail from "./pages/SendMail";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Inform from "./pages/Inform";
import Profile from "./pages/Profile";
import EditProfile from "./components/Profile/EditProfile";
import Explore from "./pages/Explore";
import { useState, useContext, useEffect } from "react";
import Protected from "./components/ProtectedRoute";
import SuccessInform from "./pages/SuccessInform";
import Message from "./pages/Message";
import Context from "../src/context/cretoContext";
import "../src/styles/global.scss";
import AnimationFirst from "./components/AnimationFirst";
import Sapratechat from "./components/message/components/Sapratechat";
import { GetTokenFromCoockies } from "./helper/authhelper";

function App() {
  const [isSignedIn, setisSignedIn] = useState(GetTokenFromCoockies());
  console.log(isSignedIn);
  const context = useContext(Context);
  const { connect, Onlineusers } = context;
  useEffect(() => {
    connect();
  }, [sessionStorage.getItem("session_id")]);

  const [animate, setanimate] = useState(false);

  setTimeout(() => {
    setanimate(true);
  }, 700);

  const ws = new WebSocket("ws://localhost:5000");

  ws.addEventListener("open", () => {
    console.log("Connected to WebSocket server");
  });

  ws.addEventListener("message", (data) => {
    console.log(data.data);
  });

  return (
    <>
      {animate ? (
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Home />
              </Protected>
            }
          />
          <Route exact path="/validation/signup" element={<Signup />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route
            exact
            path="/messages/thread"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Message />
              </Protected>
            }
          />
          <Route exact path="/validation_code" element={<Otpvarification />} />
          <Route exact path="/validation/login" element={<Login />} />
          <Route exact path="/send-mail" element={<SendMail />} />
          <Route
            exact
            path={`/forgotpassword/:id/:token`}
            element={<ForgotPassword />}
          />
          <Route
            exact
            path={`/messages/thread/chats`}
            element={<Sapratechat />}
          />
          <Route exact path={`/inform`} element={<Inform />} />
          <Route exact path={"/:username"} element={<Profile />} />
          <Route
            exact
            path={"/setting/me/:username"}
            element={<EditProfile />}
          />
          <Route exact path={"/sendverify"} element={<SuccessInform />} />
        </Routes>
      ) : (
        <>
          <AnimationFirst />
        </>
      )}
    </>
  );
}

export default App;