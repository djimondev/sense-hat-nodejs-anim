'use strict';
const Ball = require('./Ball.js');

class BallAnimation {
	constructor(sense, nb=1) {
        this.sense = sense;
        this.nb = nb;
    }

    start() {
        this.balls = [];
        for (var i = 0; i < this.nb; i++) {
            let ball = new Ball();
            ball.randomizePosition();
            this.balls.push(ball);
        }
        this.animate();
    }

    animate() {
        var anim = this;
        this.balls.forEach(function(ball) {
            anim.eraseBall(ball);
            ball.calculate();
            anim.drawBall(ball);
        });
        anim.sense.sleep(0.2);
        anim.animate();
    }

    eraseBall(ball) {
        this.sense.setPixel(ball.x,ball.y,[0,0,0]);
    }

    drawBall(ball) {
        this.sense.setPixel(ball.x,ball.y,[ball.r,ball.g,ball.b]);
    }

}

module.exports = BallAnimation;