function User(name, email, password){
    this.name = name;
    this.email = email;
    this._password = password;

    Object.defineProperty(this, 'password',{
        get: function(){
            const pass = this._password.toUpperCase();
            return `${pass}#encrypt is your password`;
        },
        set: function(value){
            this._password = value;
        }
    })
}

const user1 = new User('Akanksha', 'aks@gmail.com', 'pass123')
console.log(user1.name) //Akanksha;
console.log(Object.getOwnPropertyDescriptor(user1, 'name')) // {writable: true, enumerable: true, configurable: true};
console.log(Object.getOwnPropertyDescriptor(user1, 'password')) // {get: ƒ, set: ƒ, enumerable: false, configurable: false};

console.log(user1.password) //PASS123#encrypt is your password;
