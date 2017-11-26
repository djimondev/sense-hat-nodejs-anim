'use strict';
class WeatherAnimation {
	constructor(sense) {
        this.sense = sense;
        this.request = require("request");
        this.querystring = require("querystring");
        this.city = 'Quetigny';
    }

    start() {
        this._request();
    }

    _request() {
        var anim = this;
        this.request({
            method: 'GET',
            url: 'http://www.prevision-meteo.ch/services/json/' + anim.city,
            headers: {
                'cache-control': 'no-cache' 
            }
        }, function (error, response, body) {
            var b = JSON.parse(body);
            var name = b.city_info.name;
            var sunrise = b.city_info.sunrise;
            var sunset = b.city_info.sunset;
            var day_long = b.fcst_day_0.day_long;
            var tmin = b.fcst_day_0.tmin;
            var tmax = b.fcst_day_0.tmax;
            var condition = b.fcst_day_0.condition;

            var txt = name+" : "+condition +" ";
            txt+=tmin+" a "+tmax+" degres ";
            txt+="soleil "+sunrise+" a "+sunset;

            console.log(txt);
            anim.sense.showMessage(txt, .08, [255, 255, 255],[0, 0, 0]);
            anim.sense.sleep(2);
            anim._request();
        });
    }


    randInt(low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low);
    }

};

module.exports = WeatherAnimation;