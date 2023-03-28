function basketball(input) {

    let price = Number(input[0]);
    let shoes = price * 0.60;
    let outfit = shoes * 0.80;
    let ball = outfit / 4;
    let accessories = ball / 5;

    let sum = price + shoes + outfit + ball + accessories;

    console.log(sum)
    
}
basketball(["365"])