class Paper{
    constructor(x,y,radius){
        
        var options={
            isStatic:false,
            restituution:0.3,
            friction:0.5,
            density:1.2

        }
    
    this.body = Bodies.circle(x, y, radius/2, options);
    this.r= radius;
   // this.height = height;
   this.image=loadImage("paper.png");
    
    World.add(world, this.body);
    }

 display(){
console.log("in display");

    var pos=this.body.position
    push();
    imageMode(CENTER);
    strokeWeight(3);
    fill(255,0,255)
    
    translate(pos.x, pos.y);
    //ellipse(0,0,this.r,this.r);
    image(this.image,0,0,this.r,this.r);
    pop();

}
}
