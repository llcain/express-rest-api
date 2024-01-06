// import express
const express = require('express');

// instantiate the express app
const app = express();

// set our port
const port = 4000;

// middleware
app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
});

app.get('/', (req, res) => {
    res.send('server is running');
})
// listen on port
app.listen(port, () => {
    console.log(`listing on port,  ${port}`)
});