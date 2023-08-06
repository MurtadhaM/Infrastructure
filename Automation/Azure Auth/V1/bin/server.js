const express = require("express");
const controller = require("./controller");
const app = express();
const port = 1337;
const ejs = require("ejs");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { users: null, emails: null });
});

app.post("/sendEmail", (req, res) => {
  const { to, subject, body } = req.body;
  controller.sendMail(to, subject, body);

  res.send("Email sent");
});

const readAllemails = async () => {
  try {
    const users = await controller.listUsers();
    const mailboxes = [];
    // For each user, get ther emails
    for (let i = 0; i < users.value.length; i++) {
      const user = users.value[i].userPrincipalName;
      const mail = await controller.readMail(user);
      if (typeof mail.value == "object") {
        mailboxes.push(mail.subject);
      }
    }

    return mailboxes;
  } catch (error) {
    console.log(error);
  }
};

app.get("/listUsers", async (req, res) => {
  const users = await controller.listUsers();

  res.render("index", { users: users, emails: null });

  console.log(users.value);
});

app.listen(port, () => console.log(`listenning on port ${port}!`));
