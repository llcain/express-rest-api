// import express

const express = require('express');

const app = express();

const port = 4000;

app.get('/', (req, res) => {
    res.send('server is running');
})

app.listen(port, () => {
    console.log(`listing on port,  ${port}`)
});