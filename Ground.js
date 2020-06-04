class Ground {
    constructor(x, y, width){
        this.x = x,
        this.y = y,
        this.width =  width,
        this.height = 75
    }

    display(){
        fill("blue")
        rectMode(CENTER)
        rect(this.x, this.y, this.width, 75);
   
    }
}