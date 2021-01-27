class Drops{
    constructor(x,y,r)
    {   
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.1,
            density:1.2
            
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        World.add(world, this.body);

        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }
    

    display()
    {
        var dropspos=this.body.position;
        var dropsObject=this.body.radius(70);
        push()
        translate(dropspos.x, dropspos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(255,0,255)
        ellipse(0,0,this.r, this.r);
        radius:70;
        pop()
    }
}