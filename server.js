require('dotenv').config();

// require express
const express = require('express');

// require mongoose
const mongoose = require('mongoose');


// require user routes in route folder
const userRoutes = require('./routes/users')

// instantiate the express app - express app
const app = express();



// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

// routes
app.use('/api/users', userRoutes)

// react to request - set up route handler - routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the user app'});
})

// connect to db

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen on port
        app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port', process.env.PORT)
        });
    })
    .catch((error) => {
        console.log(error)
    })

