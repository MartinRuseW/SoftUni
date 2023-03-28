function yardGreening(input) {

    let yard = (input[0] * 7.61);
    let discount = yard * 0.18;
    let sum = yard - discount;

    console.log(`The final price is: ${sum} lv.`);
    console.log(`The discount is: ${discount} lv.`)
}
yardGreening(["550"]);