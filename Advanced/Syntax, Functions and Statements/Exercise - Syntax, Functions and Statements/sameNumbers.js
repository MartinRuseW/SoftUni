function sameNumbers(number) {

    let sameDigits = true;
    let numberString = number.toString();
    let sumOfDigits = 0;

    for (let index = 0; index < numberString.length; index++) {
        if (numberString[index] !== numberString[0]) {
            sameDigits = false;
        }
        sumOfDigits += Number(numberString[index]);
    }

    console.log(sameDigits);
    console.log(sumOfDigits);
}
sameNumbers(2222222);
sameNumbers(1234)