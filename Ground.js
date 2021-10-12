class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.ground = bodies.rectangle(450,390,900,20); 
      World.add(world,this.ground)
      
      
    
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y,900,20);
    }
  };
