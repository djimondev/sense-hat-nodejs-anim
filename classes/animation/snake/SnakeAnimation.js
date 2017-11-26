'use strict';
const Snake = require('./Snake.js');
class SnakeAnimation {
    constructor(sense, nb=1) {
        this.sense = sense;
        this.nb = nb;
    }

    start() {
        this.Snakes = [];
        for (var i = 0; i < this.nb; i++) {
            let snake = new Snake();
            snake.randomizePosition();
            this.Snakes.push(snake);
        }
        this.animate();
    }

    animate() {
        var anim = this;
        this.Snakes.forEach(function(snake) {
            snake.calculate();
            anim.drawSnake(snake);
            anim.eraseSnake(snake);
        });
        anim.sense.sleep(0.2);
        anim.animate();
    }

    eraseSnake(snake) {
        var sense = this.sense;
        var point = snake.points[0];
        sense.setPixel(point[0],point[1], [0,0,0]);
    }

    drawSnake(snake) {
        var sense = this.sense;
        snake.points.forEach(function(point) {
            sense.setPixel(point[0],point[1],[snake.r,snake.g,snake.b]);
        });
    }
}

module.exports = SnakeAnimation;