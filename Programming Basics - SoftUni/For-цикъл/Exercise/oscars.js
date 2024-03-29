function oscars(input) {

    let name = input[0];
    let startingPoints = Number(input[1]);
    
    for(let index = 3; index < input.length; index++) {
        if (index % 2 !== 0) {
            let points = index + 1;
            let total = input[index].length * Number(input[points]) / 2;
            startingPoints += total;
        }
        if (startingPoints > 1250.5) {
            break;
        }
    }
    if (startingPoints > 1250.5) {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${startingPoints.toFixed(1)}!`)
    } else {
        console.log(`Sorry, ${name} you need ${(1250.5 - startingPoints).toFixed(1)} more!`)
    }
}
oscars(["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"]);
oscars(["Sandra Bullock","340","5","Robert De Niro","50","Julia Roberts","40.5","Daniel Day-Lewis","39.4","Nicolas Cage","29.9","Stoyanka Mutafova","33"])