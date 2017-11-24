'use strict';
const Flake = require('./Flake.js');

class SnowAnimation {
	constructor(sense, nb=10) {
        this.sense = sense;
        this.nb = nb;
    }

    start() {
        this.Flakes = [];
        for (var i = 0; i < this.nb; i++) {
            let flake = new Flake();
            this.Flakes.push(flake);
        }
        this.animate();
    }

    animate() {
        var anim = this;
        anim.sense.clear();
        this.Flakes.forEach(function(flake) {
            var y = flake.y;
            while (flake.y == y) { //to prevent from math.floor => static flake
                flake.calculate();
            }
            anim.drawFlake(flake);
        });
        anim.sense.sleep(.2);
        anim.animate();
    }

    drawFlake(flake) {
        if (flake.x > -1 && flake.y > -1 && flake.x <8 && flake.y <8) {
            this.sense.setPixel(flake.x,flake.y,flake.color);
        }
    }

};

module.exports = SnowAnimation;

