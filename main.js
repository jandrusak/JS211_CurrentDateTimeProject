 // **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**
// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}

// Write a JavaScript program to convert a number to a string.
const numToString = (num) => {
  let nToS = num.toString(); 
    console.log (`${nToS} this thing has been converted from a number to a ` + typeof nToS)
}
  // numToString (10)

// Write a JavaScript program to convert a string to the number.
const stringToNum = (numS) => {
  let sToN = parseInt (numS);
    console.log (`${sToN} this thing changes a string to a ` + typeof sToN)
}
  stringToNum ('5')

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
 const getInputType = (input) => {
  const printOut = typeof input
  console.log (`The date type is ${printOut}`)
 }

  getInputType ('10')
  getInputType (2)
  getInputType (NaN)
  getInputType (true)
  getInputType ()
  getInputType (null)


// Write a JavaScript program that adds 2 numbers together.
const adds2Numbers = (num1, num2) => {
  return (num1 + num2) 
}
console.log(adds2Numbers(8, 6))


// Write a JavaScript program that runs only when 2 things are true.

const input1 = "JAndrusak";
const input2 = "Basketb@lli$mySport";

const myFunc = (user, pass) => {
if (user && pass) {
  return true
 } 
 }
console.log(myFunc (input1, input2))  

// Write a JavaScript program that runs when 1 of 2 things are true.

const input3 = "JAndrusak";
const input4 = "Basketb@lli$mySport";

const my2ndFunc = (user, pass) => {
  if (user || pass) {
    return true
   } 
   }
   console.log(my2ndFunc (input4))  


// Write a JavaScript program that runs when both things are not true.
const input5 = "JAndrusak";
const input6 = "Basketb@lli$mySport";

const my3rdFunc = (user, pass) => {
  if (!user && !pass) {
    return true
  } 
}
console.log(my3rdFunc (!input5 && !input6))




// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
