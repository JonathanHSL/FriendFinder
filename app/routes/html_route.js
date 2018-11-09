//Dependencies
var path = require('path');

//ROUTING

module.exports = function(app){
  //home page
  app.get('/survey.html', function (req, res) {
    res.sendFile(path.join(__dirname, "./../public/survey.html"));
  });

  //a USE route
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname, "./../public/index.html"));
  });
};