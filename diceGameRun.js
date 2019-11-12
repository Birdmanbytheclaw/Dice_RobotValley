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
}
//thisIsThePlayer
function rollOne (strengthOne){
let result;
result = rollDie(strengthOne);
return result;
}
function rollTwo (strengthTwo){
    let result;
    result = rollDie (strengthTwo);
    return result;
}
function rollThree (strengthThree){
    let result;
    result = rollDie (strengthThree);
    return result;
}

function strengthRoll(rollOne, rollTwo, rollThree){
    let result;
    result = (rollOne + rollTwo + rollThree);
    return result;
}
console.log("your strength is")
console.log(strengthRoll(rollOne, rollTwo, rollThree));

// function speedRoll(speedOne, speedTwo){
//     let result;
//     result = rollDie(speedOne) + rollDie(speedTwo);
//     return result;
// }
// console.log ("your speed is")
// console.log(speedRoll(speedOne, speedTwo));


// console.log("your left and right brain scores are as follows")
// console.log(cunningOne);
// console.log(cunningTwo);

// //thisIs98|105|114|100|13
// function roboRoll (strengthOne, strengthTwo, strengthThree){
//     let result;
//     result = rollDie(strengthOne) + rollDie(strengthTwo) + rollDie(strengthThree);
//     return result;
// }
// console.log ("98|105|114|100|13's strength is")
// console.log(roboRoll(strengthOne, strengthTwo, strengthThree));

// function roboSpeed(speedOne, speedTwo){
//     let result;
//     result = rollDie(speedOne) + rollDie(speedTwo);
//     return result;
// }
//     console.log ("(98|105|114|100|13's speed  is");
//    console.log(roboSpeed(speedOne, speedTwo));
    
// function roboSmart (cunningOne, cunningTwo){
//     let result;
//     result = rollDie(cunningOne), rollDie(cunningTwo);
//     return result;
// }

//    console.log("98|105|114|100|13's left and right brain scores are as follows")
//    console.log (cunningOne);
//    console.log (cunningTwo);

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