import axios from "axios";

// without auth-token request
export const commonrequest = async (method, url, body, header) => {
  let config = {
    method: method,
    url,
    header: { header }
      ? header
      : {
          "Content-Type": "application/json",
        },
    data: body,
  };

  return axios(config)
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      return error;
    });
};

// without auth-token request
export const commonrequesttoken = async (method, url, body) => {
  console.log(localStorage.getItem("token"));
  let config = {
    method: method,
    url,
    header: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token"),
    },
    data: body,
  };

  return axios(config)
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      return error;
    });
};
