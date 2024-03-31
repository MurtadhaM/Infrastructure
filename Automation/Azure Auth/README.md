# AAD & Graph API


<img src="https://learn.microsoft.com/en-us/graph/images/microsoft-graph.png" >

- [ ] 1. What is AAD?
- [ ] 2. What is Graph API?
- [ ] 3. Why do we need to use the Graph API?
- [ ] 4. How to use the Graph API?

 
    
    
    
    


# SCENARIOS
----------------
##### Delegated (user) authentication
- [ ] Enables user authentication to get access on behalf of a user
- [ ] Accesses the user's profile
- [ ] Lists the user's mailbox
- [ ] Sends an email from the user's mailbox

##### Application (service) authentication
- [ ] Enables app-only authentication to get access without a user
- [ ] Lists users in Azure Active Directory  
- [ ] Lists the ALL's mailbox
- [ ] Sends an email from the ALL's mailbox

### Useful Tools
- [Graph Explorer](https://developer.microsoft.com/graph/graph-explorer/)
- [MSAL.js](https://github.com/AzureAD/microsoft-authentication-library-for-js/)
- [Graph Toolkit](https://docs.microsoft.com/en-us/graph/toolkit/overview)
- [Graph Management Toolkit Playground](https://mgt.dev/)
- [Graph Explorer](https://developer.microsoft.com/graph/graph-explorer/)
 - [Code Samples](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/samples/msal-browser-samples/ChromiumExtensionSample)
# What is AAD?
- AAD is a cloud-based identity and access management service that provides single sign-on and multi-factor authentication to help protect your users from 99.9% of cyber attacks.

# What is Graph API?
- The Microsoft Graph API is a RESTful web API that provides access to Microsoft Cloud service resources. It can be used to access data across Office 365, Windows 10, and Enterprise Mobility + Security. The API provides programmatic access to the same rich data and intelligence that is available in the Microsoft 365 user experience.

 
 # Why do we need to use the Graph API?
- The Graph API provides a single endpoint to access data across Office 365, Windows 10, and Enterprise Mobility + Security. It provides a single API that can be used to access data across Office 365, Windows 10, and Enterprise Mobility + Security. The API provides programmatic access to the same rich data and intelligence that is available in the Microsoft 365 user experience.


# How to use the Graph API?
### 1. Register an application in Azure AD
- Sign in to the [Azure portal](https://portal.azure.com) using either a work or school account or a personal Microsoft account.
- If your account gives you access to more than one tenant, select your account in the top right corner, and set your portal session to the Azure AD tenant that you want.
- In the left-hand navigation pane, select the **Azure Active Directory** service, and then select **App registrations**.
- Select **New registration**. On the **Register an application** page, set the values as follows.
- Set **Name** to `GraphTutorial`.
- Set **Supported account types** to **Accounts in any organizational directory and personal Microsoft accounts (e.g. Skype, Xbox, Outlook.com)**.
- Under **Redirect URI**, set the first drop-down to `Web` and set the value to `https://localhost:44321/`.

### 2. Get an access token
- The Microsoft Graph API requires an access token for authorization. The access token is obtained from Azure AD and is sent with each request to the API. The access token contains information about the user or application calling the API and the permissions that the app has been granted. The access token is a JSON web token (JWT) that is digitally signed by Azure AD. The token contains the following claims:
- `aud` - The audience claim, which is the URI of the Microsoft Graph API. The value is `https://graph.microsoft.com`.
- `iss` - The issuer claim, which is the URI of the Azure AD v2.0 endpoint. The value is `https://sts.windows.net/{tenantid}/`.

### 3. Make a request to the Microsoft Graph API
Send a request to the Microsoft Graph API. The request must include the following:
- The resource URI for the Microsoft Graph API. The resource URI is `https://graph.microsoft.com/v1.0/me`.
- The access token that you obtained in the previous step.
- The following code shows how to make a request to the Microsoft Graph API. The code uses the `HttpClient` class to send the request and the `JObject` class to parse the response.
