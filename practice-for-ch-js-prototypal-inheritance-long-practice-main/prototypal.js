
// Surrogate method
// Function.prototype.inherits = function (parentClass) {
//     subClass = this;
//     function Surrogate() {}
//     Surrogate.prototype = parentClass.prototype; 
//     subClass.prototype = new Surrogate(); 
//     subClass.prototype.constructor = subClass; 
// }


// Object.create method
Function.prototype.inherits = function (parentClass) {
    subClass = this;
    subClass.prototype = Object.create(parentClass.prototype);
    subClass.prototype.constructor = subClass;    
}

/*
function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);


// parent class = MovingObject
// subclass = Ship & Asteroid
*/

function MovingObject(speed) {
    this.speed = speed;
}

MovingObject.prototype.getSpeed = function() {
    console.log(`Object is moving at ${this.speed}.`);
}

function Ship (speed, color) {
    this.speed = speed;
    this.color = color;
}
Ship.inherits(MovingObject);
Ship.prototype.getColor = function() {
    return this.color;
}


function Asteroid (speed, relLocation) {
    this.speed = speed;
    this.relLocation = relLocation;
}

Asteroid.inherits(MovingObject);
Asteroid.prototype.getRelativeLocation = function() {
    return this.relLocation;
}

const movingObject = new MovingObject(45);
const ship = new Ship(45, "blue");

ship.getSpeed();
movingObject.getSpeed();
console.log(ship.getColor());
console.log(movingObject.getColor());   // should error out