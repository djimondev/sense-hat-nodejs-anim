'use strict';
class Square {
	constructor(x,y) {
        this.x = x;
        this.y = y;
        this.randomizeColor();
    }

    randomizeColor() {
		this.r = this.randInt(0,255);
		this.g = this.randInt(0,255);
		this.b = this.randInt(0,255);
		this._r = this.randInt(0,9)%2?10:-10;
		this._g = this.randInt(0,9)%2?10:-10;
		this._b = this.randInt(0,9)%2?10:-10;
    }

    calculateColor() {
        if(this.r>244) {
            this.r -= 10;
            this._r = -10;
        }
        if(this.r<11) {
            this.r += 10;
            this._r = 10;
        }
        if(this.g>244) {
            this.g -= 10;
            this._g = -10;
        }
        if(this.g<11) {
            this.g += 10;
            this._g = 10;
        }
        if(this.b>244) {
            this.b -= 10;
            this._b = -10;
        }
        if(this.b<11) {
            this.b += 10;
            this._b = 10;
        }

        this.r += this._r;
        this.g += this._g;
        this.b += this._b;
    }

    randInt(low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low);
    }

};

module.exports = Square;
