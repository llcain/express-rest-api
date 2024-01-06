// require express
const express = require('express');


// express router
const router = express.Router();

// Get all users
router.get('/', (req, res) => {
    res.json({mssg: 'Get all users'})
})

// Get a single user
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get a single user'})
})

// Post a new user
router.post('/', (req, res) => {
    res.json({mssg: 'Post a new new'})
})

// Delete a new user
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a new user'})
})

// Update  a new user
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update a new user'})
})


modules.exports = router;