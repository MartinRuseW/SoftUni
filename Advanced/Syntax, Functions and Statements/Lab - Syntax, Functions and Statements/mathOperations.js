function mathOperations(number1, number2, operator) {

    switch(operator) {
        case '+':
            console.log(number1 + number2);
            break;
        case '-':
            console.log(number1 - number2);
            break;
        case '*':
            console.log(number1 * number2);
            break;
        case '/':
            console.log(number1 / number2);
            break;
        case '%':
            console.log(number1 % number2);
            break;
        case '**':
            console.log(number1 ** number2);
            break;
        default: console.log('Invalid operator.');
    }
}
mathOperations(5, 6, '+')
mathOperations(3, 5.5, '*')
mathOperations(2, 1, '**')