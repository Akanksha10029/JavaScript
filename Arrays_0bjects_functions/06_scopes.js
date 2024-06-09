//Global scope and Local scope
let name = "Akanksha"
let price = 3000
if(true){
    let price = 10
    let name = "Akanksha Rani"
    console.log(`The inner user name is ${name} and the inner price is ${price}`);
}
console.log(`the outer name is ${name} and the outer price is ${price}`);


//nested functions   
function one(){
    let name = "prashant kumar"
    function two(){
        let name = "Akanksha rani"
        console.log(name);
    }
    two()
    console.log(name);
}
one()
//output: Akanksha rani
//        prashant kumar

// +++++++++++++++++ interesting ++++++++++++++

console.log(addOne(4))
function addOne(num){
    return num+1
}


// console.log(addTwo(4)); //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num){
    return num+2
}
console.log(addTwo(4));

