const express = require('express');
const app = express();

app.get('/health', (req, res) => {
    res.send(200);
});

app.get('/ping', (req, res) => {
    res.send('pong');
});

module.exports = app;