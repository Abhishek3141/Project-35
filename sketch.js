//Create variables here
var dog
var happyDog
var database
var foodS
var foodStock
function preload()
{
  //load images here
  dogimage = loadImage("images/dogImg.png")
  happyDogimage = loadImage("images/dogImg1.png")

}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(100,100)
  dog.addImage(dogimage)
  happyDog = createSprite(100,100)
  happyDog.addimage(happydogImage)
  database = forebase.database();
  foodStock=database.ref("Food")
  foodStock.on("value", readStock)
}


function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
      foodStock = foodStock - 1;
      writeStock(foodS)
      dog.addImage(happyDog)
    }

  
  drawSprites();
    text("Note: press up arrow to feed dog Milk", 250, 150)
    text("Milk Left:"+ foodStock, 250, 150);
}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1
  }

  database.ref("/").update({
    Food:x
  })
}

