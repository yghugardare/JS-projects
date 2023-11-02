# Execution context in JS and call stack
![image](https://github.com/yghugardare/JS-projects/assets/117991996/ed01bb1f-77c2-4f77-b739-befaa58d33ce)
## How does JS execute code?
- JS code is executed in two phases - 
1. Memory Creation Phase 
2. Execution Phase
Note - First, the global execution is set , in which the code is allocated to 'this'. 'this' varies from environment to environment. If its running in browser then 'this' represents 'window' , if running in servers side like nodeJS then it represents an empty object {}.

![image](https://github.com/yghugardare/JS-projects/assets/117991996/e2d87966-8a29-4c3c-a623-71daeffa1e5f)

![image](https://github.com/yghugardare/JS-projects/assets/117991996/ccb84cb8-6631-4eff-9298-0378e628c891)
![image](https://github.com/yghugardare/JS-projects/assets/117991996/b147b51e-e55f-4210-bedc-a6ea5014aeb4)

- What is Function Call Stack?
![image](https://github.com/yghugardare/JS-projects/assets/117991996/81e1a34a-f2a2-4c75-bc3e-f1e622cadd3b)


- What is an execution context?
Execution context in JavaScript refers to the environment in which your JavaScript code is executed. It consists of two main components:

1. **Global Execution Context**: This is the outermost context. It represents the global scope of your code. Variables and functions declared outside of any functions are part of the global context.

2. **Function Execution Context**: Each time a function is called, a new function execution context is created. This context includes the function's local variables, parameters, and inner functions.

Execution context manages the scope and lifetime of variables and functions. It keeps track of the call stack, which is a stack of function contexts, allowing JavaScript to know where to return after a function call is complete.

In summary, execution context is essential for understanding variable scope, function execution, and the order in which code is executed in JavaScript. It plays a crucial role in how JavaScript manages the flow of your program.


