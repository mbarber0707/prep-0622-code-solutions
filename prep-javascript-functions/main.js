function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutesInHours = convertHoursToMinutes(2);
console.log('minutes in hours:', minutesInHours);

function getGreeting(name) {
  return 'Hello' + ' ' + name;
}

var greeting = getGreeting('Mike');
console.log('Greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addNumsThenMultipyBy5 = addAndMultiplyBy5(10, 5);
console.log('result of adding and multiplying by 5:', addNumsThenMultipyBy5);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyNumsDivideBy5 = multiplyAndDivideBy5(35, 10);
console.log('result of multiplying and dividing by 5:', multiplyNumsDivideBy5);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(22, 7);
console.log('result of subtract two numbers:', difference);

function getCircleCircumference(radius) {
  return radius * 2 * 3.141592653589793;
}

var circleCircumference = getCircleCircumference(5);
console.log('result of getting circle cirumference of 5:', circleCircumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('Mike', 'Barber');
console.log('Users full name:', fullName);

function cube(number) {
  return number * number * number;
}
var numberCubed = cube(5);
console.log('The number cubed:', numberCubed);
