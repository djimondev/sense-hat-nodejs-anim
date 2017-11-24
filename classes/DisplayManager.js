'use strict';

const BallAnimation = require('./animation/balls/BallAnimation.js');
const SnakeAnimation = require('./animation/snake/SnakeAnimation.js');
const SquareAnimation = require('./animation/squares/SquareAnimation.js');

class DisplayManager {
	constructor(lowlight = false) {
        this.sense = require("sense-hat-led").sync;
		this.sense.clear();
		this.sense.lowLight = lowlight;
    }

    startSnakeAnimation() {
        let anim = new SnakeAnimation(this.sense,this.randInt(1,4));
        anim.start()
    }

    startBallAnimation() {
        let anim = new BallAnimation(this.sense,this.randInt(1,8));
        anim.start()
    }

    startSquareAnimation() {
        let anim = new SquareAnimation(this.sense, 0.1);
        anim.start()
    }

    randInt(_in, _out) {
        return Math.floor(Math.random() * _out) + _in;
    }
};

module.exports = DisplayManager;
