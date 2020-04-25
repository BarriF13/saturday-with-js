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
function startCars(car1, car2, car3, ...rest){
  console.log(...rest);
}
let carCodes = 'abcdefg';
startCars(...carCodes);