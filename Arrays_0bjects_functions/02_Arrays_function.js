const marvel_heores=["Cap America","Iron Man","Spider man","Hulk","Thor","Loki","Black Panther"]
const dc_heroes =["Super Man","Bat Man", "Flash","Wonder women","Green Arrow","Cyborg","Aqua Man"]

// marvel_heores.push(dc_heroes)

// console.log(marvel_heores);
// console.log(marvel_heores[7][4]);

console.log(marvel_heores.concat(dc_heroes));
console.log(marvel_heores);

//+++++++++++Spread Operator (...) +++++++++++++

const newHeroes = [...dc_heroes,...marvel_heores]
console.log(newHeroes);


const anotherArray = [1,2,3,[4,5,6,[9,8,7,[7,2,1]]]]
const realArray1 = anotherArray.flat(2)
const realArray2 = anotherArray.flat(3)
console.log(realArray1);
console.log(realArray2);

console.log(Array.isArray(realArray1));
console.log(Array.isArray("Akanksha Rani"));
console.log(Array.from("Akanksha Rani"));
console.log(Array.from({Name:"Akanksha Rani"}));

// For adding multiple datatype elements into an array we use      "Array.of"
let score=900
multiArray =Array.of("Akanksha","Prashant",score);
console.log(multiArray);
console.log(typeof multiArray);
console.log(typeof dc_heroes);
