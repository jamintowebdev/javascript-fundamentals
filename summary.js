var tableLength = 12;
var tourDestinations = ['Bangladesh', 'India', 'Nepal', 'Sri lanka', 'Bhutan', 'Mal dip', 'Paris'];

tourDestinations.indexOf('Bhutan');

var fourthDestination = tourDestinations[4];
tourDestinations[1] = 'London';

tourDestinations.push('USA');

tourDestinations.pop();

if (tourDestinations[1] == 'Nepal') {
    console.log('Pahare ahare ahare');
}
else if (tourDestinations[1] == 'Chaina') {
    console.log('China tor kase jamu na');
}
else if (tourDestinations.length == 4) {
    console.log('aro taka asa besi ghurmu');
}
else {
    console.log('Kothao jamu na bashay thakmu ar mosha marmu');
}


var eggPrice = 32;
var myBudget = 32;

if (eggPrice <= myBudget) {
    console.log('ami dim khamu');
}

if (eggPrice >= myBudget) {
    console.log('ami panta vaat khabo');
}


console.log(tourDestinations);
console.log(fourthDestination);
