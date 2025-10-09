const prenom = "theopims";
let age = "18";
let aimeJS = "☝️";
console.log(`prenom: ${prenom} age: ${age} aimeJS : ${aimeJS}`);

let fruits = [
    "apple",
    "banana",
    "strawberry",
];
console.log(fruits);

fruits.push("mango");
console.log(fruits);

console.log(fruits.length);

fruits.forEach(fruit => {
    console.log(fruit.toUpperCase());
})

for (let fruit of fruits) {
    console.log(`INDEX ${fruits.indexOf(fruit)} : ${fruit}`);
}

let fruitsLongs = fruits.filter((fruit) => fruit.length >= 6)
console.log(fruitsLongs);