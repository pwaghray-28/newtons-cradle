class Rope{
    constructor(bodyA,bodyB,xOffset,yOffset){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:xOffset,y:yOffset}
        }
        this.rope = Matter.Constraint.create(options)
        World.add(world,this.rope)
        this.x = xOffset
        this.y = yOffset
    }
    display(){
        var pos = this.rope.bodyA.position
        var posb = this.rope.bodyB.position
        line(pos.x,pos.y,posb.x+this.x,posb.y+this.y)
        
    }
}