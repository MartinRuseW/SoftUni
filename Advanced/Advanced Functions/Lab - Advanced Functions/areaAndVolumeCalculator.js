function areaAndVolumeCalculator(areaFunc, volFunc, input) {

    const shapes = JSON.parse(input);

    let result = [];

    for (const shape of shapes) {
        const area = areaFunc.call(shape);
        const volume = volFunc.call(shape); 

        let object = {
            area,
            volume
        }

        result.push(object)
    }
    return result;
}
function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}
console.log(areaAndVolumeCalculator(area, vol, 
    `[{"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}]`
    ))