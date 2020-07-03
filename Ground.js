class Ground {
    constructor(x,y,width,height){
        var option = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,option)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        fill("brown"); 
        rectMode(CENTER);   
        rect(pos.x,pos.y,400,20);
    }
}   