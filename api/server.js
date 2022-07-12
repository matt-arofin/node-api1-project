// BUILD YOUR SERVER HERE
// Import model and expressJS
const express = require('express');
const model = require('./users/model');

// Instantiate express instance
const server = express();

// "Global MiddleWare" <--- ask what is meant? or rewatch class recording
server.use(express.json());

// Create endpoints
/* | Method | URL            | Description                                                                                            |
| ------ | -------------- | ------------------------------------------------------------------------------------------------------ |
| POST   | /api/users     | Creates a user using the information sent inside the `request body`.                                   |
| GET    | /api/users     | Returns an array users.                                                                                |
| GET    | /api/users/:id | Returns the user object with the specified `id`.                                                       |
| DELETE | /api/users/:id | Removes the user with the specified `id` and returns the deleted user.                                 |
| PUT    | /api/users/:id | Updates the user with the specified `id` using data from the `request body`. Returns the modified user | */

// POST
server.post('/api/users', (req, res) => {
    // Use insert function to create new user
    const body = req.body
    if(body.name  == null || body.bio == null){
        res.status(400).json({message: 'Please provide name and bio for the user'})
    }
    model.insert(body).then(user => {
        res.status(201).json(user)
    });
    model.find(body).then
})



module.exports = server; // EXPORT YOUR SERVER instead of {}
