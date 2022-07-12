// const express = require('express')

const server = require('./api/server');

const port = 5001;

// server.use(express.json())

server.listen(port, () => {
    console.log(`server is now listening on port ${port}`)
})
// START YOUR SERVER HERE
