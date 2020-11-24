class Slingshot{
    constructor(bodyA, point2){
        var options = {
            bodyA: bodyA,
            pointB: point2,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB = point2;
        World.add(world, this.sling);
    }

    display(){
        if (this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
        
            strokeWeight(4);
            line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }

    detach() {
        this.sling.bodyA = null;
    }
    
}