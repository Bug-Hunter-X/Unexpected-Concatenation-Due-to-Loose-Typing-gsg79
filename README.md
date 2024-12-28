# Unexpected Concatenation in JavaScript

This example demonstrates a common error in JavaScript stemming from its dynamic typing system.  When adding a number and a string, JavaScript performs string concatenation instead of numerical addition, resulting in an unexpected output.

## Bug
The `foo` function intends to add two numbers. However, due to the loose typing, passing a number and a string as input leads to unexpected concatenation.

## Solution
The solution involves explicit type checking or conversion to ensure both inputs are numbers before performing addition.  This guarantees the correct numerical addition operation.