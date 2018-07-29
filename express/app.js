const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

app.use((req, res, next) => {
    console.log('Hello');
    const err = new Error('Whoops! You have made an error.  How dare you!');
    next(err);
});

app.use((req, res, next) => {
    console.log('world!');
    next();
});

app.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('index', { name});
    } else {
        res.redirect('/hello');
    }
});

app.get('/cards', (req, res) => {
    res.render('card', {prompt: "What was Buddha's original name?", hint: "It's indian..."});
});

app.get('/hello', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.redirect('/');
    } else {
        res.render('hello');
    }
});

app.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
});

app.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');
});

app.listen(3000, () => {
    console.log('Testing Express stuff...');
});


















// JavaSscript Template Languages:
//     - Handlebars.js
//     - EJS
//     - Pug.js (Formerly Jade)