# OOPS-2 in JS
mordern ES6 clases and 4 pillars of oops
## ES6 clases , constructor and methods
- ES6 classes provide a cleaner and more structured syntax for creating objects and handling inheritance. While they introduce a class-like syntax, it's essential to understand that JavaScript's underlying prototypal nature remains unchanged.
- Clases are just syntactic sugars, internally they work prototype based only
- class is a blueprint or template for creating objects.
- constructor is a special method used for creating and initializing objects within a class. It is typically defined within a class and is invoked automatically when you create a new instance of that class using the new keyword. The primary purpose of a constructor is to set up the initial state (properties and values) of an object. **same as constructor function**.
```js
class User {
    constructor(id, username, email) {
        this.id = id;
        this.username = username;
        this.email = email;
        // method
        this.displayUserInfo = function () {
            console.log(`User ${this.username} (${this.email}) has ID ${this.id}`);
        };
    }
    // methods
    getId() {
        console.log(`ID:${this.id}`);
    }
    getUsername(){
        return `Username:${this.username}`
    }
}
let user1 = new User(1,"Tom","tom@gmail.com");
user1.displayUserInfo();
user1.getId();
let user1Name = user1.getUsername()
console.log(user1Name);
let user2 =  new User(2,"gol","lol@gmail")
```
## Inheritance - Pillar of OOP
- Inheritance in JavaScript allows objects to inherit properties and methods from other objects, facilitating code reuse and creating a hierarchy of related objects
- `extends`: The extends keyword is used to create a subclass that inherits from a superclass. It establishes the prototype chain, connecting the subclass prototype to the superclass prototype.
- `super`: The super keyword is used to call the constructor and methods of the superclass. In the constructor of a subclass, super is used to invoke the constructor of the superclass with the necessary arguments.
```js
// Superclass representing a generic user
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    // Method to display user information
    displayUserInfo() {
        console.log(`Username: ${this.username}, Email: ${this.email}`);
    }
}

// Subclass representing an admin user, inheriting from User
class AdminUser extends User {
    constructor(username, email, adminLevel) {
        // Call the superclass constructor using 'super'
        super(username, email);
        this.adminLevel = adminLevel;
    }

    // Override the displayUserInfo method to include admin level
    displayUserInfo() {
        // Call the superclass method using 'super'
        super.displayUserInfo();
        console.log(`Admin Level: ${this.adminLevel}`);
    }

    // Additional method specific to AdminUser
    manageUsers() {
        console.log('Managing users...');
    }
}

// Create instances of the subclasses
let regularUser = new User('john_doe', 'john@example.com');
let adminUser = new AdminUser('admin1', 'admin@example.com', 'Full Access');

// Accessing methods from the superclass
regularUser.displayUserInfo();   // Output: Username: john_doe, Email: john@example.com
adminUser.displayUserInfo();     // Output: Username: admin1, Email: admin@example.com, Admin Level: Full Access

// Accessing subclass-specific method
adminUser.manageUsers();         // Output: Managing users...

```
## IMP QUESTIONS - 
Q1)How is Inheritance Achieved in JavaScript?

Answer: In JavaScript, inheritance is achieved through prototype-based inheritance. Objects have an internal property [[Prototype]] that references another object (its prototype). When a property or method is not found in the object itself, JavaScript looks up the prototype chain.

Q2) Explain the Prototype Chain.

Answer: The prototype chain is a series of objects linked through their [[Prototype]] references. When a property or method is accessed on an object, JavaScript looks for it in the object. If not found, it continues to look up the prototype chain until the property is found or until the end of the chain (where the prototype is null).

Q3)How are ES6 Classes Used for Inheritance?

Answer: ES6 classes provide a cleaner syntax for working with prototypes and inheritance. The extends keyword is used to create a subclass, and the super keyword is used to call the constructor and methods of the superclass.

Q4)Explain the instanceof Operator.

Answer: The instanceof operator in JavaScript is used to test whether an object is an instance of a particular class or constructor function. It checks the object's prototype chain to see if the constructor's prototype is present.

Q5)How Can you Achieve Multiple Inheritance in JavaScript?

Answer: JavaScript doesn't support multiple inheritance directly. However, it can be achieved through a technique called "Mixin" patterns or by using composition, where an object contains instances of other objects.

Q6)Explain the instanceof Operator.

Answer: The `instanceof` operator in JavaScript is used to test whether an object is an instance of a particular class or constructor function. It checks the object's prototype chain to see if the constructor's prototype is present.
Eg-

`childObj instanceOf parentClass` = true

Q7)What is Polymorphism in the Context of Inheritance?

Answer: Polymorphism allows objects of different types to be treated as objects of a common type. In JavaScript, polymorphism is achieved through the ability of objects to share a common interface or method name, allowing them to be used interchangeably.

## Polymorphism in  JS
- Polymorphism is a fundamental principle of object-oriented programming. It stands for "poly" meaning many and "morph" meaning forms.
- Polymorphism allows a variable or an object to take on different forms, i.e., different types. 
- In JavaScript, polymorphism is achieved through method overloading and overriding.
- **Method Overloading** - 
    - Method overloading is the ability to define multiple methods with the same name but different parameters(static polymorphism) or argument types(ad-hoc polymorphism).
    - However, JavaScript does not directly support traditional method overloading as some other programming languages do. 
    - Instead, you can achieve a form of method overloading by checking the number and types of arguments within a function.
    - Problem - 
    - ```js
        class Calculator{
            add (a,b){
                console.log(a+b)
            }
            add (a,b,c){
                console.log(a+b+c)
            }
        }
        const calc=new Calculator()
        calc.add(2,3)  // Output: NaN
        calc.add(4,5,6) // Output: 15
        ```
    - Solution
    - ```js
        class Calculator{
            add(a,b,c){
                if(arguments.length === 2){
                console.log(a+b)
                }else if(arguments.length === 3){
                console.log(a+b+c)
                }
            } 
        }
        const calc=new Calculator()
        calc.add(2,3)  // Output: 5
        calc.add(4,5,6) // Output: 15
        ```
- **Method Overiding**- 
    - Method overriding occurs when a subclass provides a specific implementation for a method that is already defined in its superclass. 
    -  It allows a subclass to provide a specialized version of a method while maintaining a common interface with its superclass.
```js
class DataSource{
  constructor(name){
    this.name = name;
  }
  connect(){
    console.log(this.name,"connected to backend");
  }
  fetchData(){
    console.log("fetching data from ", this.name)
  }
}
class DataBase extends DataSource{
  constructor(name,connectionURL){
    super(name)
    this.connectionURL = connectionURL;
  }
  // override connect method
  connect(){
    console.log(this.name," connected to backend at ",this.connectionURL, " URL");
  }
}
class API extends DataSource{
  constructor(name,endpointUrl){
    super(name);  
    this.endpointUrl = endpointUrl;
  }
  // override connect method
  connect(){
    console.log(this.name," connected to backend at ",this.endpointUrl," API endpoint");
  }
}
let myDB = new DataBase("mongoDb","https://mongo.port.8000.com")
myDB.connect();
let myApi = new API("OpenAi Api","https://openai.com/api/1090");
myApi.connect()
```

## Abstraction in JS
- Abstraction is a concept in object-oriented programming that allows you to hide complex implementation details and only expose the essential features of an object. In JavaScript, abstraction is implemented through abstract classes and methods. An abstract class defines a blueprint for other classes and may contain abstract methods that must be implemented by its subclasses.
- JavaScript doesn't have native support for abstract classes or methods, but you can achieve abstraction through conventions and patterns.
```js
class DataProvider{
  constructor(typeOfProvider){
    if(new.target === DataProvider){
      // prevents direct instantiation of abstract class
      throw new TypeError('Cannot create instance of an abstract class!');
    }
    this.typeOfProvider = typeOfProvider;
  }
  // abstract methods
  fetchData(){
    throw new Error("Method 'fetchData' must be implemented.");
  }
  storeData(data){
    throw new Error("Method 'storeData' must be implemented.")
  }
}
class DataBaseProvider extends DataProvider{
  constructor(dbName){
    super("database");
    this.dbName = dbName;
  }
  fetchData(){
    console.log(`Fetching data from ${this.typeOfProvider} ${this.dbName}`);
  }
  storeData(data){
    console.log(`Storing data in ${this.typeOfProvider} ${this.dbName} : ${data}`);
  }
}
class ApiProvider extends DataProvider{
  constructor(apiKey){
    super("API");
    this.apiKey= apiKey;
  }
  fetchData(){
    console.log('Fetching Data from',this.typeOfProvider," at ",this.apiKey)
  }
  storeData(data){
    console.log(`Sending data to ${this.type} at '${this.apiEndpoint}': ${data}.`);
  }
}
// let provider = new DataProvider();
// TypeError: Cannot create instance of an abstract class!
let myDbProvider = new DataBaseProvider('mongoDb');
let myApiProvider = new ApiProvider('https://api.jokes.com');
myDbProvider.fetchData();
myDbProvider.storeData('User:John');
myApiProvider.fetchData();
myApiProvider.storeData('Doc.txt');
/* Outputs - 
Fetching data from database mongoDb
Storing data in database mongoDb : User:John  
Fetching Data from API  at  https://api.jokes.com
Sending data to undefined at 'undefined': Doc.txt.
*/
```
## `static` keyword in JS
- The static keyword in JavaScript is used to define a static method or property for a class.
-  They can be called directly on the class without the need to create an instance.

**NEED-**

1. **Utility Functions:**
   - Used for class-related utility functions that don't rely on instance-specific data.

2. **Shared Data:**
   - Allows the definition of values shared among all instances of a class.

3. **Avoid Unnecessary Instantiation:**
   - Enables calling functions directly on the class without creating an object instance.

4. **Namespacing:**
   - Provides a way to group related functionalities under the class name.

5. **Performance Efficiency:**
   - Can be more memory-efficient for methods not depending on instance-specific data.

6. **Encapsulation:**
   - Contributes to encapsulation by associating methods and properties with the class level.

7. **Enhanced Readability:**
   - Improves code readability by signaling class-level functionalities.

8. **Global Functions:**
   - Offers a clean way to provide globally accessible functions tied to a specific class.
```js
class MathOperation{
  static add(a,b){return a+b;}
  static pi = 21;
}
let m = new MathOperation()
// m.add(1,2);
// m.pi; Error
console.log(MathOperation.add(3,4)); // 7
console.log(MathOperation.pi); // 21
class Counter{
  //shared value for all instances 
  static count = 0;
  increment(){
    // this.count++;
    Counter.count++;
  }
}
let c1 = new Counter();
c1.increment();
console.log(Counter.count) // 1
let c2 = new Counter();
c2.increment();
console.log(Counter.count) // 2, thuse value is shared
```
## Encapsulation in JS
- Encapsulation is one of the four fundamental Object-Oriented Programming (OOP) principles and involves bundling the data (attributes) and the methods (functions) that operate on the data into a single unit, known as a class.
- **Controlled Access** -  This unit controls the access to its members, allowing some to be hidden from the outside and others to be accessible. 
- JavaScript classes do not explicitly support keywords like public or private to define access levels, but developers can simulate encapsulation through conventions and patterns.
- 1. Private Members - Private members are accessible only within the class, and external code cannot directly access them. Syntax - Use # before variable or method name. Eg- `#password #changePassword(){}`
- 2. Public Members - Public members are accessible from outside the class. No special convention
- **Information Hiding**: Encapsulation hides the internal details of an object and only exposes what is necessary. This helps prevent external code from directly manipulating the internal state of an object.
- **Modularity**: Encapsulation promotes modularity by organizing code into classes. Each class represents a module with its own set of properties and methods, making the code more manageable and maintainable.
- **Flexibility**: Encapsulation allows the internal implementation details of a class to change without affecting the external code that uses the class. This provides flexibility in modifying and improving the implementation while maintaining a stable interface.
- **Code Reusability**:Encapsulation promotes code reusability by encapsulating functionality within classes. Once encapsulated, these classes can be reused in different parts of the application or even in different projects.

## getters and setters - 
- In JavaScript, getters and setters are special methods that allow you to control the access and modification of object properties
-  They provide a way to encapsulate the internal state of an object, allowing you to define custom behavior when reading or writing values. Getters are used for retrieving the value of a property, while setters are used for modifying the value of a property.
- getter -
```js
class BankAccount {
  #balance;
  name;
  constructor(name, balance = 0) {
    this.name = name;
    this.#balance = balance; //private field
  }
  get balance() {
    return this.#balance;
  }
  /**
   * @param {number} amount
   */
  set balance(amount) {
    this.#balance = amount;
  }
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    } else {
      throw new Error("Amount should be gretaer than zero! ");
    }
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
    }
  }
}
class CurrentAccount extends BankAccount {
  #password
  constructor(name, balance,password) {
    super(name, balance);
    this.#password= password;
  }
  #changePassword(value){
    this.#password=value;
  }
  get password(){
    return this.#password;
  }
  takeLoan(amount) {
    console.log(`${this.name}, you have taken a loan of ${amount}.`);
  }
}
const account1 = new CurrentAccount("John", 500,"oki");
account1.deposit(300);
console.log(account1.balance);//800
account1.withdraw(200);
console.log(account1.balance); //600
account1.takeLoan(1000);//John, you have taken a loan of 1000.
// set method
account1.balance = "900";
console.log(account1.balance)
// account1.changePassword("pol") error
console.log(account1.password)

```
- In old JS , _ was used as convention to show private field - 
```js
class User{
    constructor(name, email,password){
        this.name = name;
        this.email=email;
        this.password=password;
    }
    // in class you dont want password
    //to be accessed by objects
    // we use getters and setters
    //getter is a method that returns the value of private variable
    //setter is a method that sets the value for the private variable
    // get/set propertyName, ALWAYS SYNTAX
    get password(){
        return `${this._password.toUpperCase()} yo`;
    }
    set password(val){
        this._password =  val;
    }

}
const u1= new User("han","ha@12","ojapj");
console.log(u1.password);//TypeError: Cannot set property password of #<User> which has only a getter
// Solution -  create a setter
// affter adding a setter , we get another error
// RangeError: Maximum call stack size exceeded 
// Solution-  get and set are having race
// Add this._password in getter and setter
```

## Using Closures to create Private members
In JavaScript, closures can be utilized to create private members within objects or functions. A closure is formed when a function is defined inside another function and has access to the outer function's variables, including its parameters. This allows you to create a sort of "private scope" for certain variables or functions, making them inaccessible from outside the closure.

Here's a simple example illustrating how closures can be used to create private members:

```javascript
function createCounter() {
    let count = 0;  // This variable is private to the createCounter function

    // Inner function (closure) has access to the outer function's variables
    function increment() {
        count++;
        console.log(count);
    }

    return increment;  // Return the inner function
}

// Create a counter using the outer function
const counter = createCounter();

// Call the inner function (closure)
counter();  // Output: 1
counter();  // Output: 2
```

In this example:

1. The `createCounter` function declares a private variable `count` within its scope.
2. It defines an inner function `increment`, which has access to the `count` variable due to the closure.
3. The `createCounter` function returns the `increment` function, exposing only the inner function to the outside world.

As a result, the `count` variable is not directly accessible from outside the `createCounter` function, creating a form of privacy. The inner function `increment` acts as a closure, maintaining access to the private variable even after the outer function has finished executing.

This pattern is commonly used to achieve data encapsulation and create private members in JavaScript objects or modules. Private members help prevent unintended external modifications and provide a level of control over the internal state of objects or functions.