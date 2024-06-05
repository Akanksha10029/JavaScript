// On the bais of how data is stored in memory and how it can be accessed, for this we have 2 categorizations --> 
//1. Primitive (call by value type)  -> 7 categories --> String,Number,Boolean,null,undefined,Symbol, BigInt

let anyString = "Akanksha Rani"
let anyNumber = 29
let anyBoolean = true
let anyNullvalue = null
let anyUndefined = undefined
let useEmail;

const id= Symbol("123")
const anotherId = Symbol("123")
console.log(id===anotherId);

//Although id and anotherId are having same values but because of symbol datatype it is treating it as unique values, that's why on checking for equality it is giving false.

const bigNumber = 12345678900987654n
console.log(typeof bigNumber)



//2. Non- Primitive (Reference type) --> Array, Objects, functions

//Array
const students = ["Akanksha, Prashant, Keshav, Ankit"] 

//object
let myObj = {
    name: "Akanksha Rani",
    age:20,
    UID: "22CBS10029"
}

//Functions
function myfunc(myObj){
    myObj.make = "Dosa"
}
const myDish ={
    make: "Idli",
    year:2024
}

console.log(myDish.make);
myfunc(myDish)
console.log(myDish.make);

console.log(typeof myfunc);

//++++++++++++++++++++++++++++++++++++++++

// Memory ->stack(Primitive)[In stack we get copy so, original value do not change] and Heap(Non Primitive)[In heap we get reference so, original value also get change]

let myname = "Akanksha"
let anotherName = myname
anotherName = "beauty"
console.log(anotherName);
console.log(myname);

let userone ={
    email: "lalalala@google.com",
    upi: "userone1233@sbi"
}

let usertwo = userone

usertwo.email = "buuuuuu@google.com"
console.log(userone.email);
console.log(usertwo.email);
