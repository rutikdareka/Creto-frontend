import React from "react";
import { Navigate } from "react-router-dom";
import { GetTokenFromCoockies } from "../helper/authhelper";
function Protected({ isSignedIn, children }) {
  console.log(GetTokenFromCoockies());
  if (!GetTokenFromCoockies()) {
    return <Navigate to="/validation/login" />;
  }
  return children;
}
export default Protected;
