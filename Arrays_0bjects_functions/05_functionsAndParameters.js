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
function loginUserMessage(username = "Anonymous person"){
    return `${username} just logged in`
}
let call = loginUserMessage()
console.log(call);

