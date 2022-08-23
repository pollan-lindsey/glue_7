require('dotenv').config();

const express = require('express');

const port = process.env.PORT || 3002;

const app = express();

const data = require('./data.json');

// const fs = require('fs');


app.get('/', (req, res) => {
    res.send('hello world');
})


//make route to shopping list and put json file in it

app.get('/shoppinglist', (req, res) => {
    res.send(
        data[1]
    )
})
// fs.readFile('./data.json')




app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})