// for of loop

const arr = [1,2,3,4,5,6,7,8,9,10]

for (const value of arr) {
    console.log(value)
}

const greetings = "Hello ji"
for (const greet of greetings) {
    if (greet==" ") {
        continue
    }
    console.log(`Each character is ${greet}`);
}

// maps

// const map = new Map()
// map.set("IN","India")
// map.set("EU","Europe")
// map.set("EN","England")

// console.log(map);

// //map with for of loop
// for (const [key, value] of map) {
//         console.log(key ,":-",value);
    
// }

// Let's check for usgae of "for of" with object. will it work? Nope

// const game = {
//     game1: "Resident Evil",
//     game2: "NFS"
// }
// for (const [key, value] of game) {
//     console.log(`${key} -> ${value}`);
// }

// output: TypeError: game(Object) is not iterable

// solution---->


// we can iterate in Object by using "for in" loop-->

//for in loop-->

const game = {
    game1: "Resident Evil",
    game2: "NFS"
}
for (const key in game){ 
    console.log(`keys are ${key} and its value is ${game[key]}`);
    
}


// let's check if "for in" loop also works for array-->it's worked but it will give keys not values(like 0,1,2,3...) 

const programming = ["js","cpp","python","java","rb"]


for (const key in programming) {
    console.log(programming[key]);
}

//output--->
// js
// cpp
// python
// java
// rb



// "let's check the use of "for in loop with map--> No, it will give nothing( will not throw error)

const map = new Map()
map.set("IN","India")
map.set("EU","Europe")
map.set("EN","England")

// console.log(map);
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

//map with for in loop
for (const key in map) {
    // console.log(map.keys());
    // console.log(key);
}
//output: no output


// "for each loop"----->

const coding = ["js","cpp","python","java","rb","C","swift","kotlin"]
coding.forEach((value) => console.log(value) )

// Another way of printing this we can make a separate function and use that function directly as reference in foreach loop(for call back funtion purpose)
function printMe(item){
    console.log(item);
}
// coding.forEach(printMe)


//Try this also (value,index,arr)---> This will print values, indexes and the array
coding.forEach((value,index,arr) => console.log(value,index,arr) )
//output---->
// js 0 [
//     'js',     'cpp',
//     'python', 'java',
//     'rb',     'C',
//     'swift',  'kotlin'
//   ]
//   cpp 1 [
//     'js',     'cpp',
//     'python', 'java',
//     'rb',     'C',
//     'swift',  'kotlin'
//   ].................. 


const myCoding = [
    {
        languageName: "python",
        fileType: "py"
    },
    {
        languageName: "javascript",
        fileType: "js"
    },
    {
        languageName: "java",
        fileType: "java"
    },
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
    console.log(item.fileType);

})