import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { loginfunction } from "../services/Apis";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Button from "../components/small/Button";
import { useGoogleLogin } from "@react-oauth/google";
import { googleloginfunction } from "../services/Apis";
import Loader from "../components/Loader";
import { SetTokenFromCoockies } from "../helper/authhelper";
import { TextField } from "@mui/material";
import Alert from "../components/reusebel/Alert";
import Googlelogin from "../components/small/Googlelogin";
import useGoogleOneTapLogin from "../hook/useOneTap";
import { GOOGLE_CLIENT_ID } from "../config/dev.enviromental";
import ReactDOMServer from "react-dom/server";

function Login() {
  // One tap use login
  const { showOneTapPrompt } = useGoogleOneTapLogin(GOOGLE_CLIENT_ID);

  useEffect(() => {
    showOneTapPrompt();
  }, []);

  const navigate = useNavigate();
  const [loader, setloader] = useState(true);
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  const handelchange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const data = await loginfunction(credentials);
    setloader(false);
    setTimeout(() => {
      setloader(true);
    }, 1000);
    if (data?.success) {
      SetTokenFromCoockies(data?.authtoken);
      sessionStorage.setItem("session_id", data?.result?.id);
      const error = document.getElementById("login_errors");
      const componentHtml = ReactDOMServer.renderToString(
        <Alert type={"positive"} message={"Successful login"} />
      );
      error.innerHTML = componentHtml;

      setTimeout(() => {
        error.innerHTML = "";
      }, 4000);
      setTimeout(() => {
        window.location.replace("/");
      }, 300);
    } else {
      if (data.message === "This user not otp fillup") {
        sessionStorage.setItem("session_id", data?.result?.id);
        setTimeout(() => {
          navigate("/validation_code");
        }, 1000);
      } else {
        const error = document.getElementById("login_errors");
        const componentHtml = ReactDOMServer.renderToString(
          <Alert type={"danger"} message={"Invalid login"} />
        );
        error.innerHTML = componentHtml;

        setTimeout(() => {
          error.innerHTML = "";
        }, 4000);
      }
    }
  };

  const login = useGoogleLogin({
    onSuccess: async (coderesponse) => {
      const data = await googleloginfunction(coderesponse);
      console.log(data);
      if (data?.success) {
        SetTokenFromCoockies(data?.authtoken);
        sessionStorage.setItem("session_id", data?.result?.id);
        const error = document.getElementById("login_errors");
        const componentHtml = ReactDOMServer.renderToString(
          <Alert type={"positive"} message={"Successful login"} />
        );
        error.innerHTML = componentHtml;

        setTimeout(() => {
          error.innerHTML = "";
        }, 4000);
        setTimeout(() => {
          window.location.replace("/");
        }, 300);
      }
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  return (
    <>
      <ToastContainer />
      <div className="login_main_wrapper">
        <div className="login_authContent">
          <div className="login_sub_wrapper">
            <div className="logo">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAACFCAMAAADYSxyTAAAAYFBMVEUHCAr///8AAAD8/PwAAAP39/fs7Oyvr6/z8/O5ubnd3d0cHBy+vr7p6ekWFhasrKyWlpakpKRMTEw8PDyMjIxwcHBERERVVVVra2uBgYEnJyfQ0NBkZWYvMDDKysp4eHhU8cW5AAADj0lEQVR4nO2a23KjMAyGsRxCOAYSEg4h8P5vuZKAHJptu7szO7E7/3dRMuVGP7IkW3IQAAAAAAAAAAAAAAAAAAAAAAAAAOD/Q3febco/I8afp7KKon1Vn3pPtRClQ5yH1ijW7vL9ufBOCVFTbVWAuf81SX30SsiGimh7s/6RvPTIJVRMupRMmGdlk3JcXNvysrWqLB9o824D/wzqM7V4u28f0hX1XRbqGqv8cAldE11C1Zmevjxbf5gFxoEHQqjJxdas16/+VD42HP0XUXLpnRdCx1ycUcsnZ7uLoYziOI7qZpZCfSyvx9RxIdTLotqexGgKmngXLvUjzGWdiYNK9lY4uK1jE2S8bLaDOkPW0BOsRP5fm3ByW0ZAncRGq9+92pnVF2shySd1SVm7LqMQs8VK6mdnJNFwLYr0OGVa3c0+UI3vNvQbKGJTMzaVriojKYtbvjryPoVLY+xBFaSGTTVX4hjQ9Lq/Pnx5Um3WRK47g02t2M5SZMiPsFuLxpJyD6Jy1zivg1KO7Jx3tDRItq1lBckR5NS1R34OUh9zxxOuQK0EMrujGPWHyEi7JLTWhmM77CQjH9yXERCbvxvEHRLiUrHpkNyKhxVv+CBjQ5xac/aC6JmTL8t4PIPk7sdGINkq1GykYZIUpBtfDvexnkp1S+76pmqGOv72HZt/4meldVu2WpPmqyo0ydkLGZJ1jZFsJU9ZQcQ7X06++o7q3JejOcmOnCuFPqWmH6S4r8b70/SZdWw2xIe+kHTPqOvMN1YdgaTfOTys8aDsfWTREXjvj+ir+PCHh3xl7/nK9ZPfK7f60b7Uj3eb9ldoPY9f6/mlvHom5Hf7K+HkmY7X/e5ZhbQ3HV6ssc/OH3cdlNYerLHPzoPTurOiIDKjB71dzbylrKf98/l8ea0VJnZ/aT33S8zHfskx0WNh5v4x5KV/Vd/7V2fpX+nYIHO+hfXST7RrP7Fb+omJtZICXPeI9Hft5/1dLu6VuMT5puLSb9fdFTXjQ7NE4+VAc6zrtsVpZP5hv5x/cHGxkpTfbek3fDePSmORMXowWNP5oB0/nw8aH+aD87xWslJ5ft5Nybw29mdeu8zPzcP8fG65p9M8Pw89mZ9LgE9zdOt9Brno0w/lJQ89u8/wY+6XBC/3fRZ8u+8jPN+/MnL/6ujf/SthvQ+39/o+3MxPuJ8IAAAAAAAAAAAAAAAAAAAAAAAA+MEv0hwod2b10MUAAAAASUVORK5CYII="
                alt=""
              />
            </div>
            <form className="from_auth dsfgsdgsd" onSubmit={handlesubmit}>
              <div className="inpust_auth">
                <div className="inputs_feild">
                  <TextField
                    label="Enter Your Email"
                    name={"email"}
                    size="small"
                    value={credentials.email}
                    type="email"
                    onChange={handelchange}
                    required
                  />
                  <TextField
                    label="Your Password"
                    name={"password"}
                    size="small"
                    value={credentials.password}
                    type="password"
                    onChange={handelchange}
                    required
                  />
                  <Link to={"/send-mail"} className="forgot_link">
                    Forgot your password?
                  </Link>
                </div>
                <div className="btn">
                  {loader ? (
                    <Button name={"Login"} />
                  ) : (
                    <Button name={<Loader />} />
                  )}
                </div>
                <Googlelogin func={login} />
                <footer>
                  <div className="account_creation">
                    Don't have an account?
                    <Link to={"/validation/signup"}> Join now</Link>
                  </div>
                  <br />
                  <div className="fdgdfgd">
                    By continuing it is considered that you have <br />
                    accepted <span>Terms & Conditions</span> and{" "}
                    <span>Privacy Policy</span>
                  </div>
                  <div className="hfdgdfg">
                    Contact us on <span>cretoPro@gmail.com</span> <br />
                    @2022 creto inc. All rights are reserved
                  </div>
                </footer>
              </div>
            </form>
          </div>
        </div>
        <p id="login_errors">
          {}
          {/* <Alert type={"positive"} message={"hi"} /> */}
        </p>
      </div>
    </>
  );
}

export default Login;
