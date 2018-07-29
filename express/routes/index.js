const express = require('express');
const router = express.Router();

// router.use((req, res, next) => {
//     console.log('Hello');
//     const err = new Error('Whoops! You have made an error.  How dare you!');
//     err.status = 500;
//     next(err);
// });

// router.use((req, res, next) => {
//     console.log('world!');
//     next();
// });

router.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('index', { name});
    } else {
        res.redirect('/hello');
    }
});

router.get('/hello', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.redirect('/');
    } else {
        res.render('hello');
    }
});

router.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
});

router.post('/goodbye', (req, res) => {
    res.clearCookie('username');
    res.redirect('/hello');
});

module.exports = router;