class Plinko{
    constructor(x,y,){
        var options={
            "isStatic":true
        }
    this.body=Bodies.circle(x,y,15,options)
    World.add(world,this.body)

    }
    display(){
        var pos = this.body.position
        push()
        fill(255);
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,20)
        pop()
    }

}