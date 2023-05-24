const express = require('express');
const router = require('./routes/appRouter.js');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 5001;

app.use('/api', router);

app.get('/', (req, res) => {
    res.send("Welcome to Our Restaurant!")
});

app.listen(port , (req, res) => {
    console.log(`Listening on port ${port}`);
})