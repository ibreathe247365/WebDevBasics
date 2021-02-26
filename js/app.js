// console.log('Hello World!')
// const userInput=prompt("Enter Something");
// if (userInput) {
//     console.log("Truthy");
// }else {
//     console.log("Falsey");
// }
// array=[1,2,3,4]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(index);
// }
// let targetNum=Math.floor(Math.random()*10);
// let guess =Math.floor(Math.random()*10);

// while(true) {
//     guess=Math.floor(Math.random()*10);
//     if (guess=== targetNum) {
//         console.log(`CORRECT!Guessed: ${guess} &target was :${targetNum}`);
//         break;
//     } else {
//        console.log(`Guessed ${guess}...Incorrect!`);
//     }
// }

// let input =prompt("Hey,say something!")
// while (true) {
//     input=prompt(input)
//     if (input==="stop copying me") {
//         break;
//     }
// }
// alert ("OK YOU WIN!")

// let num=parseInt(prompt("Enter a no.:"));
// while (!num) {
//     num=parseInt(prompt("Enter  a valid no.:"));
// }

// a=[1,2,3,4]
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
    
// }
// for (const sub of a) {
//     const element=sub;
// }
// for (const char of "hello world") {
//     console.log(char)
// }
let testScores ={
    kim: 89,
    shawn :91,
    vonnie:60,

}

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}
console.log (Object.keys(testScores));
console.log (Object.values(testScores));
console.log (Object.entries(testScores));
//obejcts dont have a length . so use .keys for length
