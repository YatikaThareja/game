var db,gameState;

function setup() {
  db=firebase.database();
  db.ref("gameState").on("value",(data)=>{
  gameState=data.val();
  })
  console.log(gameState);
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}