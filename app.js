const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/database');
require('dotenv').config();

//express app creation
const app = express();

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//requests for notes and users
app.use('/notes', require('./routes/notes'));
app.use('/users', require('./routes/users'));

//defining PORT number
var PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});