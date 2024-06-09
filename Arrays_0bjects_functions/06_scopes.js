//Global scope and Local scope
let name = "Akanksha"
let price = 3000
if(true){
    let price = 10
    let name = "Akanksha Rani"
    console.log(`The inner user name is ${name} and the inner price is ${price}`);
}
console.log(`the outer name is ${name} and the outer price is ${price}`);