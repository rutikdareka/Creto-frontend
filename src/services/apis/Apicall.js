import axios from "axios";

export const commonrequest = async (method, url, body, header) => {
  const config = {
    method: method,
    url: url,
    headers: header
      ? header
      : {
          "Content-Type": "application/json",
        },
    data: body,
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
