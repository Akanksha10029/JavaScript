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
const anotherNameString =myName.slice(-7,15)
console.log(anotherNameString);

let newString = "   Prashant "
console.log(newString);
console.log(newString.trim()); //trim() method removes whitespace from both ends of a string and returns a new String, without modifying the original string


console.log(newString.trimStart()); //Trim whitespaces from the start.
console.log(newString.trimEnd()); //Trim whitespaces from the end.


const url = "https://Akanksha%20Rani.com/Akanksha%20Javascript"

console.log(url.replace("%20", "_")); //here only first occurance of %20 get removed, not all the %20 present in the string.
console.log(url.replace(/%20/g, "_")); //Here to replace global (g) flag is used to replace all the instances of %20 with"_".

console.log(url.includes("beauty")); // here it checks that "beauty" includes in the string or not.

console.log(myName.split("-"));


