console.log(2>1);

console.log("2">1);

console.log(null>0);
console.log(null==0);
console.log(null>=0);

// The reason is that an equality check == and comparison <,>,>=,<= work differently.
// Comparisons convert null to number, treating it as 0. That's why null>=0 (0>=0) is true and null>0 (0>0) is false.

console.log(undefined>0);
console.log(undefined==0);
console.log(undefined<0);

// Strict check === 
console.log("2"===3);