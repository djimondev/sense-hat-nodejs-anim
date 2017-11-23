'use strict';

const BallAnimation = require('./animation/balls/BallAnimation.js');
const SnakeAnimation = require('./animation/snake/SnakeAnimation.js');

class DisplayManager {
	constructor() {
        this.sense = require("sense-hat-led").sync;
		this.sense.clear();
		this.sense.lowLight = true;
		this.startSnakeAnimation();
    }

    startSnakeAnimation() {
        let anim = new SnakeAnimation(this.sense,this.randInt(1,4));
        anim.start()
    }

    startBallAnimation() {
        let anim2 = new BallAnimation(this.sense,this.randInt(1,8));
        anim2.start()
    }

    randInt(_in, _out) {
        return Math.floor(Math.random() * _out) + _in;
    }
};

module.exports = DisplayManager;