class {
    constructor(x,y){
        var options = {
            isstaStatic:true,

        }
        this.image =loadImage("walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world,this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
        ImageBitmapRenderingContext(CENTER);
        this.image(this.image,pos.x,pos.y+70,300,300);
        
    }
}