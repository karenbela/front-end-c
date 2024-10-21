//ubah exercise 1 dari function biasa menjadi 
//IIFE & Callback

//IIFE
(function(berat, tinggi) {
    let bmi = berat / (tinggi * tinggi);
    console.log("BMI: " + bmi);
})(80, 1.72);

//Callback
function hitungBMI(berat, tinggi, callback) {
    let bmi = berat / (tinggi * tinggi);
    callback(bmi);
}

function hasilBMI(bmi) {
    console.log("BMI: " + bmi);
}

let beratBadan = 80;
let tinggiBadan = 1.72;

hitungBMI(beratBadan, tinggiBadan, hasilBMI);