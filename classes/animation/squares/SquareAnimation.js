'use strict';
const Square = require('./Square.js');

class SquareAnimation {
	constructor(sense, nb=1) {
        this.sense = sense;
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
        });
        anim.sense.sleep(.2);
        anim.animate();
    }
};

module.exports = SquareAnimation;