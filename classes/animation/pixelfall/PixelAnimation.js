'use strict';
class PixelAnimation {
	constructor(sense, sleep = 1) {
        this.sense = sense;
        this.sleep = sleep;
        this.init();
    }

    init() {
        this.O = [0,0,0];
        this.pixels = [
                        this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O,
                        this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O,
                        this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O,
                        this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O,
                        this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O,
                        this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O,
                        this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O,
                        this.O, this.O, this.O, this.O, this.O, this.O, this.O, this.O
                        ];
        this.sense.clear();
    }

    start() {
        this.currentpixel = this.randInt(0, 7);
        this.currentpixel -= 8; //to begin à the first line
        this.animate();

    }

    animate() {
        var anim = this;
        if (anim.currentPixel + 8 > 55) {
            anim.start();
            return;
        } else {
            if (anim.pixels[anim.currentpixel+8] == anim.O) { //check if pixel at bottom
                anim.pixels[anim.currentpixel] = anim.O;
                anim.currentpixel += 8;
                anim.pixels[anim.currentpixel] = [anim.randInt(0,255),anim.randInt(0,255),anim.randInt(0,255)];
                anim.sense.setPixels(anim.pixels);
                anim.sense.sleep(this.sleep);
                anim.animate(); 
                return;
            } else {
                for (var i=0; i<8; i++) { //check if matrice is not full
                    if (anim.pixels[i] == anim.O) {
                        anim.start();
                        return;
                    }
                }
                // if full => reset
                anim.sense.sleep(this.sleep);
                anim.init();
                anim.start();
            }
            
        }
    }

    randInt(low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low);
    }

};

module.exports = PixelAnimation;