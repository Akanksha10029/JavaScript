const Teacher = {
    name: 'Teacher',
    makeVideo: true
}

const User = {
    name: 'User',
    login: true
}

const TeachingSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignment: true,
    fullTime: true,
    __proto__: TeachingSupport //now TASupport is a child of TeachingSupport and getting the properties of TeachingSupport
}

Teacher.__proto__ = User //now Teacher is a child of User and getting the properties of User

// Modern Way of Inheritance syntax
Object.setPrototypeOf(Teacher, User) //now Teacher is a child of User and getting the properties of User

// Example 
String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True length is ${this.trim().length}`);
}
let UserOne = "I am Prashant"
let anotherUserName = "Akanksha     "
UserOne.trueLength()
anotherUserName.trueLength()

"Keshav".trueLength() //every string has access to trueLength method