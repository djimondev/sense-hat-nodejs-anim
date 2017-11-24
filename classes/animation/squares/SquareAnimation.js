'use strict';
const Square = require('./Square.js');

class SquareAnimation {
	constructor(sense, sleep = 0.4) {
        this.sense = sense;
        this.sleep = sleep;
    }

    start() {
        this.Squares = [];
        for (var x = 0; x < 8; x+=2) {
            for (var y = 0; y < 8; y+=2) {
                let square = new Square(x,y);
                this.Squares.push(square);
            }
        }
        this.animate();
    }

    animate() {
        var anim = this;
        this.Squares.forEach(function(square) {
            square.calculateColor();

            anim.sense.setPixel(square.x+0, square.y+0,[square.r,square.g,square.b]);
            anim.sense.setPixel(square.x+1, square.y+0,[square.r,square.g,square.b]);
            anim.sense.setPixel(square.x+0, square.y+1,[square.r,square.g,square.b]);
            anim.sense.setPixel(square.x+1, square.y+1,[square.r,square.g,square.b]);
        });
        anim.sense.sleep(this.sleep);
        anim.animate();
    }
};

module.exports = SquareAnimation;
