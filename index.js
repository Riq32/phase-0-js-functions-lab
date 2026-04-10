// Function 1: Calculate 10% tax on a given amount
function calculateTax(amount) {
  return amount * 0.10;
}
 
// Function 2: Convert a string to uppercase
function convertToUpperCase(text) {
  return text.toUpperCase();
}
 
// Function 3: Return the larger of two numbers
function findMaximum(num1, num2) {
  return num1 >= num2 ? num1 : num2;
}
 
// Function 4: Check if a string is a palindrome
function isPalindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}
 
// Function 5: Calculate price after applying a discount
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discount = originalPrice * (discountPercentage / 100);
  return originalPrice - discount;
}


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };