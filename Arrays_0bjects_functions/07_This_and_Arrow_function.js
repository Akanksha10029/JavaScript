const user = {
    userName: "Akanksha",
    price: 199,

    welcomeMessage: function(){
        console.log(`${this.userName}!! Welcome to website`);// "this" keyword refers current context
        console.log(this);
    }
}

// user.welcomeMessage()
// user.userName = "Prashant" //new current context for userName
// user.welcomeMessage()

//console.log(this);



//only inside the function we can see what is inside "this" keyword

// function one(){
//     console.log(this);
// }
// one()
// output:
//<ref *1> Object [global] {
    // global: [Circular *1],
    // clearImmediate: [Function: clearImmediate],
    // setImmediate: [Function: setImmediate] {
    //   [Symbol(nodejs.util.promisify.custom)]: [Getter]
    // },
    // clearInterval: [Function: clearInterval],
    // clearTimeout: [Function: clearTimeout],
    // setInterval: [Function: setInterval],
    // setTimeout: [Function: setTimeout] {...................



// function one(){
//     let userName = "Akanksha"
//     console.log(this.userName);
// }
// one() // Output: undefined


// let data = function one(){
//     let userName = "Akanksha"
//     console.log(this.userName);
// }
// console.log(data()); //output: undefined




//+++++++++++++ Arrow function ++++++++++++++
// let one = () => {
//     let userName = "Akanksha"
//     console.log(this.userName);
// }
// one()     //output: undefined


// let one = () => {
//     let userName = "Akanksha"
//     console.log(this);
// }
// one() // output: {}




// ++++++++++ Pure Arrow function in detail++++++++++++++++

// const addition = (num1, num2)=>{
//     return num1+num2
// }
// console.log(addition(8,4));


//Implicit return
// const addition = (num1, num2)=> num1+num2 //without parentheses is also correct but {} is not allowed, otherwise "return" should be used.

// const addition = (num1, num2)=> (num1+num2) //use parentheses() not braces{}
// console.log(addition(8,4));



//if  want to return an Object then still we have to enclose that object in parentheses eg.-->

const addition = ()=> ({userName:"Akanksha"}) //it's like a return statement but return keyword is not used, that's why it is returning {userName:"Akanksha"} 
console.log(addition());

