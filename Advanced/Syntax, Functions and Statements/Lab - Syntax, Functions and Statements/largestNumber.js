function largestNumber(number1, number2, number3) {

    let largestNum; 

    if (number1 > number2 && number1 > number3) {
        largestNum = number1;
    } else if (number2 > number1 && number2 > number3) {
        largestNum = number2;
    } else {
        largestNum = number3;
    }

    console.log(`The largest number is ${largestNum}.`);
}
largestNumber(5, -3, 16)
largestNumber(-3, -5, -22.5)