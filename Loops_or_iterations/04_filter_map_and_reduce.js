// myNum = [1,2,3,4,5,6,7,8,9,10]

// const newmyNum = myNum.forEach(num => {
//     // console.log(num); //it will give output from 1 to 10 but as a whole foreach loop will return undefined
// });

// console.log(newmyNum);
//as whole foreach loop returns undefined



// solution------> use filter----->

myNum = [1,2,3,4,5,6,7,8,9,10]
const newmyNum = myNum.filter((num) => num > 3)
console.log(newmyNum);
//output: [4, 5, 6, 7, 8, 9, 10]


// we can use foreach loop also but after applying some logic in it. for eg.--->

let numbers = [1,2,3,4,5,6,7]
let newNumbers = []
numbers.forEach((num)=>{
    if (num > 3) {
        newNumbers.push(num)
    }
})
console.log(newNumbers); // output: [ 4, 5, 6, 7 ]


//practice real world example problem by using filter function. for eg---->

const books = [
    {
        title: "To Kill a Mockingbird",
        genre: "Fiction",
        publish: 1960,
        edition: "2nd"
    },
    {
        title: "1984",
        genre: "Dystopian",
        publish: 1949,
        edition: "3rd"
    },
    {
        title: "The Great Gatsby",
        genre: "Classic",
        publish: 1925,
        edition: "1st"
    },
    {
        title: "The Catcher in the Rye",
        genre: "Fiction",
        publish: 1951,
        edition: "2nd"
    },
    {
        title: "The Hobbit",
        genre: "Fantasy",
        publish: 1937,
        edition: "1st"
    },
    {
        title: "Fahrenheit 451",
        genre: "Dystopian",
        publish: 1953,
        edition: "4th"
    },
    {
        title: "Pride and Prejudice",
        genre: "Romance",
        publish: 1813,
        edition: "4th"
    },
    {
        title: "The Lord of the Rings",
        genre: "Fantasy",
        publish: 1954,
        edition: "1st"
    },
    {
        title: "Animal Farm",
        genre: "Political Satire",
        publish: 1945,
        edition: "1st"
    },
    {
        title: "Jane Eyre",
        genre: "Romance",
        publish: 1847,
        edition: "3rd"
    }
];

// Example usage:
let usergenre = books.filter( (gn) => gn.genre==="Romance")

let userpubed = books.filter( (pbed) => pbed.publish >= 1950 && pbed.edition==="2nd")
console.log(usergenre);
console.log(userpubed);


//map------>

const num = [1,2,3,4,5,6,7,8]
// const newnums = num.map( (n) => n + 10 )
//console.log(newnums);

//we can use chaining like .map().map() or .map().filter().......like this. for eg--->

const newnums = num
                .map( (n)=> n*10)
                .map( (n) => n+5)
                .filter( (n)=> n>=50)
console.log(newnums); 



//reduce--------->

const number = [1,2,3]
const myTotal = number.reduce(function (accumulator,currentvalue){
    console.log(`acc: ${accumulator} and currval: ${currentvalue}`);
    return accumulator+currentvalue
    //this returns the sum of acc and currval and this will go into accumulator and then again the loop will carry on, that means we have to just initialize the initial value once and then it take the calculated value and store it in acc further.
},0)//here 0 is initial value that we have to give so that it start from the initial value
console.log(`total: ${myTotal}`);

//reduce with arrow function
//basic syntax: .reduce( ()=> (),0)

const Num = [1,2,3,4,5]
const mySum = Num.reduce((acc, curr) => acc+curr,0)
console.log(mySum);


//another real world example---->
const shoppingCart = [
    {
        itemName: "oven",
        price: 4000
    },
    {
        itemName: "comb",
        price: 100
    },
    {
        itemName: "cooler",
        price: 14000
    },
    {
        itemName: "bracelet",
        price: 150
    },
]
const priceToPay = shoppingCart.reduce((acc,item)=> acc+item.price,0)

console.log(`Total Amount to pay: ${priceToPay}`);