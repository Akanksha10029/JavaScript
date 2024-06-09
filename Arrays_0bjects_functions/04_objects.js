// const tinderUser = new Object() //constructor
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.IsLoggedIn = true,
tinderUser.fullname = {
    firstname: "Akanksha",
    lastname: "Rani"
}


// console.log(tinderUser);


const target = {a:1,b:2,c:3}
const source = {b:3,c:4,d:5}
const obj1 ={e:8,f:4}

const returnTarget = Object.assign({},target,source,obj1) //{}-->target ,[target,source,obj1]-->sources i.e all the sources will get stored in {} empty object, so that original data of target do not get chnaged after assigning the values from sources to target.

// console.log(returnTarget);
// console.log(target);

//output: { a: 1, b: 3, c: 4, d: 5 }
//        { a: 1, b: 2, c: 3 }


//otherwise try this to check the result: 
const returnTarget2 = Object.assign(target,source,obj1)
// console.log(returnTarget2);
// console.log(target); //here target variable's values get changed i.e original data get changed

//output:{ a: 1, b: 3, c: 4, d: 5, e: 8, f: 4 }
//       { a: 1, b: 3, c: 4, d: 5, e: 8, f: 4 }



// But this method is reliable 
const obj2 = {a:2,b:4,c:5} 
const obj3 = {d:2,b:6,f:5} 
const obj4 ={...obj2,...obj3}
// console.log(obj4);

console.log(Object.keys(tinderUser));
console.log(Object.keys(obj4));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('IsLoggedIn'));

// object destructuring

const course = {
    coursename: "Javascript",
    price: 199,
    courseInstructor: "Hitesh"
}

console.log(course.courseInstructor);
const {courseInstructor : instructor} = course
console.log(instructor);




