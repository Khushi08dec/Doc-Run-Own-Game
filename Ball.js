class Ball {
    constructor(x, y){
        var options = {
            'denisty': 0.5,
            'friction': 0.5,
            'restitution':0.6
        }

        this.body = Bodies.circle(x, y, 18, options);
        this.radius = 30;

        World.add(world, this.body);
            
    }

    display(){
        var pos = this.body.position

        push();
        translate(pos.x, pos.y);

        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(0, 0, 18, 18);
        pop();
    }
}