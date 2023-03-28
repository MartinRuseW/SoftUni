function histogram(input) {

    let numbers = Number(input[0]);
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;

    for (let i = 1; i <= numbers; i++) {
        if (Number(input[i]) < 200) {
            count1++;
        } else if (Number(input[i]) >= 200 && Number(input[i]) < 400) {
            count2++;
        } else if (Number(input[i]) >= 400 && Number(input[i]) < 600) {
            count3++;
        } else if (Number(input[i]) >= 600 && Number(input[i]) < 800) {
            count4++;
        } else if (Number(input[i]) >= 800) {
            count5++;
        }
    }
    let p1 = count1 / numbers * 100;
    let p2 = count2 / numbers * 100;
    let p3 = count3 / numbers * 100;
    let p4 = count4 / numbers * 100;
    let p5 = count5 / numbers * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);

}
histogram(["3","1","2","999"])