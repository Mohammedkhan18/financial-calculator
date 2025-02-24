#!/usr/bin/env node
/*
 * financialCalculator.js
 * Description: CLI Financial Calculator.
 *
 * This tool accepts a list of numbers representing transaction amounts.
 * Positive numbers represent income; negative numbers represent expenses.
 *
 * The tool calculates and displays:
 *   - Total number of transactions.
 *   - Total sum of transactions.
 *   - Average transaction value.
 *   - Total income (sum of positive transactions).
 *   - Total expenses (sum of negative transactions).
 *   - Net balance (income + expenses).
 *
 * Output is displayed in a table using console.table().
 *
 * NOTE: Some sections (marked with TODO) require you to implement the familiar code.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

// Import functions from this week's arrays homework.
const { addUpArrayElements } = require('./src/arrays-03.js'); 


// Read command-line arguments (skipping "node" and the script path). Put the rest into an args array
const args = process.argv.slice(2);

// Convert arguments to numbers in a new transactions array.
// Throw away anything not a number
const transactions = args.map(function (arg) {
  return parseFloat(arg);
}).filter(function (num) {
  return !isNaN(num);
});


if (transactions.length === 0) {
  console.error("Usage: node financialCalculator.js <transaction1> <transaction2> ...");
  process.exit(1);
}

const totalTransactions = transactions.length;
const totalSum = function addUpArrayElements(transactions) {
  let totalSum = 0;

  transactions.reduce(function (num) {
    totalSum += num;
  })
  return totalSum;


}
const averageTransaction = totalSum / totalTransactions;
const  totalIncome = transactions.filter(t => t > 0).reduce((sum, t) => sum + t, 0);
const totalExpenses = transactions.filter(t => t < 0).reduce((sum, t) => sum + t, 0);
const netBalance = totalIncome + totalExpenses;

// - totalTransactions: Total number of transactions (use array length).
// - totalSum: Sum of all transactions (use addUpArrayElements function).
// - averageTransaction: Average transaction value (calculate using totalSum and totalTransactions).
// - totalIncome: Sum of all positive transactions.
// - totalExpenses: Sum of all negative transactions.
// - netBalance: Total of totalIncome and totalExpenses.


// Create an array of fun fact rows. Each row is a two-element array: [Fact, Value].
const funFacts = [
  ["Total Transactions", totalTransactions],
  ["Total Sum", totalSum],
  ["Average Transaction", averageTransaction],
  ["Total Income", totalIncome],
  ["Total Expenses", totalExpenses],
  ["Net Balance", netBalance],
];

// Output the fun facts using console.table().
console.table(funFacts);
