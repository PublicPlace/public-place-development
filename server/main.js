import {Meteor} from 'meteor/meteor'
import {Players} from './../imports/api/players'

//  Runs as soon as the server process is finished starting
// ARROW-FUNCTION > Meteor.startup(function() {
Meteor.startup(() => {

// Object Spread Operator
    let user = {
      name: 'Michael',
      location: 'Rgbg',
      age: 0
    };

    let person = {
      ...user,
      age: 25 // age => 25
    };
    let person2 = {
      age: 25,
      ...user// age => 0
    };
    // console.log(Person);

// Object Property Shorthand

let bike = 'Scott'
let stuff = {
  laptop: 'Mac',
  bike //entspricht bike: bike;
};
// console.log(stuff);






class Person {
  constructor(name = 'Anonymous'/* default value*/, age = 0){
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    // return 'Hi I am ' + this.name + '!'
    // ▼ using es6 template strings ▼
    return `Hi I am ${this.name}.`;
  }
  getPersonDescription() {
    // ▼ using es6 template strings ▼
    return `${this.name} is ${this.age} years old.`;
  }
}

class Employee extends Person{
  constructor(name, age, title) {
    //  ▼ call paretns constructor function ▼
    super(name, age);
    this.title = title;
  }
  hasJob() {
    return !!this.title;
  }
  getGreeting() {
    if (this.title) {
      return `Hi I am ${this.name}. I work as a ${this.title}`;
    } else {
      return super.getGreeting()
    }
  }
}

class Programmer extends Person{
  constructor(name, age, preferedLanguage = 'assembly') {
    //  ▼ call paretns constructor function ▼
    super(name, age);
    this.preferedLanguage = preferedLanguage;
  }
  getGreeting() {
    if (this.preferedLanguage) {
      return `Hi I am ${this.name}. I am a ${this.preferedLanguage} developer.`
    } else {
      return super.getGreeting()
    }
  }
}
let me4 = new Programmer('Ralph',33);
console.log(me4.getGreeting());

let me3 = new Programmer('Bob',39, 'swift');
console.log(me3.getGreeting());

let me2 = new Employee('Bob',39, 'admin');
console.log(me2.getPersonDescription());
console.log(me2.hasJob());
console.log(me2.getGreeting());

let me = new Employee('Michael',39);
console.log(me.getPersonDescription());
console.log(me.hasJob());
console.log(me.getGreeting());
// let you = new Person();
// console.log(you);
});
