function cityRecord(city, population, treasury) {

    let object = {
        name: city,
        population: population,
        treasury: treasury
    }

    return object;
}
console.log(cityRecord('Tortuga',
7000,
15000))