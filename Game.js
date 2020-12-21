class Game {
  constructor(){}
  


  //crete a function get state and listen to the value gameState in the datbase
  //listens to the value of the gamestate in "value"
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){

      console.log(data.val());
      //gets the value and stores it in the local variable gameState
      gameState = data.val();
    })
   
  }

  update(state){

    //update the value in the database with the value im passing.updates the gameState value from o to 1 and so on
    database.ref('/').update({
      gameState: state
    });
  }



  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      
      form = new Form()
      form.display();
    }
  }
}
