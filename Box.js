class Box{
constructor(x,y,width,height){
    
    var options ={
        restitution:1.0,
        friction:0.8,
        density:0.8
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
}
display (){
    var angle=this.body.angle
    var pos=this.body.position
    rectMode(CENTER);
    fill (255)
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
}
}