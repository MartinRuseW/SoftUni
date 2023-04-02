function lowestPricesInCities(array) {

    let object = {};

    for (let index = 0; index < array.length; index++) {

        const element = array[index];

        const [town, product, price] = element.split(' | ');

        if (!object[product]) {
            object[product] = {};
        }
        object[product][town] = Number(price);
    }

    let result = [];

    for (const key in object) {
        let sorted = Object.entries(object[key]).sort((a, b) => a[1] - b[1]);
        let [town, price] = sorted[0];
        result.push(`${key} -> ${price} (${town})`)
    }

    console.log(result.join('\n'));
}
lowestPricesInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)