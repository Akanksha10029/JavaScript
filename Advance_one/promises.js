// promise takes function as an argument which has two parameters resolve and reject
const promiseOne = new Promise(function(resolve, reject) {
    //Do Async operation
    //DB calls, cryptography, file system, network calls

    setTimeout(() => {
        console.log("Async operation 1 completed");
        resolve(); //it will call then() method
    }, 1000);
})

// promiseOne.then() is used to handle the success case i.e it is related to resolve
promiseOne.then(()=>{
    console.log("Promise 1 resolved");
    
})

//promise two
//we can use it in one go
new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Async operation 2 completed");
        resolve(1); //it will call then() method
    }, 1000);
}).then(()=>{
    console.log("Promise 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve({userName: "John", age: 25, email: "john@gmail.com"});
    },1000)
})

promiseThree.then((user)=>{
    console.log(user);  
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({userName: "John", age: 25, email: "john@gmail.com"})
        }
        else{
            reject("Error: Something went wrong");
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.age;
}).then((age)=>{ //it will take the value returned by the previous then block, this is called chaining
    console.log(age);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{ //it will run in any case
    console.log("Promise 4 completed either by giving success or failure");
})