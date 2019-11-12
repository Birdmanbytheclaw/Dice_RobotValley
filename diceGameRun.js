"use strict";

let strengthOne = 4; 
let strengthTwo = 6;
let strengthThree = 10;
let speedOne = 8; 
let speedTwo = 12; 
let cunningOne = 20; 
let cunningTwo = 20;

// function playerCharStats() {
//     alert("your eyes open");
//     alert("The world is far different from the last time you were awake.");
//     alert("you seem to be the only human left...");
//     alert("or are you?");
//     alert("after a few hours of walking around in the warehouse you woke up in you see yourself in a reflection");
//     alert("you too, are a robot");
//     alert("you make your way outside to find the world is filled with artificial life.");
//     alert("do they think they are human too?");
//     alert("you find your way to the first robot you meet");
//     alert(" 'hello, My name is...' you can't seem to recall");
//     alert("the new robot scans you and imediatley becomes hostile");
//     alert("it uses what you presume were hands at one point to grab your head");
//     alert("suddenly, Robot Valley");
// }

function rollDie (x){
let result;
result = Math.round(Math.random() * x) + 1
return result;
}


//thisIsThePlayer
//strength roll

function strengthRoll(rollOne, rollTwo, rollThree){
    let result = (rollOne + rollTwo + rollThree);
    return result;
}
let oneResult = (rollDie(strengthOne));
alert ("Strength roll One is.. " + oneResult);
let twoResult = (rollDie(strengthTwo));
alert ("Strength roll Two is.. " + twoResult);
let threeResult = (rollDie(strengthThree));
alert ("Strength roll Three is.. " + threeResult);

console.log("your Strength is")
console.log(strengthRoll(oneResult, twoResult, threeResult));

//Speed roll
function speedRoll(rollOne, rollTwo){
    let result = (rollOne + rollTwo);
    return result;
}
let fourResult = (rollDie(speedOne));
alert ("Speed roll One is.. " + fourResult);
let fiveResult = (rollDie(speedTwo));
alert ("Speed roll Two is.. " + fiveResult);


console.log("your Speed is..")
console.log(speedRoll(fourResult, fiveResult));

//cunning roll
let sixResult = (rollDie(cunningOne));
alert ("Left Brain roll is.. " + sixResult);
let sevenResult = (rollDie(cunningTwo));
alert ("Right Brain roll is.. " + sevenResult);


console.log("your Left and Right Brain Scores are..")
console.log(sixResult);
console.log(sevenResult);


//    if (strengthRoll < roboRoll){
//        alert ("it is stronger")
//     }else if(strengthRoll = roboRoll){
//         alert("your strength is even")
//    }else{
//        alert("you are stronger")
   
//         }

//     if(roboSpeed > speedRoll){
//         alert ("it is Faster")
//     }else if (roboSpeed = speedRoll){
//             alert("You are the same Speed")
//     }else {
//         alert("You are faster")
//     }