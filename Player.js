class Player {
    constructor(x, y){
        var options = {
            isStatic: true,
            'density': 0.3
        }

        this.image = loadImage("doc.png");

        
    this.body = Bodies.rectangle(x, y, 500, 600, options);

    this.width = 500,
    this.height = 600

    World.add(world, this.body)

    }

    
    display(){
        var pos = this.body.position

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        fill("blue");
        image(this.image, 0, 0, 500, 600);
        pop();


    }

 }