//Javascript Function
//Cara.1

//Tanpa input dan tanpa output
function greetings1() {
    console.log("Hello World");
}
greetings1(); //call functiom

//Cara.2
let greetings2 = function() {
    console.log("Hello World");
};
greetings2(); //call function (kalo ada namanya harus dipanggil)

//parameter dan argument
//dengan input (parameter) dan output (return value)
                   //parameter
function greetings1(fullName) {
    return "Hello" + fullName;
}
                        //Argument
let output = greetings1("John Doe")
console.log(output1);

//cara2
let greetings2 = function(fullName){
    return "Hello" + fullName;
}
let output2 = greetings2("John Doe");
console.log(output2);

//Global, Local & Block Scope
let x = 10;

function foo(){
    let y = 20; //Local
    let z = 30;
    console.log(x); //10
    console.log(y); //20
    if(z > x) {
        let a = 40; //Block Scope
        console.log(a); //40
    }
    console.log(a); //Error
}


foo();