let myHeros = ["Thor", "Ironman", "Hulk", "Captain America"];

let HeroPower = {
    Thor: "Thunder",
    Ironman: "Technology",
    Hulk: "Strength",
    CaptainAmerica: "Shield",

    getThorPower: function(){
        this.Thor = "Thunder";
    }
}

Object.prototype.Akanksha = function(){
    console.log("Hello Akanksha, You are present in all objects");
}
HeroPower.Akanksha() //now all objects have access to Akanksha method 
myHeros.Akanksha() //Hello Akanksha, You are present in all objects
// Therefore, here arrays and objects have access to Akanksha method which means all arrays, strings functions and objects are inherited from Object.prototype and have access to its methods and properties.


//Now, let's see that when we give power to array only then will object have access to it or not?
Array.prototype.HeyAkanksha = function(){
    console.log("Hello Akanksha, You are present in all arrays");
}
myHeros.HeyAkanksha() //Hello Akanksha, You are present in all arrays

// HeroPower.HeyAkanksha() 
//TypeError: HeroPower.HeyAkanksha is not a function
// Therefore, here only arrays have access to HeyAkanksha method which means all arrays are inherited from Array.prototype and have access to its methods and properties so it doesn't affect objects.