function sumFirstLast(array) {

    let firstNumber = array[0];
    let lastNumber = array.pop();
    let result = Number(firstNumber) + Number(lastNumber);
    console.log(result);
}
sumFirstLast(['20', '30', '40'])