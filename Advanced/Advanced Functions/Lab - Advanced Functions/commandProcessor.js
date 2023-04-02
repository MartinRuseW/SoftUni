function commandProcessor() {

    let result = '';

    return {
        append(string) {
            result += string; //helloagain
        },
        removeStart(number) {
            result = result.slice(number);   //loaagain
        },
        removeEnd(number) {
            result = result.slice(0, -number); //loa
        },
        print() {
            console.log(result);
        }
    }
}
let firstZeroTest = commandProcessor();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();