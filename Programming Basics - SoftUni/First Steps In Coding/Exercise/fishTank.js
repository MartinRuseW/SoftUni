function fish(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);

    let volume = lenght * width * height;
    let volumeInLitres = volume / 1000;
    let litres = volumeInLitres * (1 - percentage / 100);

    console.log(litres);

}
fish(["85","75","47","17"])