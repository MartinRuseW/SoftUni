function createCarDecorators() {
    return {
        hasClima: function(obj) {
            obj.temp = 21;
            obj.tempSettings = 21;
            obj.adjustTemp = function() {
                if (obj.temp < obj.tempSettings) {
                    obj.temp += 1;
                } else if (obj.temp > obj.tempSettings) {
                    obj.temp -= 1;
                }
            };
            return obj;
        },
        hasAudio: function(obj) {
            obj.currentTrack = null;
            obj.nowPlaying = function() {
                if (obj.currentTrack) {
                    console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
                }
            };
            return obj;
        },
        hasParktronic: function(obj) {
            obj.checkDistance = function(distance) {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (distance >= 0.1 && distance < 0.25) {
                    console.log("Beep! Beep!");
                } else if (distance >= 0.25 && distance < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log("");
                }
            };
            return obj;
        }
    }
}
const assemblyLine = createCarDecorators();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

