 class Food  {
    constructor () {
    var foodStock,lastFed;
   this.milkimage = loadImage("Milk.png");
    }
    display () {
        var x=80,y=100;

        imageMode(CENTER);
        image(this.milkimage,720,220,70,70);

        if (this.foodStock!=0) {
           for (var i=0;i<this.foodStock;i++) {
             if (i%10==0) {
             x=80;
             y=y+50;
             }
             image(this.milkimage,x,y,50,50);
             x=x+30;
           }
        }
    }
}

function feedDog () {
    dog.addImage(happyDog);

    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
    database,ref('/').update({
        Food:foodObj.getFoodStock(),
        FeedTime:hour()
    })
}

function addFoods () {
    foodS++;
    database.ref('/').update({
        Food:foodS
    })
}
