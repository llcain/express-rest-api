// import express
const express = require('express');

// require user routes in route folder
const userRoutes = require('./routes/users')

// instantiate the express app
const app = express();

// set our port
const port = 4000;

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

// routes
app.use('/api/users', userRoutes)


app.get('/', (req, res) => {
    res.send('server is running');
})
// listen on port
app.listen(port, () => {
    console.log(`listing on port,  ${port}`)
});