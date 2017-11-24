'use strict';
class Pixel {
	constructor(x,y) {
        this.x = x;
        this.y = y;
        this.animate();
    }

    animate() {
        this.y -= 1;
        this.r = this.randInt(0,255);
        this.g = this.randInt(0,255);
        this.b = this.randInt(0,255);
        this.color = [this.r,this.g,this.b];
    }

    randInt(low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low);
    }
};

module.exports = Pixel;