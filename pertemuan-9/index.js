//Array Exercise

let people = ["Greg", "Mary", "Devon", "James"];

// 1. Using a for-loop, iterate through this array and console.log all of the people.
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2. Using a forEach(), iterate through this array and console.log all of the people.
people.forEach(function(person) {
  console.log(person);
});

// 3. Write the command to remove "Greg" from the array.
people.shift(); 
console.log(people); // ["Mary", "Devon", "James"]

// 4. Write the command to remove "James" from the array.
people.pop(); 
console.log(people); // ["Mary", "Devon"]

// 5. Write the command to add "Matt" to the front of the array.
people.unshift("Matt");
console.log(people); // ["Matt", "Mary", "Devon"]

// 6. Write the command to add your name to the end of the array.
people.push("Karen"); 
console.log(people); // ["Matt", "Mary", "Devon", "Karen"]

// 7. Using a for-loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") {
    break; 
  }
}

// 8. Write the command to make a copy of the array using slice. 
//The copy should NOT include "Mary" or "Matt".
let newPeople = people.slice(2); // ["Devon", "Karen"]
console.log(newPeople);

// 9. Redefine the people variable with the value you started with.
//Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie".
people = ["Matt", "Mary", "Devon", "Karen"];
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people); // ["Matt", "Mary", "Elizabeth", "Artie", "Karen"]

// 10. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
let withBob = people.concat("Bob");
console.log(withBob); // Final Result: ["Matt", "Mary", "Elizabeth", "Artie", "Karen", "Bob"]


//Object Exercise

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// 1. Add the language "Go" to the end of the languages array
programming.languages.push("Go");
console.log(programming.languages); //["JavaScript", "Python", "Ruby", "Go"]

// 2. Change the difficulty to the value of 7 using bracket notation
programming["difficulty"] = 7;
console.log(programming.difficulty); //7

// 3. Remove the jokes key from the programming object using the delete keyword
delete programming.jokes;
console.log(programming); //jokes key is removed

// 4. Add a new key called isFun with a value of true using dot notation
programming.isFun = true;
console.log(programming.isFun); //true

// 5. Use map() to iterate through the languages array and log the index and value (without template literals)
programming.languages.map(function(language, index) {
    console.log(index + " - " + language);
});
// Output:
// 0 - JavaScript
// 1 - Python
// 2 - Ruby
// 3 - Go
