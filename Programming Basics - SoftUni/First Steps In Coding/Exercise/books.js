function books(input) {
    let pages = Number(input[0]);
    let pagesPerHours = Number(input[1]);
    let days = Number(input[2]);

    let timeForReading = pages / pagesPerHours;
    let hoursPerDay = timeForReading / days;

    console.log(hoursPerDay);

}
books(["212","20","2"])