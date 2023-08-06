const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));
const ejs = require('ejs');
app.set('view engine', 'ejs');
/**
 * Index page
 */
app.get('/', (req, res) => {
    res.render('index');
    }
);

app.get('/Emails', (req, res) => {
    res.render('Emails');
    }
);

app.get('/Emails/:id', (req, res) => {
    res.render('Emails');
    }
);

app.get('/Files', (req, res) => {
    res.render('Files');
    }
);

app.get('/Files/:id', (req, res) => {
    res.render('Files');
    }
);

app.get('/People', (req, res) => {
    res.render('People');
    }
);

app.get('/People/:id', (req, res) => {
    res.render('People');
    }
);



app.listen(port, () => console.log(` app listening on port ${port}!`));

