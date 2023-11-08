# Spread vs Rest operator
## Spread operator
- The spread operator, denoted by `...`, is a feature in JavaScript that allows you to expand an iterable (e.g., an array) or object into its individual elements. 
- It is used for copying elements or properties from one iterable or object to another. 
- It simplifies operations involving the composition or manipulation of data structures.

## Rest operator
- The rest operator, denoted by ..., is a feature in JavaScript that allows you to represent an indefinite number of function arguments as an array. 
- It is used in function parameter lists to collect any number of function arguments into a single array. 
- The rest operator makes functions more flexible by allowing them to work with variable numbers of arguments.

## The difference -
The main difference between the spread operator and the rest operator in JavaScript is in how they are used and where they appear in code.

1. **Spread Operator (`...`)**

   - Used to split or spread elements of an iterable (e.g., an array) or properties of an object.
   - Appears outside the function parameter list, in array literals, object literals, or function calls.

   Example:

   ```javascript
   // Spreading elements of an array
   const arr1 = [1, 2, 3];
   const arr2 = [4, 5, 6];
   const combinedArray = [...arr1, ...arr2]; // Spreading elements into a new array

   // Spreading properties of an object
   const obj1 = { a: 1, b: 2 };
   const obj2 = { b: 3, c: 4 };
   const combinedObject = { ...obj1, ...obj2 }; // Spreading properties into a new object

   // Function call with spread operator
   const numbers = [1, 2, 3, 4, 5];
   const maxNumber = Math.max(...numbers); // Spreading elements as arguments
   ```

2. **Rest Operator (`...`)**

   - Used to collect an indefinite number of function arguments into an array.
   - Appears within the function parameter list and is used to represent multiple function arguments as an array.

   Example:

   ```javascript
   function sum(...numbers) {
     let total = 0;
     for (let number of numbers) {
       total += number;
     }
     return total;
   }

   const result = sum(1, 2, 3, 4, 5); // Collecting arguments into an array
   ```

In summary, the spread operator is used to spread elements of an iterable or properties of an object, while the rest operator is used to collect multiple function arguments into an array. Their usage and placement in code are different, but they both involve the `...` syntax.