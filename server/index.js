const express = require('express');
const app = express();
const Connection = require('./database/db.js');
const dotenv = require('dotenv');
dotenv.config();

Connection();
const PORT = process.env.PORT | 8000;

app.listen(PORT, () => console.log("Server Running on Port Number "+PORT));