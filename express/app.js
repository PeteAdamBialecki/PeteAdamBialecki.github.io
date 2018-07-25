const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cards', (req, res) => {
    res.render('card', {prompt: "What was Buddha's original name?", hint: "It's indian..."});
});

app.listen(3000, () => {
    console.log('Testing Express stuff...');
});

// JavaSscript Template Languages:
//     - Handlebars.js
//     - EJS
//     - Pug.js (Formerly Jade)