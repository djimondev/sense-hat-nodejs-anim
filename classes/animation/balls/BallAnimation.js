'use strict';

class BallAnimation {
	constructor(sense) {
        this.sense = sense;
		this.sense.clear();
        this.randomizeValues();
    }

    randomizeValues() {
		this.x = Math.floor(Math.random() * 5) + 1  ;
		this.y = Math.floor(Math.random() * 5) + 1  ;
		this._x = Math.floor(Math.random() * 50)%2?1:-1;
		this._y = Math.floor(Math.random() * 50)%2?1:-1;


		this.r = Math.floor(Math.random() * 254) + 1;
		this.g = Math.floor(Math.random() * 254) + 1;
		this.b = Math.floor(Math.random() * 254) + 1;
		this._r = Math.floor(Math.random() * 50)%2?10:-10;
		this._g = Math.floor(Math.random() * 50)%2?10:-10;
		this._b = Math.floor(Math.random() * 50)%2?10:-10;

		if (this.x == this.y || this._x == this._y) {
			this.randomizeValues();
		} else {
	        this.animate();
		}
    }

    animate() {
		this.sense.setPixel(this.x,this.y,[this.r,this.g,this.b])
		this.sense.sleep(.2);
		this.sense.clear(this.x,this.y);
		this.calculate();
		this.animate();

    }

    calculate() {
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

    	
    	this.x += this._x;
    	this.y += this._y;
    }

};

module.exports = BallAnimation;