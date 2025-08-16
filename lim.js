var name = "John Ericson P. Lim";
console.log("Name:", name);

let age = "19";  
console.log("Age (string):", age);

const PI = 3.1416;
console.log("PI:", PI);

let isStudent = (parseInt(age) < 25);
console.log("Is Student:", isStudent);

let person = {
    name: name,
    age: age,
    studentStatus: isStudent,
    address: {
        street: "S.I.R, Phase 1",
        city: "Davao City",
        country: "Philippines"
    }
};
console.log("Person Object:", person);

let colors = ["red", "blue", "green", "yellow", "green"];
console.log("Colors:", colors);

let words = ["apple", "banana", "orange", "grape"];
let transformedWords = [];

for (let i = 0; i < words.length; i++) {
    let reversed = "";

    for (let j = words[i].length - 1; j >= 0; j--) {
        reversed += words[i][j];
    }

    transformedWords.push(reversed.toUpperCase());
}

console.log("Transformed Words:", transformedWords);

let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];
let filteredNumbers = [];
let count = 0;

for (let num of numbers) {
    if (num % 2 === 0 && num > 20) {
        filteredNumbers.push(num);
        count++;
    }
}

console.log(`Found ${count} numbers: ${filteredNumbers.join(", ")}`);