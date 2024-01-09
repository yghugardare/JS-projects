# OOPS-1 In JS
basic object, constructor functions, prototypes , protypes based inheritance and chaining

## javascript and classes

- javascript is a protype based language
- es6 introduced class feature, which serves as syntactic sugar over existing prototype based inheritance mechanism
- under the hood its protype based
- IN OOP, object is collection of properties and methods
- why use oop? - Code organized and maintainable , Code reuse and helps model real world things

## Object and Object literal -> literally object

- Object literals are a concise way to create objects in JavaScript. They consist of comma-separated key-value pairs enclosed in curly braces {}.
- objects are a fundamental data type that allows you to store and organize data using key-value pairs.
- Objects can contain not only data (properties) but also functions (methods).

```js
const user = {
  name: "Om",
  age: 25,
  email: "om@g.com",
  isLogedIn() {
    return `User ${this.name} is Logged In`;
  },
  isSubscribed: function () {
    console.log(`${this.name} is Subscribed`);
  },
};
```

## this keyword - current context

- console.log(this) // node ? {} , browser? window

## constructor function and `new` keyword

- Constructor functions are special functions in JavaScript that are used to create and initialize objects. They serve as blueprints for creating multiple objects with similar properties and methods.
- Constructor functions allow you to add properties and methods to objects during their creation.
- The `new` keyword is used to create instances of objects from constructor functions. It allocates memory for the object, sets up a reference to the prototype, and calls the constructor function to initialize the object.
- new keyword prevents overriding of values , as it helps in creating a new instances of an object

```js
function User(id, username, email) {
  this.id = id;
  this.username = username;
  this.email = email;
  // method
  this.displayUserInfo = function () {
    console.log(`User ${this.username} (${this.email}) has ID ${this.id}`);
  };
}
// create instances of objects from constructor function
let u1 = new User("001", "OM", "om@yahoo.com");
u1.displayUserInfo();
console.log(u1.email);
// new instance , different from u1
let u2 = new User("69", "gia", "gia@gmail");
u2.displayUserInfo();
```

## Protypal behaviour of JS -
-  In JS everything is object, Function,Array,String
- In JavaScript, each object has an internal property called `[[Prototype]]`, which is a reference to another object called its prototype. When you try to access a property or method on an object, JavaScript first checks if that property or method exists on the object itself. If it doesn't find it, it looks up the prototype chain by following the `[[Prototype]]` reference.

- This process continues until the property or method is found or until the end of the chain is reached (where the prototype is null). This chain of objects linked by their `[[Prototype]]` references is called the prototype chain
Array -> Object -> null
String -> Object -> null
Function -> Object -> null

## Prototypes and Prototype based inheritance

1. What is `prototype` ?

- property of constructor functions.
- used to define properties and methods that will be inherited by objects created using the constructor.
```js
let name = "   yash   "
console.log("string Length ",name.length)//10
String.prototype.trueLength = function(){
    return this.trim().length;
}
console.log("strings true length ",name.trueLength())//4
```

2. Prototype based inheritance -
JavaScript uses prototype-based inheritance rather than class-based inheritance. Objects inherit directly from other objects, and this leads to a flexible and dynamic system.

TYPES - 
###  `__proto__` (old way)
- accessor property that allows you to get or set the prototype of an object
- It is part of the object itself and represents its immediate prototype.
- While widely used, it's considered somewhat outdated, and its use is discouraged in favor of `Object.create()` or `Object.setPrototypeOf().`
```js
let userProtype = {
    getUserInfo : function(){
        console.log(`User Info : ${this.username}, ${this.email}`);
    }
};
let adminUser = {
    username :"admin",
    email:"admin@xyz.com",
    getRole(){
        console.log(`Admin Role is ${this.role}`)
    },
    __proto__:userProtype
}
//User Info : admin, admin@xyz.com
adminUser.getUserInfo()
```
### `Object.setPrototypeOf(child,parent)` or `Object.create()`
- The Object.setPrototypeOf() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.
```js
let teacherAdmin = {
    role : 'Teacher',
}
Object.setPrototypeOf(teacherAdmin,adminUser)
// Admin Role is Teacher
teacherAdmin.getRole()
```
- Object.create(prototype) to create object, through construct function's object instance
```js
function UserLMS(id,username,email){
    this.id = id;
    this.username= username;
    this.email = email;
    // method
    this.displayUserInfo = function(){
        console.log(`User ${this.username} (${this.email}) has ID ${this.id}`);
    }
}
function Teacher(id,username,email,role){
    // call used to set reference of attributes of UserLMS
    UserLMS.call(this,id,username,email);
    this.role=role;
}
// to inherit
Teacher.prototype = Object.create(UserLMS.prototype);
Teacher.prototype.getRole=function(){
    console.log(`Teachers Role is ${this.role}`)
}
let t1 = new Teacher("hd244","yash","yg@gmail","Comp teacher")
t1.getRole()
t1.displayUserInfo()
//Teachers Role is Comp teacher
// User yash (yg@gmail) has ID hd244
```
## Factory functions - 
- A factory function is a function that returns an object.
- It allows us to create objects based on a pattern or recipe defined within the function.
```js
function makeColor(r, g, b) {
  const color = {
    r,
    g,
    b,
    rgb() {
      const { r, g, b } = this;
      return `rgb(${r}, ${g}, ${b})`;
    },
    // Other methods...
  };

  return color;
}
```
