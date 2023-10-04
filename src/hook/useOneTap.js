import axios from "axios";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { BASE_URL } from "../config/dev.enviromental";
import { SetTokenFromCoockies } from "../helper/authhelper";
import { useNavigate } from "react-router-dom";

const useGoogleOneTapLogin = (clientId) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  // Load the Google API script
  const script = document.createElement("script");
  script.src = "https://accounts.google.com/gsi/client";
  script.async = true;
  script.onload = () => {
    // Initialize the one-tap API
    window.google?.accounts.id.initialize({
      client_id:
        "928923089849-hr5t4dedrv9b3iikk88joitjapvrldea.apps.googleusercontent.com",
      callback: handleGoogleResponse,
    });

    window.google?.accounts.id.prompt();
  };
  document.body.appendChild(script);

  const handleGoogleResponse = (response) => {
    const credential = response.credential;

    const data = jwt_decode(credential);
    Onetapgoogleapi(data);
  };

  async function Onetapgoogleapi(data) {
    try {
      const saveontapdata = await axios.post(
        `${BASE_URL}/api/v1/auth/onetap-google-login`,
        data
      );
      const Converdata = await saveontapdata.data;
      console.log(Converdata);
      if (Converdata?.success) {
        SetTokenFromCoockies(Converdata?.authtoken);
        localStorage.setItem("session_id", Converdata?.result?.id);
        setTimeout(() => {
          window.location.replace("/");
        }, 300);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const showOneTapPrompt = () => {
    // Show the Google One-Tap sign-in prompt explicitly
    window.google?.accounts.id.prompt();
  };

  return { isLoggedIn, showOneTapPrompt };
};

export default useGoogleOneTapLogin;
