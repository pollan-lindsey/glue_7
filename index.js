require('dotenv').config();

const express = require('express');

const port = process.env.PORT || 3001

const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
})

app.get('/shoppinglist', (req, res) => {
    res.send
})