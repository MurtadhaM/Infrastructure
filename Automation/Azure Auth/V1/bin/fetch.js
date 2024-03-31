const axios = require("axios");

async function callApi(endpoint, accessToken, body, METHOD) {
  options = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  console.log("request made to web API at: " + new Date().toString());

  try {
    if (METHOD == "POST") {
      const response = await axios.post(endpoint, body, options);
      return response.data;
    } else {
      const response = await axios.get(endpoint, options);
      return response.data;
    }
  } catch (error) {
    return error;
  }
}

module.exports = {
  callApi: callApi,
};
