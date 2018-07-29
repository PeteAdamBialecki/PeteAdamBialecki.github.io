const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('card', {prompt: "What was Buddha's original name?", hint: "It's indian..."});
});

module.exports = router;