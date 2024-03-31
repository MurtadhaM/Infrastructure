const express = require('express');
const app = express();

const port = 8080

app.all('*',(req, res) => {

    console.log(req.headers);
    res.status(200).send('Hello World!');
});

app.all('/' ,(req, res) => {

    console.log(req.headers);
    res.status(200).send('Hello World!');
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
} )