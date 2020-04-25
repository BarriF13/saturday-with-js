//---Rest parameter in new JS --- it is a parameter that we can pass multiple arguments in it and it is the last argument in parameter and has 3 dotd at the beginning(...restparameter)

function sendCars(day, ...allCarIds) {
  allCarIds.forEach( id => console.log(id) );
}
sendCars('Monday', 1,2,3);