function biggerHalf(array) {

    let secondHalf = Math.floor(array.length / 2);
    let sorted = array.sort((a, b) => a - b);
    let result = sorted.slice(secondHalf);
    return result;
}
console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));