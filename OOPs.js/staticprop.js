class Parent {
    constructor(userName){
        this.userName = userName;
    } 
    logMessage(){
        return `Hello ${this.userName}`;
    }
    static createId(){
        return Math.floor(Math.random()*100);
    }
}

const Akanksha = new Parent('Akanksha');
console.log(Akanksha.logMessage()); // Hello Akanksha
console.log(Parent.createId()); //0.40693700435924174

// console.log(Akanksha.createId()); // Error: Akanksha.createId is not a function
//because of static method, it can not be accessed by instance of class, it can only be accessed by parent class itself

class Child extends Parent{
    constructor(userName, email){
        super(userName)
        this.email = email
    }
}

const Prashant = new Child('Prashant', 'prashant@gmail.com')
console.log(Prashant.logMessage()) // Hello Prashant
// Prashant.createId() // Error: Prashant.createId is not a function
// here also, createId method can not be accessed by instance of Child class because it is a static method