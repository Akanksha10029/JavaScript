// 2 Ways to declare objects --> literal and constructor
//from Constructor --> Singleton
//from Literal --> not singleton

//Objects Literal

const mySymbol = Symbol("key1")
const JsUser = {
    name: "Akanksha",
    "Full Name":"Akanksha Rani",
    Brother: "Prashant",
    [mySymbol]:"mykey1",
    Age: 20,
    location: "Ambala",
    Marks: {
        mst1: [20,19,11,15,18],
        mst2: [18,13,15,17,19]
    },
    isLoggedIn: true,
    lastLoggedIn: ["saturday","sunday"]

}

// console.log(JsUser.Marks.mst1[4]);
// console.log(JsUser["Brother"]);
// console.log(JsUser["isLoggedIn"]);
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mySymbol]);
// console.log(typeof mySymbol);

// JsUser.Brother = "Prashant Kumar"
// console.log(JsUser.Brother);

// Object.freeze(JsUser)
// JsUser["Full Name"] = 'Beauty'
// console.log(JsUser);

JsUser.greeting1 = function(){
    console.log("Hello Aadi");
    return null;
}
console.log(JsUser.greeting1());

JsUser.greeting2 = function(){
    console.log(`Hello Aadi, ${this.Marks.mst1}`);
    return null;
}
console.log(JsUser.greeting2());

 
