//IIFE & Callback

//1. IIFE (Immediately  )

//No Params (parameter)
// (function () {
//     console.log("Hello World");
// })();

// //With Params 
// (function (fullName) {
//     console.log("Hello" + fullName);
// })("John Doe");

// //With Params & args & return value
// let output = (function (fullName) {
//     return "Hello" + fullName;
// })("Jphm Doe");

// console.log(output);

//Callback Function
//No Params & args & return value
function sayHello(callback) {
    callback();
}

sayHello(function () {
    console.log("Hello Callback Function");
});

//With Params & Args & Return value
function sayHello(callback) {
    //Logic
    let.output = callback("John Doe");
    return output;
}

let.output = sayHello(function (fullName));
sayHello(function () {
    console.log("Hello Callback Function");
});