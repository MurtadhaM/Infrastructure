// MSAL.js v2 exposes several account APIs, logic to determine which account to use is the responsibility of the developer
const account = publicClientApplication.getAllAccounts()[0];

const accessTokenRequest = {
  scopes: ["user.read"],
  account: account,
};

publicClientApplication
  .acquireTokenSilent(accessTokenRequest)
  .then(function (accessTokenResponse) {
    // Acquire token silent success
    let accessToken = accessTokenResponse.accessToken;
    // Call your API with token
    callApi(accessToken);
  })
  .catch(function (error) {
    //Acquire token silent failure, and send an interactive request
    if (error instanceof InteractionRequiredAuthError) {
      publicClientApplication
        .acquireTokenPopup(accessTokenRequest)
        .then(function (accessTokenResponse) {
          // Acquire token interactive success
          let accessToken = accessTokenResponse.accessToken;
          // Call your API with token
          callApi(accessToken);
        })
        .catch(function (error) {
          // Acquire token interactive failure
          console.log(error);
        });
    }
    console.log(error);
  });
const config = {
    auth: {
      clientId: "e825454e-2a21-405a-a100-c0e571e1890e",
      redirectUri: "http://localhost:8080/", //defaults to application start page
      postLogoutRedirectUri: "",
    },
  };
  

  const loginRequest = {
    scopes: ["User.ReadWrite"],
  };
  
  let accountId = "";
  
  const myMsal = new PublicClientApplication(config);
  
  myMsal
    .loginPopup(loginRequest)
    .then(function (loginResponse) {
      accountId = loginResponse.account.homeAccountId;
      // Display signed-in user content, call API, etc.
    })
    .catch(function (error) {
      //login failure
      console.log(error);
    });
    