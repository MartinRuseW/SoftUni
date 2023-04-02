function townPopulation(array) {

    let object = {};

    for (const tokens of array) {
        let [city, population] = tokens.split('<->');
        population = Number(population);
        
        if (!object.hasOwnProperty(city)) {
            object[city] = population;
        } else {
            object[city] += population;
        }
    }

    for (const key in object) {
        console.log(`${key}: ${object[key]}`);
    }
}
townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)