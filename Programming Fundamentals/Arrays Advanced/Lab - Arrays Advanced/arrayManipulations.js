function arrayManipulations(commands) {
    let array = commands
        .shift()
        .split(' ')
        .map(Number);
    for (let i = 0; i < commands.length; i++) { // въртим по броя на командите
        let [command, firstNum, secondNum] = commands[i].split(' '); // взимаме съответната команда, число и индекс. П.С. Първо бих взела само командата и само, когато тя е insert ще взимам secondNum(който реално е индекса)
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);


        switch (command) {
            case "Add":
                add(firstNum); // подаваме параметър
                break;
            case "Remove":
                remove(firstNum); // подаваме параметър
                break;
            case "RemoveAt":
                removeAt(firstNum); //подаваме параметър
                break;
            case "Insert":
                insert(firstNum, secondNum); // подаваме параметри
                break;
        }
    }
    function add(el) {
        array.push(el)
    }
    function remove(num) {
        array = array.filter(el => el !== num);
    }
    function removeAt(index) {
        array.splice(index, 1);
    }
    function insert(num, index) {
        array.splice(index, 0, num);
    }
    console.log(array.join(' '))
}
arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])