// Date

let myDate =new Date()

// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());


// const myCreateddate = new Date(2024,0,1)
// console.log(myCreateddate.toDateString());

// const myCreateddate2 = new Date(2024,0,24,5,3)
// console.log(myCreateddate2.toLocaleString());

// const myCreateddate3 = new Date("2024-01-15")
// console.log(myCreateddate3.toLocaleString());

const myCreateddate4 = new Date("07-16-2004")
// console.log(myCreateddate4.toLocaleString());


//++++++++++++ Timestamp +++++++++++++++++++++

let myTimeStamp = Date.now()
console.log(myTimeStamp); //gives value in milli seconds from 1st jan 1970 to till now current time

console.log(myCreateddate4.getTime());

console.log(Math.floor(Date.now()/1000)); //For converting it to seconds --> divide it by 1000

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getDate());

console.log(`Today the date is ${newDate.getDate()}, the month is ${newDate.getMonth() +1 } and the day is ${newDate.getDay()}`);

console.log(newDate.toLocaleString("default",{
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
}));