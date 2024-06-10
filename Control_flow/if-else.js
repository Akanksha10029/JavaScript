const score = 7000
if (score>=1000) {
    console.log(`Now you can use this score ${score} to access the mystery Gold boxes to enhance your one skill`);
}
else if(score>500 && score<999){
    console.log(`Open Silver mystery box with this ${score} score`)
}
else{
    console.log("Earn more points to get either silver or Gold mystery box ")
}



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User is Logged in");
}
if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
    
}
