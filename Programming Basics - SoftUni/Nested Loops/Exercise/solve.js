function equalSumsEvenOddPosition(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let printLine = "";
 
    for (let i = firstNumber; i <= secondNumber; i++) {
        let currentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit
            }
        }
        if (oddSum === evenSum) {
            printLine += ` ${i}`
        }
    }
    console.log(printLine);
}