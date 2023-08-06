const msal = require("@azure/msal-node");

const msalConfig = {
  auth: {
    clientId: process.env.CLIENT_ID,
    authority: process.env.AAD_ENDPOINT + "/" + process.env.TENANT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  },
};

const tokenRequest = {
  scopes: [process.env.GRAPH_ENDPOINT + "/.default"],
};

const apiConfig = {
  uri: process.env.GRAPH_ENDPOINT + "",
  headers: {
    "User-Agent": "request",
    Method: "GET",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  json: true,
};

const cca = new msal.ConfidentialClientApplication(msalConfig);

/**
 * Acquires token with client credentials.
 * @param {object} tokenRequest
 */
async function getToken(tokenRequest) {
  return await cca.acquireTokenByClientCredential(tokenRequest);
}

module.exports = {
  apiConfig: apiConfig,
  tokenRequest: tokenRequest,
  getToken: getToken,
};
