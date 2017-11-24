'use strict';

const BallAnimation = require('./animation/balls/BallAnimation.js');
const SnakeAnimation = require('./animation/snake/SnakeAnimation.js');
const SquareAnimation = require('./animation/squares/SquareAnimation.js');
const SnowAnimation = require('./animation/snow/SnowAnimation.js');

class DisplayManager {
	constructor(lowlight = false) {
        this.sense = require("sense-hat-led").sync;
		this.sense.clear();
		this.sense.lowLight = lowlight;
    }

    startSnowAnimation() {
        let anim = new SnowAnimation(this.sense,25);
        anim.start()
    }

    startSnakeAnimation() {
        let anim = new SnakeAnimation(this.sense,1);
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

    randInt(high, low) {
        return Math.random() * (high - low) + low;
    }
};

module.exports = DisplayManager;
