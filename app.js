const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const AuthController = require('./auth/AuthController');
const UserController = require('./user/UserController');

app.use('/users', UserController);
app.use('/api/auth', AuthController);

module.exports = app;