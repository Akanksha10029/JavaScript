console.log(Math.PI) // 3.141592653589793;
Math.PI = 2;
console.log(Math.PI) // 3.141592653589793;

//Even after trying to change the value of Math.PI, it is not getting changed. This is because Math.PI is a read-only property.
//for this, we can use Object.getOwnPropertyDescriptor() method to get the property descriptor of Math.PI

const piDescriptor = Object.getOwnPropertyDescriptor(Math, 'PI') // {value: 3.141592653589793, writable: false, enumerable: false, configurable: false}
console.log(piDescriptor) //we can see that writable is false, so we can not change the value of Math.PI

const friends = {
    name: 'Devanshi',
    age: 20,
    occupation: 'Student',
    class: function(){
        console.log("22CBS-1(A)");
    }
}

console.log(Object.getOwnPropertyDescriptor(friends, 'name')) // {value: 'Devanshi', writable: true, enumerable: true, configurable: true};
//so here we can see that writable is true, so we can change the value of name property of friends object
friends.name = 'Akanksha';
console.log(`Updated Name: ${friends.name}`) // Updated Name: Akanksha

//we can also use Object.defineProperty() method to change the property descriptor of an object
Object.defineProperty(friends, 'name', {writable: false});
friends.name = 'Prashant';
console.log(Object.getOwnPropertyDescriptor(friends, 'name')) // {value: 'Akanksha', writable: false, enumerable: true, configurable: true};

//Now if we do enumerable: false, then we would not be able to iterate over the property of the object

Object.defineProperty(friends, 'name', {enumerable: false});
for(let [key, value] of Object.entries(friends)){
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`); // here we can see that name property is not getting printed because enumerable is false for name property
    }
}