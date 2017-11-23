'use strict';

const BallAnimation = require('./balls/BallAnimation.js');

class DisplayManager {
	constructor() {
        this.sense = require("sense-hat-led").sync;
		this.sense.clear();
    }

    startBallAnimation(sense) {
        let anim = new BallAnimation();
        anim.start()
    }
};

module.exports = DisplayManager;