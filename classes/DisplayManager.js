'use strict';

const BallAnimation = require('./animation/balls/BallAnimation.js');
const SnakeAnimation = require('./animation/snake/SnakeAnimation.js');
const SquareAnimation = require('./animation/squares/SquareAnimation.js');
const SnowAnimation = require('./animation/snow/SnowAnimation.js');
const PixelAnimation = require('./animation/pixelfall/PixelAnimation.js');
const WeatherAnimation = require('./animation/weather/WeatherAnimation.js');

class DisplayManager {
	constructor(lowlight = false) {
        this.sense = require("sense-hat-led").sync;
		this.sense.clear();
		this.sense.lowLight = lowlight;
    }

    startWeatherAnimation() {
        this.sense = require("sense-hat-led");
        let anim = new WeatherAnimation(this.sense);
        anim.start()
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

    startPixelAnimation() {
        let anim = new PixelAnimation(this.sense, 0.1);
        anim.start()
    }

    randInt(low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low);
    }
};

module.exports = DisplayManager;
