//truthy and falsy values:
// falsy: 
// false, 0, -0, BigInt 0n,"", null, undefined, NaN
// truthy: 
// "0", "false", [], " ",{}, function(){}, ....

const emptyArr = [22]
if (emptyArr.length === 0) {
    console.log("Array is empty");  
}
else{
    console.log("Got the user array");
}


const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    console.log("Onject is empty"); 
}
else{
    console.log("got the user's object");
}



// Nullish coalescing operator (??) :check on null and undefined

// https://www.youtube.com/watch?v=0P_YvC6Gg0c


let val1;
// val1 = 5 ?? 10  //5
// val1 = null ?? 10  //10
// val1 = undefined ?? 20 //20
val1 = null ?? 10 ?? 20 //10
console.log(val1);

// Ternary operator
// condition ? true : false

const age = 20
age < 18 ? console.log("Can't vote"): console.log("Eligible to vote");