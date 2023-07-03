const express = require('express');
const app = express();

const HOST = '0.0.0.0';
const PORT = 8080;

app.get('/', (req, res) => res.send('Hello, Bob! it is working now'));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
