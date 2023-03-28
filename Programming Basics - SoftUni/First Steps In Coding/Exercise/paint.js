function paint(input) {

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let nylonPrice = (nylon + 2) * 1.50;
    let paintPrice = ((paint * 0.1) + paint) * 14.50;
    let thinnerPrice = thinner * 5;
    let bagPrice = 0.40;

    let priceForMaterials = nylonPrice + paintPrice + thinnerPrice + bagPrice;
    let priceForWorkers = (priceForMaterials * 0.3) * hours;
    let sum = priceForMaterials + priceForWorkers;

    console.log(sum)
}
paint(["10","11","4","8"])