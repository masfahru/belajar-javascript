// Whitespaces
// BAD
const userLocation1      =    "New York City, "     +  "NY";
const userLocation2="New York City, "+"NY";
// GOOD
const userLocation3 = "New York City, " + "NY";

// Semicolons
// GOOD
const name1 = "IDN Boarding School";
const name2 = "SMK IDN";
// OR
const name1 = "IDN Boarding School"
const name2 = "SMK IDN"
// It works but not recommended
const name1 = "IDN Boarding School"; const name2 = "SMK IDN";
// BAD (inconsistent)
const name1 = "IDN Boarding School"; const name2 = "SMK IDN"

// Parentheses
// GOOD
if (4 < 5) {
    console.log("4 is less than 5.")
}

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// BAD (but you can fix them using Code Formatter)
if(4 < 5){console.log("4 is less than 5.")}

for(let i = 0;i<=10;i++){
console.log(i)
}

// Indentation
// GOOD
for (let i = 0; i <= 10; i++) {
    if (i <= 5) {
        console.log(i)
    } else {
        console.log(i*2)
    }
}

// BAD
for (let i = 0; i <= 10; i++) {
if (i <= 5) {
console.log(i)
}
}