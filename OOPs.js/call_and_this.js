// video no: 44 call and this in javascript
function setUserDetails(name, age){
    this.name = name;
    this.age = age;
}

function createUser(name, age, email, phone) {
    setUserDetails.call(this, name, age)
    this.email = email;
    this.phone = phone;
}

const user1 = new createUser('Akanksha', 20, 'akahajajshs@gmail.com', 1234567890);
console.log(user1.name);
console.log(user1.age);
console.log(user1.email);
