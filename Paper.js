class Paper{

constructor(x,y,r){
var options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}    
this.body=Bodies.circle(x,y,r,options)
this.r=r 
this.image=loadImage("paper.png")
World.add(world,this.body)
} 
display(){
    var paperPos=this.body.position;		

    push()
    translate(paperPos.x, paperPos.y);
    //strokeWeight(4);
    fill(128,128,128)
    imageMode(CENTER)
    //rect(0,0,this.w, this.h);
    image(this.image,0,0,this.r*2,this.r*2)
    pop()

}   
}
