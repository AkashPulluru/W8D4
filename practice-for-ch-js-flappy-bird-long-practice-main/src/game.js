export default class FlappyBird {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
  }
}
/*
Create an animate method in your Game class. For now, this method will only call animate on your Level class. 
(Don't forget to import Level!)

As you may have noticed, you haven't created an instance of Level yet. Make a new method on Game called restart. 
restart will create a new instance of Level and store that as an instance variable. Be sure to pass the dimensions
of the canvas to the constructor of Level.

Next, restart will call animate on the Game class which should cause the background to be drawn to the screen! 
Be sure to pass the ever important context to animate in the Level when you invoke it in restart.

Finally, it's time to see some color on that canvas! You need to do a few final things to make this happen:
import Game into index.js.

Find the canvas using getElementById.
Create a new instance of Game using the canvas you found.
Call restart to trigger the first render.
Do all this after the DOM has loaded.
*/

require('./level.js')

function animate() {
  self.level.animate();
}

function restart() {
  self.level = new Level();
}