class Ball {
    constructor(x, y){
        var options = {
            'density': 0.5,
            'friction': 0.5,
            'restitution':0.06
        }
        this.image = loadImage("virus.png");

        this.body = Bodies.circle(x, y, 30, options);
        this.radius = 30;

        World.add(world, this.body);
            
    }

    display(){
        var pos = this.body.position

        push();
        translate(pos.x, pos.y);

        imageMode(CENTER);
        fill("yellow");
        image(this.image, 0, 0, 30, 30);
        pop();
    }
}