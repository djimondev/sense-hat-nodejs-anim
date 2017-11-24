'use strict';
class Square {
	constructor(x,y) {
        this.randomizePosition();
        this.x = x;
        this.y = y;
        this.randomizeColor();
    }

    randomizeColor() {
		this.r = this.randInt(1,254);
		this.g = this.randInt(1,254);
		this.b = this.randInt(1,254);
		this._r = this.randInt(0,50)%2?10:-10;
		this._g = this.randInt(0,50)%2?10:-10;
		this._b = this.randInt(0,50)%2?10:-10;
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

    randInt(_in, _out) {
        return Math.floor(Math.random() * _out) + _in;
    }

};

module.exports = Square;