// 1st ques 
let marks = 75;
if (marks >= 90) {
  console.log("A Grade");
} else if (marks >= 70 && marks < 90) {
  console.log("B Grade");
} else if (marks >= 50 && marks < 70) {
  console.log("C Grade");
} else if (marks < 50) {
  console.log("F Grade");
} 

//2nd ques//
let  num1 = 10;
let num2 = 15;
function generateNumbers(start, end) {
    let result = [];
    for (let i = start + 1; i < end; i++) {
        result.push(i);
    }
    return result;
}
const numbersInRange = generateNumbers(num1, num2);
console.log(numbersInRange);
// ques 3
function checkNumberType(number) {
    const result = number > 0? "positive": number < 0 ? "negative": "zero";
    return `The number is ${result}.`;
}
console.log(checkNumberType(0));

// ques 3



let a = 5, b = 10;

// Using comma operator in a single line
let result = (a++, b++, a + b);
console.log(result);
console.log(a);       
console.log(b);       
// the comma operator in JavaScript is a straightforward tool for chaining together expressions within a single statement, evaluating them in order, and returning the result of the last expression.





// Ques 4
function login(username, password) 
{
    const correctUsername = "admin";
    const correctPassword = "12345";
    if (username ==correctUsername && password == correctPassword) {
        console.log("Login successful");
    } else {
        console.log("Invalid credentials");
    }
}






// Ques 5
function calculateProcessingFee(paymentMethod,pfee) {
    switch (paymentMethod) {
        case "credit":
            processingFee = pfee*1.02; 
            break;
        case "debit":
            processingFee =pfee*1.05 
            break;
        case "paypal":
            processingFee = pfee*1.03;  
            break;
        default:
            console.log("Invalid payment method");
            return;  
    }
    console.log(`Processing fee for ${paymentMethod}: ${processingFee}`);
}
calculateProcessingFee("credit",500);   
// calculateProcessingFee("debit");    
// calculateProcessingFee("paypal"); 
// calculateProcessingFee("cash"); 




// ques 6

function determineWeather(currentTemperature) {
    const weatherCondition = currentTemperature > 30 ? "Hot" : "Moderate";
    console.log(`Weather condition: ${weatherCondition}`);
}
determineWeather(25);   
determineWeather(35);   
determineWeather(30);   
