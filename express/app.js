const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Generating stuff...</h1>');
});

app.get('/hey', (req, res) => {
    res.send('<h1>Glad you could make it!</h1>');
});

app.listen(3000, () => {
    console.log('Testing Express stuff...');
});