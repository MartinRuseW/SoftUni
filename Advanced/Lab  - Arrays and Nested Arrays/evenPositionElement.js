function evenPositionElement(array) {

    let result = '';

    for (let index = 0; index < array.length; index++) {
        if (index % 2 === 0) {
            result += array[index] + ' ';
        }
    }

    console.log(result);
}
evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['5', '10']);