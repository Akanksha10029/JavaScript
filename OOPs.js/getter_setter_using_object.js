const User = {
    _name: 'John Doe',
    _email: 'john@google.com',
    _password: 'password123',

    get name() {
        return this._name;
    },
    set name(value) {
        this._name = value;
    },
    get email() {
        return this._email;
    },
    set email(value) {
        this._email = value;
    },
    get password() {
        return this._password;
    },
    set password(value) {
        if (!this._password) { // Allow setting password only if it hasn't been set yet
            this._password = value;
        } else {
            console.log("Password cannot be changed once set.");
        }
    }
};

// Creating a user instance
const user1 = Object.create(User);
user1.name = 'Akanksha';
user1.email = 'aks@gmail.com';
user1.password = 'pass123'; // Setting the password

console.log(user1.name); // Akanksha
console.log(user1.email); // aks@gmail.com
console.log(user1.password); // password123

user1.password = 'newpassword'; // Attempt to change the password
console.log(user1.password); // Still outputs: password123
