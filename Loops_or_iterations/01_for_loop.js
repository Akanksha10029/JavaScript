// for loop

// for (let i = 1; i <= 10; i++) {
//     console.log(i); 
// }

// //using function
// function loop() {
//     for (let i = 1; i <= 10; i++) {
//         console.log(i); 
//     }    
// }
// loop();

// //using IIFE
// (function(){
//     for (let i = 1; i <= 10; i++) {
//         console.log(i); 
//     }    
// })();



// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`Inner loop value:  ${j}`)   
//     } 
// }


//Table printing

// for (let i = 1; i <= 20; i++) {
//     console.log(`Table of ${i}:`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = `,i*j)   
//     }   
// }



// for loop by using arrays

// let myheroes = ["flash", "spiderman","Iron man","Superman"]
// console.log("The length of array is:",myheroes.length);

// for (let i = 0; i < myheroes.length; i++) {
//     const element = myheroes[i];
//     console.log(element);
// }


// Break and continue

// for (let i = 0; i <= 20; i++) {
//     if (i==5) {
//         console.log("Detected 5");
//         break
//     }
//     console.log(`value of i is: ${i}`);
// }



for (let i = 0; i <= 20; i++) {
    if (i==5) {
        console.log("Detected 5");
        continue
    }
    console.log(`value of i is: ${i}`);
}