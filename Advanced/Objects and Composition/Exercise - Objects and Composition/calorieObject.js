function calorieObject(array) {

    let object = {};

    for (let index = 0; index < array.length; index++) {
        if (index % 2 === 0) {
            object[array[index]] = Number(array[index + 1]);
        }
    }

    console.log(object);

}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
