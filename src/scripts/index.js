//---Rest parameter in new JS --- it is a parameter that we can pass multiple arguments in it and it is the last argument in parameter and has 3 dotd at the beginning(...restparameter)

// function sendCars(day, ...allCarIds) {
//   allCarIds.forEach( id => console.log(id) );
// }
// sendCars('Monday', 1,2,3);

//Destructuring Arrays
// let carIds = [1,2,5];
// let [car1, car2, car3] = carIds;// if we don't put car3 the number 5 wont's be assign 

// console.log(car1, car2, car3);
//Another version

// let carIDS = [1 ,4, 5];
// let carr1 , remainingCars;
// [carr1, ...remainingCars]= carIDS;
// console.log(car1 , remainingCars);

//--Destructuring Objects
// let car = { id:500, style: 'convertible' };
// let {id, style} = car;
// console.log(id, style);

// or like this 
// let car = { id:500, style: 'convertible' };
// let id , style;
// ( {id, style} = car);
// console.log(id, style);

//spread syntax
// function startCars(car1, car2, car3, ...rest){
//   console.log(...rest);
// }
// let carCodes = 'abcdefg';
// startCars(...carCodes);

//--parse integer
// console.log( Number.parseFloat('55.00add'));

//--controlling loop

// let i = 0;
// for (;i<12; i++){
//   if(i === 8){
//     break;// finish the loop
//   }
// }
// console.log(i);//8

// for (let x = 0; x<4 ; x++){
//   if (x === 2) {
// continue;//pass the 2
//   }
//   console.log(x);
// }

// conditional Operator
// console.log( ( 5 > 4) ? 'yes' : 'nope' );

// Block scope--is similar function scope unless we use var instead of let

// if(5 === 5 ) {
//   let message = 'Equal';

// }

// console.log(message);
// IIFE's--immediately invoked function Expression

// let app = (function() {
//   let carId = 123;

//   console.log('in function');
//   return {};
// })();
// console.log(app);

//----IIFE and Closure

// let app = (function () {
//   let carId = 123;
//   let getId = function () {
//     return carId;
//   };
//   return {
//     getId: getId
//   };
// })();
// console.log(app.getId());

// --- this

// let ob = {
//   carId: 123,
//   getId: function(){
//     return this.carId;
//   }
// };
// console.log( ob.getId() );

//---call and apply and bind
//---call
// let ob = {
//   carId: 123,
//   getId: function(){
//     return this.carId;
//   }
// };
// let newCar = { carId: 456};
// console.log( ob.getId.call( newCar) ); 

//---apply 
// let ob = {
//   carId: 123,
//   getId: function(prefix){
//     return prefix + this.carId;
//   }
// };
// let newCar = { carId: 456};

// console.log( ob.getId.apply( newCar, ['ID: ']) );

//----bind or copy the function
// let ob = {
//   carId: 123,
//   getId: function(){
//     return this.carId;
//   }
// };
// let newCar = { carId: 456};
// let newFn = ob.getId.bind(newCar);
// console.log( newFn());

//Arrow function with no parameters
// let getId = () => 123;
// console.log(getId());

//Arrow function with one parameters
// let get = prefix => prefix + 123;
// console.log(get('ID: '));

//Arrow function with two parameters
// let getI = (prefix, suffix) => prefix + 123 + suffix; //this one is not code block and has no {} 
// console.log(getI( 'ID: ','!!') );

// let getI = (prefix, suffix) => {
//   return prefix + 123 + suffix;//this one is code block with {} so we have to use RETURN
//  }; 
// console.log(getI( 'ID: ','!!') );

// some coder use let getI = _=> instead of ()

// Default Parameters
// let trackCar = function(carId, city='NY') {
//   console.log( `Tracking ${carId} in ${city}.`);
// };

// console.log( trackCar(123) );

// console.log( trackCar(123, 'Chicago') );

//-- construction function---this function is making new object car 
// function Car(){
//   console.log(this);
// }
// car(); we can't call it like that we have to use the function as blue print

// let vehicle = new Car();

//---second example
// function Carr(id){
//   this.carId = id;// attribute
//   this.start = function(){//behavior
//     console.log('start: '+ this.carId);
//   };
// }

// let vehicle1 = new Carr(123);
// vehicle1.start();

//----prototype
// function Car(id){
//   this.carId = id;
// }
// Car.prototype.start = function(){
//   console.log('start: '+ this.carId);
// };
// let myCar =new Car(12);
// myCar.start();

//--Expanding prototype
// String.prototype.hello = function(){
//   return this.toString()+ 'Hello';
// };
// console.log('foo '.hello());

//---JSON: JAVASCRIPT OBJECT NOTATION-- turning data to json and turning json to data
// let jsonIn =
// `[
//   {"carId" : 123 },
//   {"carId" : 456 },
//   {"carId" : 789 }
// ]
// `;
// let carId = JSON.parse(jsonIn);
// console.log(carId);
// console.log(JSON.stringify(carId));

//-----Array iteration
// let carIds = [
//   { carId: 123 , style: 'sedan'},
//   { carId: 456 , style: 'convertible'},
//   { carId: 789 , style: 'sedan'}
// ];

// carIds.forEach( car => console.log( car));
// carIds.forEach(
//   ( car, index) => console.log(car, index));
//   // --filtering the array for specific 
//   let convertible = carIds.filter(
//     car => car.style === 'convertible'
//   );
//   console.log(convertible);

  //-- using every method to check true or false
  // let result = carIds.every(
  //   car => car.carId > 0
  // );
  // console.log(result);
  // //--use find method
  // let car = carIds.find(
  //   car => car.carId >500
  // );
  // console.log(car);

  // ---Class
  // class Car {

  // }
  // let car = new Car();
  // console.log(car);
  
  //--constructor in the class
  // class Car {
  //   constructor(id){
  //     this.id = id; //'this' is only use inside of the class
  //   }
  // }
  // let car = new Car(107);
  // car.id = 20922;
  // console.log(car.id);

  //--Method in the class
  // class Car {
  //   constructor(id){
  //     this.id = id; 
  //   }
  //   identify(){
  //     return `Car Id: ${this.id} `;//'this' is only use inside of the class
  //   }
  // }
  // let car = new Car(107);
  // console.log(car.identify());

 //--Method in the class with argument
//  class Car {
//    constructor(id){
//      this.id = id;
//    }
//    identify(suffix){
//      return `Car Id: ${this.id} ${suffix}`;
//    }
//  }  
//  let car = new Car(107);
//  console.log(car.identify('!!!'));

//--inheritance-- vehicle would be the parent 
// class Vehicle {
//   constructor(type){
//     this.type = type;
//   }
//   start(){
//     return `Starting with: ${this.type}`;
//   }
// }

// class Car extends Vehicle { // this is without constructor

// }
// let car = new Car('Sports car');
// console.log(car.start());

// class Plane extends Vehicle {

// }
// let plane = new Plane('little plane');
// console.log(plane.start());

// -- inheritance and constructor
// class Vehicle {
//   constructor(type) {
//     this.type = type;
//   }
//   start() {
//     return `Starting with : ${this.type}`;
//     }
// }

// class Car extends Vehicle {
//  start(){
//    return 'in car start..' + super.start();// if we use it without super it will show only child method
//  }
// }
// let car = new Car('4x4 cars');

// console.log(car.start());

//--Module

// class Car {
//   constructor(id){
//     this.id = id;
//   }
// }// we move the car class to another file in model folder called car.js if we use the code below it would be undefined so we need to import the car class first
// import { Car } from './models/car.js';
//  let car = new Car (22);
//  console.log(car.id);

 //-- working with DOM

 //if we are using window withing a module we have to reference it specifically with using let, because window is global object
//  let year = 1978;
//  console.log(year);

//--Timer

// let intervalId = setInterval ( function() {
//   console.log('1 second passed');
// }, 1000) ;
// clearInterval(intervalId);

//-- location-- below give us the location of our site
// console.log(location.href);
// console.log(document.location.href);

//--selection DOM

let el = document.getElementById('first');
console.log(el);
let els = document.getElementsByClassName('p1');// we get the first two paragraph as an array
console.log(els);
let pi = document.getElementsByTagName('p');
console.log(pi);

//--Modifying DOM elements

let element = document.getElementById('first');
element.textContent = 'New content...';
element.setAttribute('foo', 'foo value');
element.classList.add('p2');
element.style.color = 'blue';
console.log(element);