function subSum(array, startIndex, endIndex) {

    if(!Array.isArray(array)) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > array.length) {
        endIndex = array.length;
    }

    const sum = array.slice(startIndex, endIndex + 1)
    .reduce((a, b) => a + Number(b), 0);

    return sum;
}
subSum([10, 20, 30, 40, 50, 60], 3, 300);