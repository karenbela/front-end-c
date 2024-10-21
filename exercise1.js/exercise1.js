function hitungBMI(berat, tinggi) {

    let bmi = berat / (tinggi * tinggi);

    return bmi;
}

let beratBadan = 80;
let tinggiBadan = 1.72;

let hasilBMI = hitungBMI(beratBadan, tinggiBadan);

console.log("BMI: " + hasilBMI);