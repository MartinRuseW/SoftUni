function trekkingMania(input) {
    
    let groups = Number(input[0]);
    let people = 0;
    let musala = 0; monblan = 0; kilimanjaro = 0; k2 = 0; everest = 0;
    let group;

    for (let i = 1; i <= groups; i++) {
        group = Number(input[i]);
        people += group;

        if (group <= 5) {
            musala = musala + group;
        } else if (group > 5 && group <= 12) {
            monblan = monblan + group;
        } else if (group > 12 && group <= 25) {
            kilimanjaro = kilimanjaro + group;
        } else if (group > 25 && group <= 40) {
            k2 = k2 + group;
        } else if (people > 40) {
            everest = everest + group;
        }
    }

    console.log(`${(musala / people * 100).toFixed(2)}%`);
    console.log(`${(monblan / people * 100).toFixed(2)}%`);
    console.log(`${(kilimanjaro / people * 100).toFixed(2)}%`);
    console.log(`${(k2 / people * 100).toFixed(2)}%`);
    console.log(`${(everest / people * 100).toFixed(2)}%`);
}
trekkingMania(["10","10","5","1","100","12","26","17","37","40","78"])