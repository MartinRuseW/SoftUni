function processOddPositions(array) {

    let newArray = [];

    for (let index = 0; index < array.length; index++) {
        if (index % 2 != 0) {
            newArray.push(array[index] + array[index]);
        }
    }

    return newArray.reverse().join(' ');
}
console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));