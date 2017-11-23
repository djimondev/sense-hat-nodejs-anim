'use strict';
class Ball {
	constructor() {
        this.randomizePosition();
    }

    randomizePosition() {
        this.x = this.randInt(0,8);
        this.y = this.randInt(0,8);
        this._x = this.randInt(0,50)?1:-1;
        this._y = this.randInt(0,50)?1:-1;
        if (this.x == this.y) {
            this.randomizePosition();
        } else {
            this.randomizeColor();
        }
    }

    randomizeColor() {
		this.r = this.randInt(1,254);
		this.g = this.randInt(1,254);
		this.b = this.randInt(1,254);
		this._r = this.randInt(0,50)%2?10:-10;
		this._g = this.randInt(0,50)%2?10:-10;
		this._b = this.randInt(0,50)%2?10:-10;
    }

    calculate() {
        this.calculatePosition();
        this.calculateColor();
    }

    calculatePosition() {
        if(this.x>6) {
            this._x = -1
        }
        if(this.x<1) {
            this._x = 1
        }
        if(this.y>6) {
            this._y = -1
        }
        if(this.y<1) {
            this._y = 1
        }

        this.x += this._x;
        this.y += this._y;
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

module.exports = Ball;