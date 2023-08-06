const express = require('express');
const morgan = require('morgan');
const path = require('path');
const DEFAULT_PORT = process.env.PORT || 3000;
clientId=  process.env.CLIENT_ID,
authority= 'https://login.microsoftonline.com/'  + process.env.TENANT_ID,
clientSecret= process.env.CLIENT_SECRET;
// Replace the file contents with the following.


// initialize express.
const app = express();

// Initialize variables.
let port = DEFAULT_PORT;

// Configure morgan module to log all requests.
app.use(morgan('dev'));

// scripts route


//GET SECRET
const dotenv = require('dotenv');
dotenv.config();
// Setup MSAL
const msal = require('@azure/msal-node');

const fs = require('fs');
let CONFIG = fs.readFileSync('./public/authConfig.js', 'utf8');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/scripts/authConfig.js', (req, res) => {
    CONFIG = CONFIG.replace('process.env.CLIENT_ID', `\"${clientId}\"`);
    CONFIG = CONFIG.replace('process.env.TENANT_ID', `\"${authority}\"`);
    CONFIG = CONFIG.replace('process.env.CLIENT_SECRET', `\"${clientSecret}\"`);
    res.status(200).contentType('text/javascript').send(CONFIG);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/'));
});




// Start the server.
app.listen(port);
console.log(`Listening on port ${port}...`); 