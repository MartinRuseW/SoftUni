function excursionSale(input) {
    let sea = 680;
    let mountain = 499;
    let vacationOne = Number(input[0]);
    let vacationTwo = Number(input[1]);

    let totalPrice = 0;

    for (let i = 2; i < input.length; i++) {
        let command = input[i];
        if (command === "Stop") {
            break;
        } else if (command === "sea" && vacationOne > 0) {
            totalPrice += sea;
            vacationOne -= 1;
        } else if (command === "mountain" && vacationTwo > 0) {
            totalPrice += mountain;
            vacationTwo -= 1;
        }
    }
    if (vacationOne === 0 && vacationTwo === 0) {
        console.log(`Good job! Everything is sold.\nProfit: ${totalPrice} leva.`);
    } else {
        console.log(`Profit: ${totalPrice} leva.`);
    }
}
excursionSale(["2", "2", "sea", "mountain", "sea", "sea", "mountain"])