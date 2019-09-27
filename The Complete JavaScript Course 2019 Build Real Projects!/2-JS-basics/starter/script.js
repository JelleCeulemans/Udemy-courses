/**************************
 * Variables and data types
 */
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith'; 
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';

var if = 23;
*/

/**************************
* Variables mutation and type coercion

var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name ?');
console.log(firstName + ' ' + lastName);
*/

/*********************
* Basic operations


var year, yearJohn, yearMark
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);

*/

/************************
* Operator precedence


var now = 2018;
var yearJohn = 1989;
var fullAge = 18; 

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 -6  // 26
console.log(x, y);


// More operationd

x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/
/************
* CODING CHALLENGE 1


var massJohn, heightJohn, massMark, heightMark;
massJohn = prompt('Fill in John\'s mass');
heightJohn = prompt('Fill in John\'s height');
massMark = prompt('Fill in Mark\'s mass');
heightMark = prompt('Fill in Mark\'s height');

var bmiJohn, bmiMark;

bmiJohn = massJohn / (heightJohn * heightJohn);
bmiMark = massMark / (heightMark * heightMark);

var result = bmiJohn < bmiMark;

alert('Is Mark\'s BMI higher than John\'s? ' + result);
*/



/**********************
* If / else statements


var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married'){
    console.log(firstName + ' is married!');
}else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;

if (isMarried){
    console.log(firstName + ' is married!');
}else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massJohn, heightJohn, massMark, heightMark;
massJohn = 192;
heightJohn = 1.95;
massMark = 78;
heightMark = 1.69;

var bmiJohn, bmiMark;

bmiJohn = massJohn / (heightJohn * heightJohn);
bmiMark = massMark / (heightMark * heightMark);

//var result = bmiJohn < bmiMark;
//console.log('Is Mark\'s BMI higher than John\'s? ' + result);

if(bmiMark > bmiJohn){
    console.log('Mark\'s BMI is higher than John\'s.');
}
else {
    console.log('John\'s BMI is higher than Mark\'s.');
}

*/

/*******************
* Boolean logic


var firstName = 'John';
var age = 16;

if (age < 13){
    console.log(firstName + ' is a boy.');
}
else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
}
else if (age >= 20 && age < 30){
    console.log(firstName + ' is a young man.');
}
else {
    console.log(firstName + ' is a man.');
}
*/

/*********************
 * The Ternary Operator and Switch statements
 */
/*
var firstName = 'John';
var age = 14;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.') 

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}*/

// Switch statement
/*
var job = 'instructor';

switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
         console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
         console.log(firstName + ' designs beautiful websites');
        break;
    default:
         console.log(firstName + ' does something else.');
}

age = 56;
switch(true){
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/


/************************
* Truthy and Falsy values and equality operation


// false values: undefined, null, 0, '', NaN
// truthy values:NOT falst values

var height;

height = 23;

if (height || height === 0){
    console.log('Variable is defined');
}
else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if(height == '23'){
    console.log('The == operation does type coercion!');
}
*/


/*************************
* CODING CHALLENGE 2


var teamJohn = (89 + 120 +103) / 3;
var teamMike = (116 + 94 + 123) / 3;
var teamMary = (97 + 134 + 105) / 3;

if (teamJohn > teamMike && teamJohn > teamMary){
    console.log('John\'s team has the highest average score: ' + teamJohn);
}
else if (teamMary > teamJohn && teamMary > teamMike){
    console.log('Mary\'s team has the highest average score: ' + teamMary);
}
else if (teamJohn === teamMike && teamJohn === teamMary){
    console.log('John\'s, Mike\'s and Mary\'s team has the same average score: ' + teamJohn);
}
else {
    console.log('Mike\'s team has the highest average score: ' + teamMike);
}
*/

/*******************
* Functions


function calculateAge(birthYear){
    return 2018 - birthYear;
}
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if  (retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years.');
    }
    else {
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/******************
* Function Statements and Expressions

// Function declaration
//function whatDoYouDo(job, firstName){
//    
//}

// Function expression
var whatDoYouDo = function(job, firstName){
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives an cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/******************
* Arrays


// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);

//Mutate array data
names[1] = 'Ben';
console.log(names);

names[names.length] = 'Mary';
console.log(names);

//Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john); 

john.pop();
john.pop();
john.pop();
john.shift();


console.log(john); 

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';

console.log(isDesigner);
*/

/**********************
* CODING CHALLENGE 3


var bill1 = 124;
var bill2 = 48;
var bill3 = 268;
var tips = new Array();
var total = new Array();

var tipCalculator = function(amount){
    if(amount < 50){
        return amount * 0.2;
    }
    else if (amount > 200){
        return amount * 0.1
    }
    else {
        return amount * 0.15;
    }
}

var tip1 = tipCalculator(bill1);
tips.push(tip1);
total.push(tip1 + bill1);

var tip2 = tipCalculator(bill2);
tips.push(tip2);
total.push(tip2 + bill2);

var tip3 = tipCalculator(bill3);
tips.push(tip3);
total.push(tip3 + bill3);

console.log(tips);
console.log(total);
*/

/***********************
* Objects and properties

// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emely'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';

console.log(jane);
*/

/*************************
* Objects and methods


var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emely'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
        this.age = 2018 - this.birthYear;
    }
};

//john.age = john.calcAge();

john.calcAge();
console.log(john);
console.log(john.age);
*/


/**********************
* CODING CHALLENGE 4


var john = {
    fullName: 'John Miller',
    mass: 92,
    height: 1.95,
    calcBmi: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Doe',
    mass: 85,
    height: 1.68,
    calcBmi: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

john.calcBmi();
mark.calcBmi();

if(john.bmi > mark.bmi){
    console.log(john.fullName + ' has the highest BMI: ' + john.bmi);
}
else if (john.bmi < mark.bmi) {
    console.log(mark.fullName + ' has the highest BMI: ' + mark.bmi);
}
else {
    console.log('They have both the same BMI.');
}

*/

/*************************
 * Loops and iteration
 */
/*
for (var i = 1; i <= 20; i+=2){
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

console.log(john[0]);

for (var i = 0; i < john.length; i++){
    console.log(john[i]);
}

// While loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}


// Continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') continue;
       console.log(john[i]); 
}

for (var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') break;
       console.log(john[i]); 
}

// Looping backwards
for (var i = john.length-1 ; i >= 0; i--){
    console.log(john[i]); 
}

*/

/****************************
 * CODING CHALLENGE 5


var tipJohn = {
    bills: [124, 48, 268, 180, 42],
    tips: new Array(),
    final: new Array(),
    calcTip: function () {
        //this.tips = new Array();
        //this.final = new Array();
        for (i = 0; i < this.bills.length; i++) {
            var percentage;
            if (this.bills[i] < 50) {
                percentage = .2;
            } else if (this.bills[i] > 200) {
                percentage = .1;
            } else {
                percentage = .15;
            }

            this.tips[i] = this.bills[i] * percentage;
            this.final[i] = this.bills[i] + this.tips[i];
        }
    }
};

var tipMark = {
    bills: [77, 475, 110, 45],
    tips: new Array(),
    final: new Array(),
    calcTip: function () {
        //this.tips = new Array();
        //this.final = new Array();
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 100) {
                percentage = .2;
            } else if (this.bills[i] > 300) {
                percentage = .25;
            } else {
                percentage = .1;
            }
            this.tips[i] = this.bills[i] * percentage;
            this.final[i] = this.bills[i] + this.tips[i];
        }

    }
};


tipJohn.calcTip();
tipMark.calcTip()
console.log(tipJohn);
console.log(tipMark);
//console.log(tipJohn.tips);
//console.log(tipJohn.final);

var calculateAverage = function (tipArray) {
    var sum = 0;
    for (var i = 0; i < tipArray.length; i++) {
        sum += tipArray[i];
    }
    return sum / tipArray.length;
}

tipMark.average = calculateAverage(tipMark.tips);
tipJohn.average = calculateAverage(tipJohn.tips);
console.log(tipMark.average, tipJohn.average);

if (tipJohn.average > tipMark.average) {
    console.log('John\'s family paid the highest average tip.: ' + tipJohn.average);
} else if (tipJohn.average < tipMark.average) {
    console.log('Mark\'s family paid the highest average tip.: ' + tipMark.average);
} else {
    console.log('They paid the same.: ' + tipJohn.average);
}
*/
