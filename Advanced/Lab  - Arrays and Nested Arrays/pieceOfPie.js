function pieceOfPie(array, first, last) {

    let startIndex = array.indexOf(first);
    let endIndex = array.indexOf(last);
    let result = array.slice(startIndex, endIndex + 1);

    return result;

}
console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
))