function classHierarchy() {

    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        changeUnits(unit) {
            this.units = unit;
        }

        meteresConvertion(num) {
            if (this.units === 'm') {
                return num /= 100;
            }
            if (this.units === 'mm') {
                return num *= 10;
            }
            return num;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }

        get area() {
            this.radius = this.meteresConvertion(this._radius);
            return this.radius ** 2 * Math.PI;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        constructor(width, heigth, units) {
            super(units);
            this._width = width;
            this._heigth = heigth;
        }

        get area() {
            this.width = this.meteresConvertion(this._width);
            this.heigth = this.meteresConvertion(this._heigth);
            return this.width * this.heigth;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.heigth}`
        }
    }
    return {
        Figure,
        Circle,
        Rectangle,
    }
}