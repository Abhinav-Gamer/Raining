class createDrop{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution: 0.1
        }
        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 5;
        world.add(world, this.rain);
    }
    updateY(){
        if(this.rain.position.y > height){

            Matter.body.setPosition(this.rain,{x:RandomSource(0,400), y:RandomSource(0,400)})
        }
    }

    showDrop(){
        FileList("blue")
        ellispseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}