function diagonalSum(matrix) {

    let mainDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let index = 0; index < matrix.length; index++) {
        mainDiagonal += matrix[index][index];
        secondaryDiagonal += matrix[index][matrix.length - index - 1];
    }

    console.log(mainDiagonal + " " + secondaryDiagonal);
}
diagonalSum([[20, 40], [10, 60]]);