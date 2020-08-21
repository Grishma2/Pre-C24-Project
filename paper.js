class Ball{
    constructor(x,y){
        var options ={
            isStatic: false,
            restitution: 0.3,
            density: 1.2,
            friction: 0.5
        }

        this.body = Bodies.circle(x,y,70,options);

        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipse(0, 0, this.radius);
        fill(255);
        pop();
    }
}