var newFriends = require('./../data/friends.js');

module.exports = function(app){

  app.get('/api/friends', function(req,res){
    res.json(newFriends);
  });

  app.post('/api/friends', function(req,res){

    var newScores = req.body.scores;
    var currentScores = [];
 
    var bestMatch = 0;

   
    for(var i = 0; i < newFriends.length; i++){
      var scoresDiff = 0;
     
      for(var j = 0; j < newScores.length; j++){
        scoresDiff += (Math.abs(parseInt(newFriends[i].scores[j]) - parseInt(newScores[j])));
      }

     
      currentScores.push(scoresDiff);
    }

    for(var i = 0; i < currentScores.length; i++){
      if(currentScores[i] <= currentScores[bestMatch]){
        bestMatch = i;
      }
    }

   
    
    res.json(newFriends[bestMatch]);

    
    newFriends.push(req.body);
  });
};