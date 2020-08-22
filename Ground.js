class Ground {
    constructor(x, y, width){
        this.x = x,
        this.y = y,
        this.width =  width,
        this.height = 75

        this.image = loadImage("Images/ground.jpg");
    }

    display(){
        fill("blue")
       imageMode(CENTER)
        image(this.image, this.x, this.y, this.width, 75);
   
    }
}