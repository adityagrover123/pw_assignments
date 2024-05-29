// function totalcal(items) {
//     let total = 0;
//     items.forEach(function(item) {
//         total += item.price;
//     });
    
//     return total;
// }
// const orderItems = [
//     { name: 'Item 1', price: 15},
//     { name: 'Item 2', price: 16 },
//     { name: 'Item 3', price: 17 }
// ];

// const totalPrice = totalcal(orderItems);
// console.log('total Price ', totalPrice);








// function printrandom() {
//     setInterval(function() {
//         const rand = Math.random();
//         console.log(rand);
//     }, 2000);
// }
// printrandom();








// function addTaxToExpenses(expenses) {
//     const taxRate = 0.10;
    
//     return expenses.map(expense => {
//         const tax = expense.amount * taxRate;
//         return {
//             ...expense,
//             tax: tax
//         };
//     });
// }

// const monthly_Expenses = [
//     { amount: 1000, category: 'Rent' },
//     { amount: 200, category: 'Groceries' },
//     { amount: 150, category: 'Utilities' }
// ];

// const expensesWithTax = addTaxToExpenses(monthly_Expenses);
// console.log(expensesWithTax);





// // function filterGroceries(expenses) {
// //     return expenses.filter(expense => expense.category === 'Groceries');
// // }

// // // Example usage:
// // const monthlyExpenses = [
// //     { amount: 1000, category: 'Rent' },
// //     { amount: 200, category: 'Groceries' },
// //     { amount: 150, category: 'Utilities' },
// //     { amount: 50, category: 'Groceries' }
// // ];

// // const groceriesExpenses = filterGroceries(monthlyExpenses);
// // console.log(groceriesExpenses);
// function calculateTotalExpenses(expenses) {
//     return expenses.reduce((total, expense) => total + expense.amount, 0);
// }
// const monthlyExpenses = [
//     { amount: 1000, category: 'Rent' },
//     { amount: 200, category: 'Groceries' },
//     { amount: 150, category: 'Utilities' },
//     { amount: 50, category: 'Groceries' }
// ];
// const totalExpenses = calculateTotalExpenses(monthlyExpenses);
// console.log('Total Expenses:', totalExpenses);







// function categorize(expense) {
//     return expense.amount > 100 ? "High Expense" : "Low Expense";
// }
// const expenses = [
//     { amount: 50, category: 'Food' },
//     { amount: 150, category: 'Clothing' },
//     { amount: 80, category: 'Entertainment' },
//     { amount: 200, category: 'Transportation' }
// ];

// const categorizedExpenses = expenses.map(expense => categorize(expense));
// console.log(categorizedExpenses);


const originalNumbers = [2, 5, 8, 10, 3];

originalNumbers.forEach((value, index, array) => {
    array[index] = value * 2;
});
console.log(originalNumbers); 



const evenNumbers = [];

originalNumbers.forEach(value => {
    if (value % 2 === 0) {
        evenNumbers.push(value);
    }
});

console.log(evenNumbers); 
