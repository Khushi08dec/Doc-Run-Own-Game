class Ball {
    constructor(x, y){
        this.x = x,
        this.y = y,
        this.width = 30
        this.height = 30

        this.image = loadImage("Images/virus.png");

    }

    move(){
        this.y = this.y + 5;
    }

    hits(a){
        if(a.x - this.x < a.width/2 + this.width/2
            && this.x - a.x < a.width/2 + this.width/2
            && a.y - this.y < a.height/2 + this.height/2
            && this.y - a.y < a.height/2 + this.height/2){
              return true;
            } 

    }

    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, 30, 30);
    }
   
    }
    
