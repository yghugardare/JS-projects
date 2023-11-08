# Destructuring in JS

Destructuring in JavaScript is a feature that allows you to extract values from arrays and objects and assign them to variables in a more concise and readable way. It simplifies the process of unpacking values from data structures like arrays and objects. There are three common types of destructuring in JavaScript: array destructuring, object destructuring, and function parameter destructuring.

1. **Array Destructuring:**

   Array destructuring allows you to extract values from an array and assign them to variables with a matching pattern.

   ```javascript
   const numbers = [1, 2, 3, 4, 5];

   // Using array destructuring to assign values to variables
   const [first, second, , fourth] = numbers;

   console.log(first);  // 1
   console.log(second); // 2
   console.log(fourth); // 4
   ```

2. **Object Destructuring:**

   Object destructuring lets you extract properties from an object and assign them to variables with the same property names.

   ```javascript
   const person = { firstName: 'John', lastName: 'Doe', age: 30 };

   // Using object destructuring to assign properties to variables
   const { firstName, lastName, age } = person;

   console.log(firstName); // John
   console.log(lastName);  // Doe
   console.log(age);       // 30
   ```

3. **Function Parameter Destructuring:**

   You can destructure function parameters, which allows you to pass an object to a function and destructure it directly within the function's parameter list.

   ```javascript
   function printFullName({ firstName, lastName }) {
     console.log(`${firstName} ${lastName}`);
   }

   const person = { firstName: 'Alice', lastName: 'Johnson' };
   printFullName(person); // Alice Johnson
   ```

These examples demonstrate how destructuring can make your code more concise and readable, especially when dealing with complex data structures. Destructuring is widely used in JavaScript for a variety of tasks, such as working with data received from APIs, extracting values from function parameters, and simplifying code that involves arrays and objects.