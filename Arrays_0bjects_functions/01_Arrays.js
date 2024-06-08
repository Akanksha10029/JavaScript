// Arrays

const myArr = [0,1,2,2,3,"true",5]

const myAnime = ["Haikyu", "Death Note"]
// console.log(myAnime);

//Array Methods

myAnime.push("Demon Slayer", "MHA")
console.log(myAnime);

myArr.unshift(9)
// console.log(myArr);

myArr.shift()
// console.log(myArr);

// console.log(myArr.includes("Akanksha"));

// console.log(myArr.indexOf(9));

// const newArr = myArr.join("/") //join converts all the elements present in the array into string sperated by "comma by default". We can add another separator in parentheses(eg "/")
// console.log(myArr);
// console.log(newArr);


//+++++++++++++Slice and splice+++++++++++++

console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);


const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr);

//output and explanation of slice and splice concepts

// A [
//     0, 1,
//     2, 2,
//     3, 'true',
//     5
//   ]
//   [ 1, 2 ]
//   B [
//     0, 1,
//     2, 2,
//     3, 'true',
//     5
//   ]
//   [ 1, 2, 2 ]
//   C [ 0, 3, 'true', 5 ]


// Explanation:
// slice(1,3):
//  it cut out the range and gives that part after creating new array (and here: start, last (element-1) concept used) i.e. after creating new array it gives, [ 1, 2 ] and ORIGINAL VALUE of array remains unaffected i.e. [0,1,2,2,3,"true",5]

// Splice(1,3):
// it cut out the range that provided in parameter and gives [ 1, 2, 2 ] i.e. (start, include last range) and it manipulates the actual array i.e. it changed the actual array it doesn't create new array and ORIGINAL VALUE of array [ 0, 3, 'true', 5 ]
