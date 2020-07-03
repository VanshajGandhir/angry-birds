class Log {
    constructor(x,y,height,angle){
        var options ={
            restitution : 0.8       }
        this.body = Bodies.rectangle(x,y,20,height,options);
        Matter.Body.setAngle(this.body,angle)
        this.width = 20;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        stroke("green");
        strokeWeight(6);
        rect(0,0,this.width,this.height);
        pop();

    }

}