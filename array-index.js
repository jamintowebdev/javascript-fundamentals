var books = ['hablu', 'bolod', 'chowoddhogusti', 'battery', 'paracitamol', 'gymnasium'];

var batteryIndex = books.indexOf('battery');
console.log(batteryIndex);

var numbers = [45, 98, 65, 72, 52, 63];
var index = numbers.indexOf(63);
console.log(index);


// if the array value does not exist in the array, then it will output -1

var numbers2 = [45, 98, 65, 72, 52, 63];
var index2 = numbers2.indexOf(152);
console.log(index2);


var secondIndex = books[2];
console.log(secondIndex);


var thirdIndex = books[22];
console.log(thirdIndex);

console.log(numbers);

// add and remove element from an array
// to change or add value:- 
numbers[1] = 95;
numbers[4] = 21;
console.log(numbers);