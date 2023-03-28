function cleverLily(input){

    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toys = 0;
    let money = 0;
    let total = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            money += 10;
            total += money - 1;
        } else {
            toys++;
        }
    }

    let moneyFromToys = toys * toyPrice;
    let savedMoney = moneyFromToys + total;

    if (savedMoney >= washingMachinePrice) {
        console.log(`Yes! ${(savedMoney - washingMachinePrice).toFixed(2)}`)
    } else {
        console.log(`No! ${(washingMachinePrice - savedMoney).toFixed(2)}`)
    }
}
cleverLily(["10","170.00","6"])