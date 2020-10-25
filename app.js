const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');
require('dotenv').config();

//express app creation
const app = express();

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//defining PORT number
var PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});