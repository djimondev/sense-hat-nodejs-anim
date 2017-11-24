'use strict';
class Flake {
	constructor(x,y,angle) {
        this.x = this.randInt(-1,9);
        this.y = this.randInt(-1,9);
        this.angleRange = 0.1;
        this.HALF_PI = 1.5707964;

        this.angle = this.randInt(0,100)/100.*this.angleRange+this.HALF_PI-this.angleRange/2;
        this.inc = this.randInt(1,3);
        if (this.inc == 3) {
            this.color=[85,85,85];
        } else if (this.inc == 2) {
            this.color=[170,170,170];
        } else {
            this.color = [255,255,255];
        }

    }

    calculate() {
        var _x = Math.floor(this.inc*Math.cos(this.angle));
        var _y = Math.floor(this.inc*Math.sin(this.angle));
        this.x += _x;
        this.y += _y;

        this.angle += this.randInt(-100, 100)/10000.; //

        if (this.y > 9)
        {
          this.y = -1;
          this.x = this.randInt(-1,9);
          this.angle = this.randInt(0,100)/100.*this.angleRange+this.HALF_PI-this.angleRange/2;
        }
    }

    randInt(low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low);
    }
};

module.exports = Flake;