function Surrogate () {}
Surrogate.prototype = Superclass.prototype 
Subclass.prototype = new Surrogate () 
Subclass.prototype.constructor = Subclass 

Function.prototype.inherits = function () {
    
}