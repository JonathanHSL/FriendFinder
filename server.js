// Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express App

var app = express();
var PORT = process.env.PORT || 3000;
//  bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes

require('./app/routes/api_route.js')(app); 
require('./app/routes/html_route.js')(app);
app.listen(PORT, function() {
    console.log("App listening on PORT:" + PORT);
  });
  