function multiplyBy5(num) {
  return num * 5;
}
multiplyBy5.power = 2;

console.log(multiplyBy5(2)); // 10
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype); // {}

function createUser(name, score){
    this.Username = name;
    this.score = score;
} 
createUser.prototype.increaseScore = function(){
    this.score++;
    return this.score;
}
createUser.prototype.PrintMessage = function(){
    return `Hello ${this.Username}, your score is ${this.score}`;
}

const user1 = new createUser('Prashant',100)
console.log(user1.PrintMessage());
console.log(user1.increaseScore());

 
