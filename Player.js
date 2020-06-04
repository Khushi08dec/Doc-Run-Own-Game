class Player {
    constructor(x, y){
        this.x = x,
        this.y = y,
        this.width = 150,
        this.height = 300

        this.image = loadImage("Images/doc.png");
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
    }

}