function oddAndEvenSum(number) {

    let numberAsString = number.toString();
    let oddSum = 0;
    let evenSum = 0;
    let numberAsStringLength = numberAsString.length;

    for (let i = 0; i < numberAsStringLength; i++) {

        let singleNumber = Number(numberAsString[i]);

        if (singleNumber % 2 === 0) {
            evenSum += singleNumber;
        } else {
            oddSum += singleNumber;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
oddAndEvenSum(1000435)