function townsToJSON(array) {

    let result = [];

    for (let index = 1; index < array.length; index++) {
        let tokens = array[index].split(/\s*\|\s*/g);
        let town = tokens[1];
        let latitude = Number(tokens[2]).toFixed(2);
        let longitude = Number(tokens[3]).toFixed(2);

        let object = {
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        }

        result.push(object);
    }

    console.log(JSON.stringify(result));
}
townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)