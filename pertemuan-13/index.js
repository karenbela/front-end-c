//Rest Parameter & Spread Operator

//1. Rest Parameter
//tanpa rest parameter
const func1 = (param1, param2, param3, param4, param5) => {
    console.log(param1, param2, param3, param4, param5);
};

func1("A","B","C","D","E");

//demgan rest parameter
const func2 = (...params) => { //rest parameter tipe datanya array
    console.log(params)
}

func2("A","B","C","D","E")

//rest parameter harus berada di terakhir dalam paraneter list

//Mini Exercise
const penjumlahan = (a, b, c, d, e, f) => {
    let arr = [a, b, c, d, e, f,];
    let hasil = 0;
    arr.forEach((item) => (hasil += item));
    return hasil;
}

console.log(pemjumlahan(1, 2, 3, 4, 5, 6));

//2. Spread Operator
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);

//Array
//1. Duplikasi array
let numbers2 = [...numbers];
numbers.push(6);
console.log(numbers2);

//2.Menggabungkan array
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [7, 8, 9]

let numbers3 = arr1.concat(arr2, arr3); //ES5
let numbers4 = [...arr1, ...arr2, ...arr3]; //ES6

//Object
//1. Duplikasi object
const john = {
    fullName: "John Doe",
    age: 30,
};

const john2 = {...john, address: "Manado"};

//2. Menggabungkan Objec
let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let obj3 = {e: 5, f: 6};

letcombineObj