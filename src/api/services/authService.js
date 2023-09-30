const axios = require("axios");
const BASE_URL = require("../../config/dev.enviromental");
const {
  LOGIN_ENDPOINT,
  RESENTOTP_ENDPOINT,
  SIGNUP_ENDPOINT,
  SENDMAIL_ENDPOINT,
  FORGOTPASSWORD_ENDPOINT,
  VERIFYOTP_ENDPOINT,
  GOOGLE_LOGIN,
} = require("../EndPoints");

module.exports = {
  Loginuser: async (body) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        data: body,
      };

      let url = `${BASE_URL}/${LOGIN_ENDPOINT}`;
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

  Signupuser: async (body) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        data: body,
      };

      let url = `${BASE_URL}/${SIGNUP_ENDPOINT}`;
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

  Sendemail: async (body) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        data: body,
      };

      let url = `${BASE_URL}/${SENDMAIL_ENDPOINT}`;
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

  ForgotPassword: async (id, token, passowrd) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        data: passowrd,
      };

      let url = `${BASE_URL}/${FORGOTPASSWORD_ENDPOINT}/${id}/${token}`;
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

  Verifyotp: async (body) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        data: passowrd,
      };

      let url = `${BASE_URL}/${VERIFYOTP_ENDPOINT}/${id}/${token}`;
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

  ResentOtp: async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        data: passowrd,
      };

      let url = `${BASE_URL}/${RESENTOTP_ENDPOINT}/${id}`;
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

  GoogleLogin: async (body) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
        data: passowrd,
      };

      let url = `${BASE_URL}/${GOOGLE_LOGIN}/${id}`;
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
};
