// Modern Way syntax to write string which is called string interpolation

const name ="Akanksha Rani"
const repoCount =50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// Another way also by using "new"

const myName = new String('Shinchan-Nohara');

console.log(myName.length); //15

console.log(myName[0]) //S
console.log(myName[4]) //c

console.log(myName.__proto__) // output = {} --> object --> it is not empty, check it in browser console and then we can access all the methods present in it like .length, .string, .toLowerCase, .bold etc. (Check all methods by inspecting in browser --> in console) 

console.log(myName.toUpperCase()); //SHINCHAN-NIHARA
console.log(myName.charAt(2)); //i
console.log(myName.indexOf('n')); //3

const newName = myName.substring(0,4) //in substring, we can't pass negative parameters
console.log(newName);

// Doubt 
const anotherNameString =myName.slice(-8,0)
console.log(anotherNameString);


