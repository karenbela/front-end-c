//Strings Literal, Arrow function, Default parameter

//1.String literals
let fullName = "John Doe"
let age = 33
let address = "Manado"

//Halo, nama saya John Doe, umur saya 33 tahun dan saya tinggal di manado

let kalimat = "Halo nama saya" + fullName + ",umur saya" + age + "tahun dan saya tinggal di" + address + "."
console.log(kalimat);

let kalimat2 = `Halo nama saya ${fullname}, umur saya ${age}, tahun dan saya tinggal di ${address}`
console.log(kalimat2);

//2. Arrow function
function sayGreetings(fullName) {
    return `Hello ${fullName}`;
}

console.log(sayGreetings("John Doe"));

const sayGreetings2 = (fullName) => {
    return `Helo ${fullName};`
};

console.log(sayGreetings2("John Doe"));

//Implicit return value
const sayGreetings2 = (fullName) => `Hello ${fullName}`;

//Arrow Function pada IIFE
let output1 = (() => `Hello`)();
console.log(output1);

//Arrow Function pada callback
let numbers = [1, 2, 3, 4, 5]; 
let output2 = numbers.map((item) => item);

//3. Default Parameter
const satGreetings3 = (fullName) => {
    if (fullName === undefined) {
        fullname = "John Doe"
    }
    if (age === undefined) {
        age = 30
    }
    if(address === undefined)
    console.log(`Halo nama saya ${fullName}`);
}