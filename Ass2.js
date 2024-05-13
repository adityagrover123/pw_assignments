
// Ques 1
const square = (number) => number * number;
let num = 5;
let squaredValue = square(num);
console.log(`The square of ${num} is: ${squaredValue}`);
// ques 2
const ages = [19, 29, 19, 44, 20, 34, 44, 44, 24];
const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);

// Find median age
ages.sort((a, b) => a - b);
const medianAge = ages.length % 2 === 0
    ? (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2
    : ages[Math.floor(ages.length / 2)];

// Find average age
const sumAges = ages.reduce((acc, age) => acc + age, 0);
const averageAge = sumAges / ages.length;

// Find range of ages
const ageRange = maxAge - minAge;

// Compare (min - average) and (max - average)
const diffMinAvg = Math.abs(minAge - averageAge);
const diffMaxAvg = Math.abs(maxAge - averageAge);

console.log("Minimum Age:", minAge);
console.log("Maximum Age:", maxAge);
console.log("Median Age:", medianAge);
console.log("Average Age:", averageAge);
console.log("Age Range:", ageRange);
console.log("Difference (Min - Average):", diffMinAvg);
console.log("Difference (Max - Average):", diffMaxAvg);






// 3 ques

const contactMap = new Map();
contactMap.set("aditya", { age: 22, email: "adityagrover320@gmail.com", location: "meerut" });
contactMap.set("Bob", { age: 25, email: "bob@example.com", location: "Los Angeles" });
contactMap.set("Charlie", { age: 35, email: "charlie@example.com", location: "Chicago" })
function getContactDetails(name) {
    if (contactMap.has(name)) {
        return contactMap.get(name);
    } else {
        return "Contact not found";
    }
}
console.log(getContactDetails("John"));
console.log(getContactDetails("bob"));




// ques 4
const person1 = {
    name: "Aditya",
    age: 22
};
const person2 = {
    name: "simran",
    age: 25
};
function introduce() {
    console.log(`Hello, I'm ${this.name}, and I amm ${this.age} years old.`);

}
introduce.call(person1); 
introduce.call(person2);

// ques 5
const numbersSet = new Set([1, 2, 3, 2, 4, 5, 1]);
const squareMap = new Map();
numbersSet.forEach(num => {
    squareMap.set(num, square(num));
});
squareMap.forEach((value, key) => {
    console.log(`number: ${key}, square: ${value}`);
});







// ques 6
function displayInfo(name, role) {
    console.log(`Name: ${name}, Role: ${role}`);
}
displayInfo.call(null, "Alice", "Developer");
const info = ["Bob", "Manager"];
displayInfo.apply(null, info);
function greet() {
    console.log(`Greetings from ${this}`);
}
const boundGreet = greet.bind("JavaScript");
boundGreet();








// ques 7
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    calculate: function(operation, a, b) {
        switch (operation) {
            case 'add':
                return this.add(a, b);
            case 'subtract':
                return this.subtract(a, b);
            case 'multiply':
                return this.multiply(a, b);
            default:
                return NaN; 
        }
    }
};
const sum = calculator.calculate.call(calculator, 'add', 5, 3);
console.log("Sum:", sum); 
const product = calculator.calculate.apply(calculator, ['multiply', 4, 2]);
console.log("Product:", product); 
const discountCalculator = {
    discountPercentage: 10,
    applyDiscount: function(price) {
        return price - (price * (this.discountPercentage / 100));
    }
};
const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);
const originalPrice = 100;
const discountedPrice = calculateDiscount(originalPrice);
console.log("Discounted Price:", discountedPrice); 

