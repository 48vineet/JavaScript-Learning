//* let a = 0.1,
//   b = 0.2;
// let result = a + b;
// console.log(result.toFixed(2));  // toFixed(2) for number upto digit you want

//* 
//string * Number = NaN
//string / Number = NaN
//string % Number = NaN
//string + Number = Concatination
//string - Number = operation will perform
 
// a = b assigning a is equal to b
// a == b comparing  a is equal to b , but if a == "a" where a is number and "a" is string then the result is shocking that its result is true
// a === b to avoid data type misconfution === is introduced which is strict equality and this time if we checke a === "a" then result will be false
// if we compare 5 < "fsdwda" //! fsdwada is not define no true or false will be shown 

//? && gives true if both oparand staisfies or becomes true else false
//? || returns truw if one the operand is true otherwise false

//* ========= Expression===============
// let age = 14;
// age >= 18 ? "True" : "false";

//! ================ If else Statement ================
// if (condition) {
//     console.log(object); //true
// } else {
//     console.log(object); //false
// }

//! ============= Else-If ==================
// if (condition1) {
// } else if (condition2) {
// } else if (condition3) {
// } else if (condition...) {
// } else {
// }

//? Interview Question
// let age = 19;
// let citizen = false;
// if (age >= 18 && citizen) {
//   console.log("Eligible for vote");
// } else {
//   console.log("Not Eligible for vote due to citizen ship");
// }

//? Actual Interview Question
//! Q1 write a program to check if the given numbert is even or odd
//* Sol :-

// let num = 2;
// if (num % 2 == 0) {
//   console.log("Is Even");
// } else {
//   console.log("Is Odd");
// }

//! Q2 write a program to check if the given numbert is prime or not

//* Sol :-

// let num = 1;
// if (num > 0) {
//   console.log("No is positive");
// } else if (num === 0) {
//   console.log("Number is 0");
// } else {
//   console.log("No is negative");
// }

//! ================ Switch Case =================

// let day = "Tuesday";
// switch (day) {
//   case "Monday":
//     console.log("Back And Bicep");
//     break;
//   case "Tuesday":
//     console.log("Tricep And Chest");
//     break;
//   case "Sunday":
//     console.log("Rest Day");
//     break;
//   default:
//     console.log("Enter Correct Day");
//     break;
// }

//? Interview Question

// let areaOfShapes = "Square";
// let a = 5,
//   b = 10,
//   r = 5,
//   A = 10,
//   result;
// const pi = 3.14;

// switch (areaOfShapes) {
//   case "Circle":
//     result = pi * r * r;
//     console.log("the area of circle is " + result);
//     break;
//   case "Rectangle":
//     result = a * b;
//     console.log("the area of rec is " + result);
//     break;
//   case "Square":
//     result = A * A;
//     console.log("the area of square is " + result);
//     break;
//   default:
//     console.log("Enter Correct shape or shape is not aviable");
// }

//? Multiplication of table 5 using loop

// for (let i = 1; i <= 10; i++) {
//   console.log("5" + " * " + i + " = " + i * 5);
// }

//TODO: prompt() is taken for user input
//TODO: parseInt() is taken for converting string into number ,
//TODO parseFloat() is used for converting decimal into whole no

//? calculate a number using for loop form 1 to 10

// let sum = 0;
// for (let num = 1; num <= 10; num++) {
//   sum = sum + num;
// }
// console.log(sum);

//! patter using for loop

// for (let i = 1; i <= 5; i++) {
//   let pattern = " ";
//   for (let j = 1; j <= i; j++) {
//     pattern = pattern + "*";
//   }
//   console.log(pattern);
// }

//!============ Functions ==================

//? Write a function to calculate sum of numbers

// function calculate(a, b) {
//   eval(a, b);
// }

// calculate(2, 4);

//* String Interpolation ==> `hello i am ${vineet} `

// let calculator = (a, b) => {
//   console.log("sum of a and b is ", a + b);
//   console.log("sub of a and b is ", a - b);
//   console.log("mul of a and b is ", a * b);
//   console.log("div of a and b is ", (a / b).toFixed(2));
// };
// calculator(3, 4);

//? Reverse the string

// let isReverse = (str) => {
//   let result = "";
//   for (let char = str.length - 1; char >= 0; char--) {
//     result = result + str[char];
//   }
//   return result;
// };

// console.log(isReverse("Vineet Mali"));

//TODO resverse using methiod
// let str = "level";
// console.log(str.split("").reverse().join(""));
// if (str == str.split("").reverse().join("")) {
//   console.log("is palindrome");
// } else {
//   console.log("is not palindrome");
// }

//! ================Arrays []===================

// let arr = ["Ram", "Shaym", "Vineet", "Harshal", "Raj"];

//? Iterable = object where you can use the for of loop

//TODO using array constructor :- let fruits = new Array("Apple", "Banana")  output is ["Apple", "Banana"]
//TODO using array literals : let array = ["Apple", "Banana"]

//? For of loop
// let names = ["Ram", "Shaym", "Vineet", "Harshal", "Raj"];
// for (let name of names) {
//   console.log(name);
// }
// output :- Ram Shaym Vineet Harshal Raj

//?for in loop : used to iterate index value

// let names = ["Ram", "Shaym", "Vineet", "Harshal", "Raj"];
// for (let name in names) {
//   console.log(name);
// }
// output :- 0 1 2 3 4

//? forEach fucntion
//! it is blocked scope block ke bhar vo use nahi ho sakta nahi function ke bhar bhiD nahi use ho sakta hai undefined answer ayega

// let names = ["Ram", "Shaym", "Vineet", "Harshal", "Raj"];

// names.forEach((currEle, index, arr) => {          // takes 3 argument or 2 current element of array , and 2nd takes index values
//   console.log(`${currEle} , ${index} `);
// });

//? map fucntion
//! it is function scope block ke bhar vo use  ho sakta hai function ke bhar use ho sakta hai
//TODO also creates new array
// let names = ["Ram", "Shaym", "Vineet", "Harshal", "Raj"];

// names.map((currEle, index, arr) => {          // takes 3 argument or 2 current element of array , and 2nd takes index values
//   console.log(`${currEle} , ${index} `);
// });

//TODO Practice

// const number = [1, 2, 3, 4, 5];
// let newArry = number.map((currEle) => {
//   return currEle * 2;
// });

// console.log(newArry);

//Crud operation
//! push() add one more element to the end of the array
//! pop() removes last element of the array
//! unshift() add one or more element to the begining of the array
//! shift() removes the first element of the array

//! splice(startCount , delCount , item1,item2...itemN)
// const number = [1, 2, 3, 4, 5];
// number.splice(1, 3, 7, 8, 9);
// console.log(number); //[ 1, 7, 8, 9, 5 ]

//! for searching we have indexOf , lastIndexOf and includes
//? indexof(searchEle , fromIndex)
//? lastIndexOf(searchEle , fromIndex) ------search from reverse
//? include(currEle) returns true or false

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = number.indexOf(4, 0);
// console.log(result);  //index no 3

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = number.includes(5);
// console.log(result); //return true or boolean

//TODO Practice Ques
// let months = ["jan", "feb", "mar", "aug", "sep"];
// let result = months.splice(2, "mar", "March");
// console.log(result, months); //[] [ 'jan', 'feb', 'March', 'mar', 'aug', 'sep' ]

//? find() method used to find first element in an array reaturns first matching element else return undefined

// const number = [1, 2, 3, 4, 5];
// let newArry = number.find((currEle , indexNo , array) => {
//   console.log(currEle , indexNo , array)
//    return currEle > 3;   //output 4 means its only return first occurance
// });

// console.log(newArry);

//filter((currEle , index , array)={})  // to match the elementalways use != for comparing

// let value = 3;
// let number = [1, 2, 3, 4, 5, 4, 3, 3, 3, 6, 5, 6, 3];
// let result = number.filter((currEle) => {
//   return currEle !== value;
// });
// console.log(result);

//TODO given a array of products where each product has a name and price write a function that uses the filter method to return an array containng only the products with a price or less than  or equal to 500

// const product = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 300 },
//   { name: "Smartwatch", price: 150 },
// ];

// let newProduct = product.filter((currEle) => {
//   return currEle.price <= 500;
// });

// console.log(newProduct);

//? sort() // for acending order and decending
// let number = [1, 2, 3, 4, 5, 4, 3, 3, 3, 6, 5, 6, 3];
// let result = number.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });

// console.log(result);

//! sort unique no
// let number = [1, 2, 3, 4, 5, 4, 3, 3, 3, 6, 5, 6, 3];
// console.log([...new Set(number)]);

//reduce((accumulator , currEle , index , array)=>{
// },initialValue) used to accumulate or reduce and array to a single value

// let price = [100, 200, 300, 400, 500];
// let result = price.reduce((accum, currEle) => {
//   return accum + currEle;
// }, 0);
// console.log(result);

//! =================STRINGS===================

//* \'   '    single code
//* \"   "     double code

// console.log(' im a "full stack devloper " ');

//* strArr = Array.from(); converts string into array

//! search() search index of given argument if nothing search returns -1 also it used or regular expression use i for case sensitivity

// let str = "hey Vineet , you are the best Vineet ever";
// let result = str.search("vineet");  //-1 due to case sesnitive
// let result = str.search(/vineet/i); //4 i is for to not using case sesnsitivty , g is use for global
// console.log(result);

//match("javaScript") , match(/javaScript/i ) returns the array of match value or null if not found in this js convrts it into regular expression

//matchAll() returns iteratiors

//includes("Java") returns boolean value true or false and not a regular expression ex "JavaScript" still returns true

//startsWith("Hello") returns true if match with specific start word like ex "Hello Vineet" then returns true else false

//endsWith() reverse of starts with

//slice(start , end) extracts the parrt of the string than returns extracted parts in a new string
// let str = "Hello Vineet Mali";
// let result = str.split("").filter(() => {});
// console.log(result);

//TODO

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.substring(0); // Hello JavaScript, welcome to our world best JavaScript course
// let result = text.substring(1); //ello JavaScript, welcome to our world best JavaScript course
// let result = text.substring(-5); //course
// console.log(result);

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let result = text.replace(1, 16); //ello JavaScript, welcome to our world best JavaScript course
//  console.log(result);

//? charAt() methods which returns the charecter at specified index positiion  in a string if given no is in negative then returns empty string
//? charCodeAt() returns code of charecter at specific index in a string it returns UTF-16 code

//? at() allows use of negative index indexes while charAt() do not.

//? trim() trims the space in  the given string

//? split() converts string into an array of substring

//String.fromCharCode() converts charcode in to char

//! ===================Math Operator=======================

//? Maths works with number type
//* Math.round() rounds the nearest interger if 4.5 ==> 5 , 4.1 ==> 4
//* Math.floor() rrounds the nearest interger matlab decimal ke pehle wala no is ayega 4.4 ==> 4 , 4.9 ==> 4 , -3.7 => 4
//* Math.ceil() round up to the nearest integer decimal ke badd wala no ayega 4.2 ==> 5 , 4.9 ==> 5
//* Math.abs() checks what is the distance from 0 btween these two numbers
//* Math.trunc(-3.4) returns the interger part ans will be -3
//* Math.pow(x , y) return the x to the power of y like Math.pow(2,3) then 8 also can be done with 2 ** 5
//* Math.sqrt(25) returns squarertoot of the number //5
//* Math.log() return the logorithm of the number for base of any can use Math.2log(3)

//! Math.random() alwas lies between 0 to  1)excluse 1 kabh nahi milega

//!========================= input event  =================================
// inputEvent("change ", (e) => {
//   e.target.value;
//returns value after wring whole word
// });

// inputEvent("input ", (e) => {
//   e.target.value;
//returns value after wring every words
// });

//my own notes