// Object literal 
const user = {
    name: "John",
    age: 25,
    email: "john@gmail.com",
    isLoggedIn: true,
    getUsersDetails: function(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`);
        console.log('data fetched successfully'); 
        console.log(this); 
    }
}
console.log(`Is User logged in: ${user.isLoggedIn}`);
user.getUsersDetails();


// Constructor function 
function User(name, age, isLoggedIn){
    this.name = name; //(this.name is a variable and name is a parameter which is passed to the function)
    this.age = age;
    this.isLoggedIn = isLoggedIn;

    return this; // this is optional, if you don't return anything then it will return this by default
}
// new keyword is used to create an object of a function
// new is used to create a constructor function 

const UserOne = new User('John', 25, true);
console.log(UserOne)
console.log(UserOne.constructor); // [Function: User]

const UserTwo = new User('Smith', 30, false);
console.log(UserTwo);
console.log(UserTwo instanceof User); // true
