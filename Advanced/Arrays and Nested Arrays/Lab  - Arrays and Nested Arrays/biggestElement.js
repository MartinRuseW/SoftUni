function biggestElement(array) {

    let biggestNumber = array[0][0];
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            if(biggestNumber < array[i][j]) {
                biggestNumber = array[i][j];
            }
        }
    }

    return biggestNumber;
}
console.log(biggestElement([[20, 50, 10], [8, 33, 14]]));
console.log(biggestElement([[3, 5, 7, 12],  [-1, 4, 33, 2],  [8, 3, 0, 4]]));