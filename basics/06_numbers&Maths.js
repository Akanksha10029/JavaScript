const score =new Number(400)
console.log(score);
console.log(score.toString().length);
console.log(typeof score);
console.log(score.toFixed(2));

const otherNumber =567.89
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN"));


//+++++++++++++++++ Maths +++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-6));
console.log(Math.round(4.56));
console.log(Math.ceil(4.01));
console.log(Math.floor(4.2));
console.log(Math.min(2,3,5,9));

console.log(Math.random());
console.log((Math.random()*10)+1);

console.log(Math.floor(Math.random()*10)+1);


// ++++++++++++++ very important ++++++++++++++++++++
const min = 10
const max =20
console.log(Math.floor(Math.random()*(max - min + 1))+min);