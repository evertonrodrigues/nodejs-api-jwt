const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nodejs-restful-api-jwt');

module.exports = mongoose;