function greatestCommonDivisor(number1, number2) {

    let gcd;

    for (let index = 0; index <= number1 && index <= number2; index++) {
        if (number1 % index == 0 && number2 % index == 0) {
            gcd = index;
        }
    }

    console.log(gcd);
}
greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458)