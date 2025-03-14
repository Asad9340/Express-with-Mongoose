const express = require('express');
const  route  = require('./src/routes/api');
const app = new express();

app.use("/api/v1", route);


module.exports = app;