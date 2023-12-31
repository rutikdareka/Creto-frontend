import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./layout/App";
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Socialstate from "./context/cretoState";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="958622738960-14ilnpcn3bv1uod02kmrb5fmrqdng47r.apps.googleusercontent.com">
    <React.StrictMode>
      <Socialstate>
        <Suspense fallback={<p>...Loading</p>}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Suspense>
      </Socialstate>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
