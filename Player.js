class Player {
    constructor(x, y){
        var options = {
            'friction': 0.8,
            'density': 1.0,
            'restitution': 0.3
        }
    this.body = Bodies.rectangle(x, y, 50, 60, options);

    this.width = 50,
    this.height = 60

    World.add(world, this.body)

    }

    hit(){

    }
    
    display(){
        var pos = this.body.position
       pos.x = mouseX
       pos.y =mouseY
        rectMode(CENTER);
        fill("blue");
        rect(pos.x, pos.y, this.width, this.height);


    }
 }