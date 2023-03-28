function food(input) {

    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegeMenu = Number(input[2]);

    let chickenPrice = chickenMenu * 10.35;
    let fishPrice = fishMenu * 12.40;
    let vegePrice = vegeMenu * 8.15;
    let deliveryPrice = 2.50;
    
    let priceForMenus = chickenPrice + fishPrice + vegePrice;
    let dessert = priceForMenus * 0.2;
    
    let sum = priceForMenus + dessert + deliveryPrice;

    console.log(sum);

}
food(["2","4","3"])