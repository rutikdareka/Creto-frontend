import { commonrequest, commonrequesttoken } from "./Apicall";

import { BASE_URL } from "../config/dev.enviromental";

export const loginfunction = async (data) => {
    return await commonrequest("post", `${BASE_URL}/api/v1/auth/login`, data)
}

export const signupfunction = async (data) => {
    return await commonrequest("post", `${BASE_URL}/api/v1/auth/signup`, data)
}

export const googleloginfunction = async (data) => {
    return await commonrequest("post", `${BASE_URL}/api/v1/auth/google-login`, data)
}

export const Searching = async (data) => {
    return await commonrequest("get", `${BASE_URL}/api/v1/message/search-user?name=${data}`, data)
}

export const createrecent = async (data) => {
    return await commonrequesttoken("post", `${BASE_URL}/api/v1/message/add-recents`, data)
}
