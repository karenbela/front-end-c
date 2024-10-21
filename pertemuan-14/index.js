// Destructuring (Array & Object)

let infoKaren = ["Karen", "Informatics", 18, "female", "Outsider"];
let [name, programStudy, age, gender, residence] = infoKaren;

console.log("Destructuring Array:");
console.log(name); // Output: Karen
console.log(programStudy); // Output: Informatics
console.log(age); // Output: 18
console.log(gender); // Output: female
console.log(residence); // Output: Outsider

let karen = {
  name: "Karen",
  age: 18,
  gender: "female",
  programStudy: "Informatics",
  residence: "Outsider"
};

let { name: nameObj, age: ageObj, gender: genderObj, programStudy: programStudyObj, residence: residenceObj } = karen;

console.log("\nDestructuring Object:");
console.log(nameObj); // Output: Karen
console.log(ageObj); // Output: 18
console.log(genderObj); // Output: female
console.log(programStudyObj); // Output: Informatics
console.log(residenceObj); // Output: Outsider


// Destructuring dengan mengambil sebagian item (Array & Object)

let [namePartial, , , genderPartial] = infoKaren;

console.log("\nDestructuring Array (partial):");
console.log(namePartial); // Output: Karen
console.log(genderPartial); // Output: female

let { name: nameObjPartial, residence: residenceObjPartial } = karen;

console.log("\nDestructuring Object (partial):");
console.log(nameObjPartial); // Output: Karen
console.log(residenceObjPartial); // Output: Outsider


// Destructuring dengan menggunakan default value (Array & Object)

let [nameDefault, , ageDefault, , residenceDefault, hobbyDefault = "Editing"] = infoKaren;

console.log("\nDestructuring Array with default value:");
console.log(hobbyDefault); // Output: Editing

let { name: nameObjDefault, gender: genderObjDefault, hobby: hobbyObjDefault = "Designing" } = karen;

console.log("\nDestructuring Object with default value:");
console.log(hobbyObjDefault); // Output: Designing


// Destructuring dengan menggunakan rest operator (Array & Object)

let [nameRest, ...otherInfo] = infoKaren;

console.log("\nDestructuring Array with rest operator:");
console.log(otherInfo); 
// Output: [ 'Informatics', 18, 'female', 'Outsider' ]

let { name: nameObjRest, ...additionalInfo } = karen;

console.log("\nDestructuring Object with rest operator:");
console.log(additionalInfo); 
// Output: { age: 18, gender: 'female', programStudy: 'Informatics', residence: 'Outsider' }


// Exercise 6 (modifikasi)
// 1. Mengubah ke ES6 menggunakan let&const, string literal, array function dan default parameter
// Menggunakan destructuring untuk mengambil nilai dari object parameter

const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = ({ year, firstName }) => {  // Destructuring pada parameter object
  let age = calculateAge(year);
  let retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};

yearUntilRetirement({ year: 1987, firstName: 'John' }); 

// 2. 
// Bagian ini tidak ada perubahan destructuring karena hanya menggunakan default parameter


const addNumber = (a, b, c, d, e, f, g) => {
    let numbers = [a, b, c, d, e, f, g];
    let sum = 0;
    numbers.map((number) => sum += number); 
  };
  
  console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// 3. Menggunakan destructuring untuk object dan parameter dengan default value

const calculateArea = ({ radius, power = 2 }) => {  // Menambahkan default parameter untuk "power"
  const phi = 3.14;
  return phi * Math.pow(radius, power);
};

let area21 = calculateArea({ radius: 21 }); // Menggunakan default "power" 2
let area7 = calculateArea({ radius: 7 });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4. default parameter

const makeAjaxRequest = (url, method = 'GET') => {
  console.log(url, method);
};

makeAjaxRequest('www.google.com');




