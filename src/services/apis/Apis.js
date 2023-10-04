import { commonrequest } from "./Apicall";

import { BASE_URL } from "../../config/dev.enviromental";
import { GetTokenFromCoockies } from "../../helper/authhelper";

/**
 * @Authontications @apis
 */

export const loginfunction = async (data) => {
  return await commonrequest("post", `${BASE_URL}/api/v1/auth/login`, data);
};

export const signupfunction = async (data) => {
  return await commonrequest("post", `${BASE_URL}/api/v1/auth/signup`, data);
};

export const googleloginfunction = async (data) => {
  return await commonrequest(
    "post",
    `${BASE_URL}/api/v1/auth/google-login`,
    data
  );
};

/**
 *
 * @Searching @apis
 */

export const Searching = async (data) => {
  return await commonrequest(
    "get",
    `${BASE_URL}/api/v1/message/search-user?name=${data}`,
    data
  );
};

export const createrecent = async (data) => {
  return await commonrequest(
    "post",
    `${BASE_URL}/api/v1/message/add-recents`,
    data
  );
};

/**
 *
 * @Messaging @apis
 */

export const Getuserchats = async () => {
  let header = {
    "content-type": "application/json",
    "auth-token": GetTokenFromCoockies(),
  };

  return await commonrequest(
    "get",
    `${BASE_URL}/api/v1/message/get-contact`,
    "",
    header
  );
};

export const GetMessages = async (data) => {
  let header = {
    "content-type": "application/json",
    "auth-token": GetTokenFromCoockies(),
  };

  return await commonrequest(
    "get",
    `${BASE_URL}/api/v1/message/getMsg?user1=${data.user1}&user2=${data.user2}`,
    "",
    header
  );
};
