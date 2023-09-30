import React, { useState, useEffect } from "react";
import "../styles/auth.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { signupfunction } from "../services/Apis";
import Button from "../components/small/Button";
import { useGoogleLogin } from "@react-oauth/google";
import { googleloginfunction } from "../services/Apis";
import { SetTokenFromCoockies } from "../helper/authhelper";
import { TextField } from "@mui/material";
import Googlelogin from "../components/small/Googlelogin";
import Loader from "../components/Loader";
import Alert from "../components/reusebel/Alert";
import ReactDOMServer from "react-dom/server";
import useGoogleOneTapLogin from "../hook/useOneTap";
import { GOOGLE_CLIENT_ID } from "../config/dev.enviromental";

function Signup() {
  // One tap use login
  const { showOneTapPrompt } = useGoogleOneTapLogin(GOOGLE_CLIENT_ID);

  useEffect(() => {
    showOneTapPrompt();
  }, []);

  const [isValid, setIsValid] = useState(true);
  const [isValidP, setIsValidP] = useState(true);
  const [isValidD, setIsValidD] = useState(true);

  const navigate = useNavigate();
  const [loader, setloader] = useState(true);

  const [credentials, setcredentials] = useState({
    username: "",
    email: "",
    password: "",
    birthdate: "",
    displayname: "",
  });

  const handelchange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handelchangeDate = (e) => {
    const newdate = e.target.value;
    console.log(newdate);
    setcredentials({ ...credentials, [e.target.name]: e.target.value });

    const dataPattern = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    setIsValidD(dataPattern.test(newdate));

    if (!newdate) {
      setIsValidD(true);
    }
  };

  const handelchangeEmail = (e) => {
    const newEmail = e.target.value;
    setcredentials({ ...credentials, [e.target.name]: newEmail });

    // Email validation using a regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValid(emailPattern.test(newEmail));

    if (!newEmail) {
      setIsValid(true);
    }
  };

  const handelchangePassword = (e) => {
    const newPassword = e.target.value;
    setcredentials({ ...credentials, [e.target.name]: newPassword });

    // Email validation using a regular expression
    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    setIsValidP(passwordPattern.test(newPassword));

    if (!newPassword) {
      setIsValidP(true);
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const newuser = await signupfunction(credentials);
    setloader(false);
    setTimeout(() => {
      setloader(true);
    }, 1000);
    sessionStorage.setItem("session_id", newuser?.result?.id);
    if (newuser.success) {
      setTimeout(() => {
        navigate("/validation_code");
      }, 1000);
    } else {
      setTimeout(() => {
        setloader(true);
      }, 500);
      const error = document.getElementById("login_errors");
      const componentHtml = ReactDOMServer.renderToString(
        <Alert type={"danger"} message={newuser.message} />
      );
      error.innerHTML = componentHtml;

      setTimeout(() => {
        error.innerHTML = "";
      }, 4000);
    }
  };

  const Signinlogin = useGoogleLogin({
    onSuccess: async (coderesponse) => {
      const data = await googleloginfunction(coderesponse);
      if (data?.success) {
        SetTokenFromCoockies(data?.authtoken);
        sessionStorage.setItem("session_id", data?.result?.id);
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
                    name={"displayname"}
                    label={"Display Name"}
                    value={credentials.displayname}
                    type="displayname"
                    onChange={handelchange}
                    size="small"
                    required
                  />

                  <TextField
                    name={"username"}
                    label={"Username"}
                    value={credentials.username}
                    type="name"
                    onChange={handelchange}
                    size="small"
                    required
                  />

                  <TextField
                    name={"email"}
                    label={"Email"}
                    value={credentials.email}
                    type="email"
                    onChange={handelchangeEmail}
                    size="small"
                    required
                  />
                  {!isValid && (
                    <span className="error">Invalid email address</span>
                  )}

                  <TextField
                    name={"password"}
                    label={"Set Password"}
                    value={credentials.password}
                    type="password"
                    size="small"
                    onChange={handelchangePassword}
                    required
                  />
                  {!isValidP && (
                    <span className={`error`}>
                      Password Include min 8 char, special char,numbers,Upper
                      and lower letter
                    </span>
                  )}

                  <TextField
                    name={"birthdate"}
                    value={credentials.birthdate}
                    type="date"
                    size="small"
                    onChange={handelchangeDate}
                    required
                  />
                  {!isValidD && <span className="error">Invalid date</span>}

                  <div className="capache">
                    <input type="checkbox" required />
                    <span>I'm not a robot</span>
                    <div className="capa_img">
                      <img
                        src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                        alt=""
                      />
                      <span>reCAPTCHA</span>
                    </div>
                  </div>
                </div>
                <div className="btn">
                  {isValid && isValidP && isValidD ? (
                    loader ? (
                      <Button name={"Continue"} />
                    ) : (
                      <Button name={<Loader />} />
                    )
                  ) : (
                    <button disabled>Continue</button>
                  )}
                </div>
                <Googlelogin func={Signinlogin} />
                <footer>
                  <div className="account_creation">
                    Already have an account?
                    <Link to={"/validation/login"}> Login</Link>
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
        <p id="login_errors"></p>
      </div>
    </>
  );
}

export default Signup;
