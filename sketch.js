var dog,dogimage; 
var happyDog,happyDogimage; 
var database;
var foodS, foodStock;
var fedTime,lastFed;
var foodObj;  
var milk,milkimage;

function preload()
{
  dogimage = loadImage("dogImg.png");
  happyDogimage = loadImage("dogImg1.png");
  
}

function setup() {
  createCanvas(500,500);
  
 dog = createSprite(50,180,20,50);
 dog.addImage("dog",dogimage);
 dog.scale=0.5;

 

 database = firebase.database();

 foodStock=database.ref('Food');
 foodStock.on("value",readStock);

 feed=createButton("Feed the dog");
 feed.position(700,95);
 feed.mousePressed(feedDog);

 addFood=createButton("Add Food");
 addFood.position(800,95);
 addFood.mousePressed(addFoods);

 
}

function draw() {  
  background(46,139,87);
  fedTime=database.ref('feedTime')
  fedTime.on("value",function(data){
     lastFed=data.val();
      })
  
 //if(keyWentDown(UP_ARROW)){
   //writeStock(foodS);
   //dog.addImage("happyDog",happyDogimage)
   //}

drawSprites();
fill(255,255,254);

    textSize(15);
    if (lastFed<=12) {
    text("Last Feed : "+lastFed%12+"PM",350,30);
    } else if (lastFed==0) {
        text("Last Feed : 12 AM",350,30);
    } else {
        text("LastFeed : "+lastFed + " AM",350,30);
    }
}

function readStock (data)  {
 foodS = data.val();
}

function writeStock (x)  {
  if (x<=0) {
    x=0
  } else {
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}



