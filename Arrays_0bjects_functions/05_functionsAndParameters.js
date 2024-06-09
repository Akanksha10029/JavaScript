function sayMyName (){
    console.log("A");
    console.log("K");
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("A");
}

//sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }
// addTwoNumbers("2",3)

function addTwoNumbers(num1,num2){
    let result = num1+num2;
    return result;
}

const addresult = addTwoNumbers(2,3)
// console.log(addresult);



// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// let call = loginUserMessage("Akanksha Rani")
// console.log(call);



// function loginUserMessage(username){
//     if(username===undefined){
//         console.log("Please enter a user name");
//         return
//     }
//     return `${username} just logged in`
// }
// let call = loginUserMessage()
// console.log(call);



// function loginUserMessage(username){
//     if(!username){
//         console.log("please enter your name");
//         return
//     }
//     return `${username} just logged in`
// }
// let call = loginUserMessage()
// console.log(call);


// passing default value to username
// function loginUserMessage(username = "Anonymous person"){
//     return `${username} just logged in`
// }
// let call = loginUserMessage()
// console.log(call);



// rest operator(...)
// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,450,4500));



function calculateCartPrice(price1, price2, ...num1){
    return {price1,price2,num1}
    //return [price1,price2,num1]
}
console.log(calculateCartPrice(200,450,4500,630,679));
//output: [ 4500 ] --> 200 is stored in price1 and 450 is stored in price2.


//functions with objects
const user ={
    username:  "Akanksha Rani",
    price: 300       
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)

handleObject({
    username: "Akanksha",
    price: 450
}) //we can pass the arguments here as well i.e while calling the function.




//functions with Arrays
function handleObject2(anyobject2){
    //return anyobject2[2]
    return anyobject2

}
console.log(handleObject2([200,654,450]));
