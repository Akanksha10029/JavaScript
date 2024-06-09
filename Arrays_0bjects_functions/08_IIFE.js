//IIFE -> Immediately Invoked Function Expressions

//Why do we use IIFE?
// sometimes pollution occurs due to global scope's whatever like declaration or its variabes so. to avoid this pollution we use IIFE

//"Named" IIFE
(function connection(){
    console.log(`DB connected`);
})();

//first parentheses() is for function definition and second is for execution. 
//At last to end this invoke function we have to use semicolon :


// "Unnamed" IIFE by arrow function
(() => {
    console.log(`DB 2 connected`);
})();


((name) => {
    console.log(`DB2 is connected by ${name}`);
})("Akanksha");
