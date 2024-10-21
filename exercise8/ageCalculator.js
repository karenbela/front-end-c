//Modul ageCalculator
const calculateAge = (birthYear) => 2019 - birthYear; 
const yearUntilRetirement = ({ year, firstName }) => {  
  let age = calculateAge(year);
  let retirement = 60 - age; 

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};

export { yearUntilRetirement };