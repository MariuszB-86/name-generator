const fs = require('fs');

const genders = ['male', 'female'];
const maleNames = ['Harry', 'Charlie', 'Thomas', 'George', 'James'];
const femaleNames = ['Emily', 'Jessica', 'Lily', 'Lauren', 'Abigail'];
const lastNames = ['Smith', 'Brown', 'Wilson', 'Williams', 'Johnson'];
const people = [];

const randChoice = (arr) => {
    
    const randomNumber = Math.floor(Math.random() * arr.length);
    const randomElement = arr[randomNumber];

    return randomElement;
};

for(let i = 0; i < 20; i++){
    const person = {};

    person.gender = randChoice(genders);

    if(person.gender === 'male'){
        person.firstName = randChoice(maleNames);
    } else{
        person.firstName = randChoice(femaleNames);
    }

    person.lastNames = randChoice(lastNames);
    person.age = Math.floor(Math.random()* 100 + 1);

    people.push(person);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
    if (err) {
        console.log('Something went wrong');
        throw err;
    }
    console.log('File has been successfully generated! Check people.json');
  });


