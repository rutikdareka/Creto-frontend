const axios = require("axios");
const BASE_URL = require("../../config/dev.enviromental");
const {
  ACCESESSCONTACT_ENDPOINT,
  GETCONTACT_ENDPOINT,
  DELETECONTACT_ENDPOINT,
  CREATEMSG_ENDPOINT,
  GETMSG_ENDPOINT,
} = require("../EndPoints");

module.exports = {
  AcesessChat: async (data) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      };
      let url = `${BASE_URL}/${ACCESESSCONTACT_ENDPOINT}/${data}`;
      await axios
        .get(url, config)
        .then((data) => {
          return data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  },

  GetChat: async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      };
      let url = `${BASE_URL}/${GETCONTACT_ENDPOINT}`;
      await axios
        .get(url, config)
        .then((data) => {
          return data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  },

  DeleteChat: async (deleteid) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        data: deleteid,
      };
      let url = `${BASE_URL}/${DELETECONTACT_ENDPOINT}`;
      await axios
        .post(url, config)
        .then((data) => {
          return data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  },

  CreateMessage: async (body) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        data: body,
      };

      let url = `${BASE_URL}/${CREATEMSG_ENDPOINT}`;
      await axios
        .post(url, config)
        .then((data) => {
          return data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  },

  GetMessages: async (user1, user2) => {
    try {
      console.log(user1, user2);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      let url = `${BASE_URL}/${GETMSG_ENDPOINT}?user1=${user1}&user2=${user2}`;
      await axios
        .get(url, config)
        .then((data) => {
          return data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  },
};
