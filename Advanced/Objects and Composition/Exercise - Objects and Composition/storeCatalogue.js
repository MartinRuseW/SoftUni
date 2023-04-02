function storeCatalogue(array) {

    let object = {};

    for (const line of array) {
        let [product, price] = line.split(' : ');
        let firstLetter = product[0];

        if (!object.hasOwnProperty(firstLetter)) {
            object[firstLetter] = {};
        }
        object[firstLetter][product] = price;
    }

    let sortedCatalogue = Object.keys(object).sort((a, b) => a.localeCompare(b));

    for (const key of sortedCatalogue) {
        console.log(key);
        let sortedProduct = Object.keys(object[key]).sort((a, b) => a.localeCompare(b));

        for (const element of sortedProduct) {
            console.log(` ${element}: ${object[key][element]}`);
        }
    }
}
storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)