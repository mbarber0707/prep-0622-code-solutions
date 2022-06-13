var person = {
  firstName: 'Mike',
  lastName: 'Barber',
  hobby: 'sports'
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;

console.log('person full name:', fullName);
person.job = 'substitute teacher';
console.log('This persons job is:', person.job);
person.previousJob = 'Loss prevention';
console.log('This persons previous job is:', person.previousJob);
console.log('The complete person object:', person);
