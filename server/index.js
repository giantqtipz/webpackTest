const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
});

app.get('/app.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/app.js'))
});

app.listen(3000, ()=> console.log('server up'));
