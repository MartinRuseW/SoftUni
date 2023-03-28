function deposit(input) {
    
    let deposit = Number(input[0]);
    let months = Number(input[1]);
    let yearPercentage = Number(input[2]);

    let sum = deposit + months * ((deposit * yearPercentage / 100) / 12);

    console.log(sum);

}
deposit(["200","3","5.7"])