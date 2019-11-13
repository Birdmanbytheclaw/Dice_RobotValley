"use strict";
function rollDie (x){
    let result;
    result = Math.round(Math.random() * x) + 1
    return result;
    }
    function strengthRoll(rollOne, rollTwo, rollThree){
        let result = (rollOne + rollTwo + rollThree);
        return result;
    }
    function roboRoll(rollOne, rollTwo, rollThree){
        let result = (rollOne + rollTwo + rollThree);
        return result;
    }
    
    function speedRoll(rollOne, rollTwo){
        let result = (rollOne + rollTwo);
        return result;
    }
    function roboSpeed(rollOne, rollTwo){
        let result = (rollOne + rollTwo);
        return result;
    }
let strengthOne = 4; 
let strengthTwo = 6;
let strengthThree = 10;
let speedOne = 8; 
let speedTwo = 12; 
let cunningOne = 20; 
let cunningTwo = 20;

let count = 0;
function runGame (){
    alert("your eyes open");
    alert("The world is far different from the last time you were awake.");
    alert("you seem to be the only human left...");
    alert("or are you?");
    alert("after a few hours of walking around in the warehouse you woke up in you see yourself in a reflection");
    alert("you too, are a robot");
    alert("you make your way outside to find the world is filled with artificial life.");
    alert("do they think they are human too?");
    alert("you find your way to the first robot you meet");
    alert(" 'hello, My name is...' you can't seem to recall");
    alert("the new robot scans you and imediatley becomes hostile");
    alert("it uses what you presume were hands at one point to grab your head");
    alert("suddenly, Robot Valley");
   strengthRoll();
    let oneResult = (rollDie(strengthOne));
    alert ("Strength roll One is.. " + oneResult);
    let twoResult = (rollDie(strengthTwo));
    alert ("Strength roll Two is.. " + twoResult);
    let threeResult = (rollDie(strengthThree));
    alert ("Strength roll Three is.. " + threeResult);
    let eightResult = (rollDie(strengthOne));
alert ("Their Strength roll One is.. " + eightResult);
let nineResult = (rollDie(strengthTwo));
alert ("Their Strength roll Two is.. " + nineResult);
let tenResult = (rollDie(strengthThree));
alert ("Their Strength roll Three is.. " + tenResult);

console.log("Their Strength is")
console.log(roboRoll(eightResult, nineResult, tenResult));


console.log("your Strength is")
console.log(strengthRoll(oneResult, twoResult, threeResult));
if (oneResult > eightResult){
    console.log ("first Roll Win");
    count++;
    alert ("Your Arms Are Wicked Strong")
}else{
    console.log ("First Roll Loss");
    alert ("Your arms Broke")
}
if (twoResult > nineResult){
    console.log ("Second Roll Win");
    count++
    alert ("Your Core is Over 9000")
}else{
    console.log ("Second Roll Loss");
    alert ("you took a Falcon Kick to the chest and your ribs Shattered")
}
if (threeResult > tenResult){
    console.log ("Third Roll Win");
    count++
    alert ("tis but a flesh wound, but you come back with the spinning kick")
}else{
    console.log ("Third Roll Loss");
    alert ("The flesh wound Bled out");}

let fourResult = (rollDie(speedOne));
alert ("Speed roll One is.. " + fourResult);
let fiveResult = (rollDie(speedTwo));
alert ("Speed roll Two is.. " + fiveResult);

console.log("your Speed is..")
console.log(speedRoll(fourResult, fiveResult));
let elevenResult = (rollDie(speedOne));
alert ("Their Speed roll One is.. " + elevenResult);
let twelveResult = (rollDie(speedTwo));
alert ("Their Speed roll Two is.. " + twelveResult);
console.log("Their your Speed is..")
console.log(roboSpeed(elevenResult, twelveResult));
if (fourResult > elevenResult){
    console.log ("Fourth Roll Win");
    count++
    alert ("you dodge a right hook as if it swung through honey")
}else{
    console.log ("Fourth Roll Loss");
    alert ("you tripped over your own mother's ghost")
}
if (fiveResult > twelveResult){
    console.log ("Fifth Roll Win");
    count++
    alert ("you broke the sound barrier just by juking it's grab")
}else{
    console.log ("Fifth Roll Loss");
    alert ("you seem to be frozen in place")
}
let sixResult = (rollDie(cunningOne));
alert ("Left Brain roll is.. " + sixResult);
let sevenResult = (rollDie(cunningTwo));
alert ("Right Brain roll is.. " + sevenResult);
console.log("your Left and Right Brain Scores are..")
console.log(sixResult);
console.log(sevenResult);
let thirteenResult = (rollDie(cunningOne));
alert ("Their Left Brain roll is.. " + thirteenResult);
let fourteenResult = (rollDie(cunningTwo));
alert ("Their Right Brain roll is.. " + fourteenResult);
console.log("Their Left and Right Brain Scores are..")
console.log(thirteenResult);
console.log(fourteenResult);
if (sixResult > fourteenResult){
    console.log ("Sixth Roll Win") ;
    count++
    alert ("your left Brain overtook it's right Brain")
}else{
    console.log  ("Sixth Roll Loss");
    alert ("it's Right Brain Destroyed your Left Brain")
}
if (sevenResult > thirteenResult){
    console.log  ("Seventh Roll Win");
    count++
    alert ("your Right Brain overtook it's Left Brain")
}else{
    console.log ("Seventh Roll Loss");
    alert ("it's left Brain Destroyed your Right Brain")
}
if (count >= 4 && (sixResult > fourteenResult && sevenResult < thirteenResult) || (sixResult < fourteenResult && sevenResult > thirteenResult) ){
    console.log ("You won")
    alert ("Very Normal Win")
}
else if (count < 4 && (sixResult > fourteenResult && sevenResult < thirteenResult) || (sixResult < fourteenResult && sevenResult > thirteenResult) ){ 
    console.log ("You Lost")
    alert ("you Lost")
    runGame()
}
else if (count === 0 || (sixResult < fourteenResult && sevenResult < thirteenResult)) {
    console.log ("wow, you really lost")
    alert ("Spectacular loss")
    runGame()
}
else if (count < 4 && (sixResult > fourteenResult && sevenResult > thirteenResult)) {
    console.log ("wow, you really won!")
    alert (" Spectacular win!")
    alert("Time to look for More people")
}
}


