var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

require("./db/mongo.connection")

var users = require('./routes/users');
var usuarios = require("./routes/usuarios")

var app = express();

const cors = require('cors');

// Habilitando o CORS
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  })

app.use('/api/v1/users', users);
app.use('/usuario/', usuarios);


module.exports = app;
