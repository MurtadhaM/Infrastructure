const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/api', (req, res) => {
    res.json({ message: 'Hello World!' });
});


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

module.exports = app;
