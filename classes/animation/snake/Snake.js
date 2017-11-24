'use strict';
const SnakePoint = require('./SnakePoint.js');
class Snake {
    constructor() {
        this.points = [];
        this.size = this.randInt(3,8);
        this.randomizePosition()
    }

    randomizePosition() {
        this.x = this.randInt(1,7);
        this.y = this.randInt(1,7);
        this._x = this.randInt(-1,1);
        this._y = this.randInt(-1,1);

        if (this.x == this.y || (this._x == 0 && this._y == 0)|| (this._x != 0 && this._y != 0)) {
            this.randomizePosition();
        } else {
            this.randomizeColor();
            let p = new SnakePoint(this.x, this.y, this.r, this.g, this.b)
            this.points.push(p);
        }

    }

    randomizeColor() {
        this.r = this.randInt(0,255);
        this.g = this.randInt(0,255);
        this.b = this.randInt(0,255);
        this._r = this.randInt(0,9)%2?10:-10;
        this._g = this.randInt(0,9)%2?10:-10;
        this._b = this.randInt(0,9)%2?10:-10;
    }

    calculate() {
        if(this.x + this._x > 7) {
            this.x = -1;
        } else if(this.x + this._x < 0) {
            this.x = 8;
        } 

        if(this.y + this._y > 7) {
            this.y = -1;
        } else if(this.y + this._y < 0) {
            this.y = 8;
        }


        this.x += this._x;
        this.y += this._y;


        this.r += this._r;
        this.g += this._g;
        this.b += this._b;

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

        if (this.randInt(0,4) == 3) {
            if (this._x !=0) {
                this._x = 0;
                this._y= this.randInt(0,9)%2?1:-1;
            } else {
                this._y = 0;
                this._x= this.randInt(0,9)%2?1:-1;
            }
        }

        let p = new SnakePoint(this.x, this.y, this.r, this.g, this.b)
        this.points.push(p);
        if (this.points.length > this.size) {
            this.points.shift();
        }
    }

    randInt(low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low);
    }

};

module.exports = Snake;