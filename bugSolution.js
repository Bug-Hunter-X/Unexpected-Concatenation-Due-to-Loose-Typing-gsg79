function foo(a, b) {
  // Type checking before performing addition
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Inputs must be numbers';
  }
  return a + b; // Numerical addition
}

console.log(foo(1, '2')); // Output: Error: Inputs must be numbers
console.log(foo(1, 2)); // Output: 3
console.log(foo(1, parseInt('2'))); // Output: 3