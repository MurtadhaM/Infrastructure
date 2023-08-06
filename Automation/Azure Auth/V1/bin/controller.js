require("dotenv").config();

const yargs = require("yargs");

const fetch = require("./fetch");
const auth = require("./auth");

async function sendMail(
  toMail,
  subject,
  body,
  userid = "hydra@findasnake.com"
) {
  const mailBody = {
    message: {
      subject: subject,
      body: {
        contentType: "Text",
        content: body,
      },
      toRecipients: [
        {
          emailAddress: {
            address: toMail,
          },
        },
      ],
    },
    saveToSentItems: "true",
  };

  try {
    // here we get an access token
    const authResponse = await auth.getToken(auth.tokenRequest);
    // call the web API with the access token
    const endpoint = auth.apiConfig.uri + `/v1.0/users/${userid}/sendMail`;
    const mail = await fetch.callApi(
      endpoint,
      authResponse.accessToken,
      mailBody,
      "POST"
    );

    console.log(mail);
    return mail;
  } catch (error) {
    console.log(error);

    return error;
  }
}

const readMail = async (userid = "hydra@findasnake.com") => {
  try {
    // here we get an access token
    const authResponse = await auth.getToken(auth.tokenRequest);
    // call the web API with the access token
    const endpoint = auth.apiConfig.uri + `/v1.0/users/${userid}/messages`;
    const mail = await fetch.callApi(
      endpoint,
      authResponse.accessToken,
      (METHOD = "GET")
    );
    return mail;
  } catch (error) {
    return error;
  }
};

const listUsers = async () => {
  try {
    // here we get an access token
    const authResponse = await auth.getToken(auth.tokenRequest);
    // call the web API with the access token
    const endpoint = auth.apiConfig.uri + `/v1.0/users`;
    const users = await fetch.callApi(
      endpoint,
      authResponse.accessToken,
      (METHOD = "GET")
    );

    // Filter out the users that are not in the tenant

    // display result
    return users;
  } catch (error) {
    console.log(error);
    return error;
  }
};

async function main() {
  console.log(`You have selected: ${argv.op}`);

  switch (argv.op) {
    case "sendMail":
      try {
        sendMail(argv.to, argv.subject, argv.body, argv.userid);
      } catch (error) {
        console.log(error);
      }
      break;
    case "readMail":
      try {
        readMail(argv.userid);
      } catch (error) {
        console.log(error);
      }
      break;
    default:
      console.log("Select a Graph operation first");
      break;
  }
}

exports.sendMail = sendMail;
exports.readMail = readMail;
exports.listUsers = listUsers;
