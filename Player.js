class Player {
  constructor(){}

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }



  // / is not but player count here.. or the root and in game .js its the game state 

  //if coutn is 1 player count will be updated 1 or 2 it wil become 2

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }


  // name: name means the name is from database and name is sandra .. player 1 or player2 or lplyaer2.. all this happens in the database.. 
  //we are not doing it
  update(name){
    var playerIndex = "player" + playerCount;
    database.ref(playerIndex).set({
      name:name
    });
  }
}
