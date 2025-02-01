class User{
    constructor(name, email, age){
        this.name = name;
        this.email = email;
        this.age = age;
    }

    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }

    get age(){
        return `${this._age} years old`;
    }
    set age(value){
        this._age = value;
    }
}

const user1 = new User('Akanksha', 'aks@gmail.com',20)
console.log(user1.name) //Akanksha
console.log(user1.age) //20 years old;

const user2 = new User('Prashant', 'pks@gmail.com', 21)
console.log(user2.name) //Prashant
console.log(user2.age) //21 years old;