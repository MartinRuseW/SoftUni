function cookingByNumbers(...params) {

    let number = Number(params[0]);

    for (const command of params) {
        switch (command) {
            case 'chop':
                number /= 2;
                console.log(number);
                break;
            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
                break;
            case 'spice':
                number = number + 1;
                console.log(number);
                break;
            case 'bake':
                number = number * 3;
                console.log(number);
                break;
            case 'fillet':
                number *= 0.8;
                console.log(number.toFixed(1));
                break;
        }   
    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
