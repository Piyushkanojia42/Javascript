"use strict"; // treat all JS code as new version

// alert("hello") // we are uing nodejs so alert will not work,not browser
// we mostly avoid using semi colon ; in js but its optional


// Data types in javascript

//number
//string
//boolean
//null
//undefined
//object
//symbol

// 1. NUMBER - Represents numeric values (integers and decimals)
let age = 25;
let price = 19.99;
let negativeNum = -10;
console.log("NUMBER:", age, price, negativeNum);

// 2. STRING - Represents text enclosed in quotes
let name = "Piyush";
let message = 'Hello World';
let template = `Welcome ${name}`;
console.log("STRING:", name, message, template);

// 3. BOOLEAN - Represents true or false values
let isStudent = true;
let isPassed = false;
console.log("BOOLEAN:", isStudent, isPassed);

// 4. NULL - Represents intentional absence of value
let emptyValue = null;
console.log("NULL:", emptyValue);

// 5. UNDEFINED - Represents uninitialized or missing value
let notDefined;
console.log("UNDEFINED:", notDefined);

// 6. OBJECT - Represents collection of key-value pairs
let person = {
    name: "Piyush",
    age: 25,
    city: "Delhi"
};
console.log("OBJECT:", person);

// 7. SYMBOL - Represents unique and immutable identifier
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log("SYMBOL:", sym1, sym2);



//number
//string
//boolean
//null
//undefined
//object
//symbol

console.log(typeof(person));


console.log(typeof null); // this is a bug in js, null is of object type
console.log(typeof undefined); // this is correct, undefined is of undefined type
