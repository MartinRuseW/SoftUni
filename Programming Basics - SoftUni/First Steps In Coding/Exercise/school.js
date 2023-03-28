function school(input) {

    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let liquid = Number(input[2]);
    let discount = Number(input[3]);

    let PriceForPens = pens * 5.80;
    let PriceForMarkers = markers * 7.20;
    let PriceForLiquid = liquid * 1.20;

    let finalPrice = PriceForPens + PriceForMarkers + PriceForLiquid;
    let priceAfterDiscount = finalPrice - finalPrice * discount / 100;

    console.log(priceAfterDiscount)
}
school(["2", "3", "4", "25"])