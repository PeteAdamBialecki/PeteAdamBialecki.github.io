const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.send('<h1>Generating stuff...</h1>');
});

app.get('/hey', (req, res) => {
    res.send('<h1>Glad you could make it!</h1>');
});

app.listen(3000, () => {
    console.log('Testing Express stuff...');
});

// JavaSscript Template Languages:
//     - Handlebars.js
//     - EJS
//     - Pug.js (Formerly Jade)