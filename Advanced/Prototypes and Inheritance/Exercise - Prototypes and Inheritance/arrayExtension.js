(function arrayExtension() {

    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        let arr = [];
        for (let i = n; i < this.length; i++) {
            arr.push(this[i]);
        }
        return arr;
    };

    Array.prototype.take = function (n) {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(this[i]);
        }
        return arr;
    };

    Array.prototype.sum = function () {
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            sum += this[i];
        }
        return sum;
    };

    Array.prototype.average = function () {
        let avrSum = 0;
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            sum += this[i];
        }
        avrSum = sum / this.length;
        return avrSum;
    };
})();