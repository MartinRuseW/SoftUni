function numbers(n, m) {

    let number1 = Number(n);
    let number2 = Number(m);
    let result = 0;

    for (let i = number1; i <= number2; i++) {
        result += i;
    }

    console.log(result);
}
numbers('1', '5');
numbers('-8', '20')