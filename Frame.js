class Frame{
    constructor(x,y,w,h){
       var options = {isStatic:true}
        this.body = Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
        this.w = w
        this.h = h

    }
    display(){
        rectMode(CENTER)
        var pos = this.body.position
        rect(pos.x,pos.y,this.w,this.h)
    }
    
}