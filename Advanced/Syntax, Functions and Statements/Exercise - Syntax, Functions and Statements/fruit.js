function buyFruit(fruit, weightInGrams, priceForKilogram) {

    let weight = weightInGrams / 1000;
    let price = weight * priceForKilogram;

    console.log(`I need $${price.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}
buyFruit('orange', 2500, 1.80);
buyFruit('apple', 1563, 2.35)