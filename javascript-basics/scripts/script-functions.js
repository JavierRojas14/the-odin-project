function add7(number) {
    return number + 7;
}

function multiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

function capitalize(word) {
    let firstLetter = word.slice(0, 1);
    let capitalizedFirstLetter = firstLetter.toUpperCase();
    let capitalizedWord = capitalizedFirstLetter + word.slice(1, -1);
    console.log(capitalizedWord);
}

function lastLetter(word) {
    return word.slice(-1);
}

console.log(lastLetter('abcd'));
console.log(capitalize('papappeltisduifw'));