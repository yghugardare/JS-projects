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
  getUsername() {
    return `Username:${this.username}`;
  }
}
let user1 = new User(1, "Tom", "tom@gmail.com");
user1.displayUserInfo();
user1.getId();
let user1Name = user1.getUsername();
console.log(user1Name);
let user2 = new User(2, "gol", "lol@gmail");
console.log("user2 instance", user2 instanceof User);
// inheritance
class UserLMS {
  constructor(id, username, email) {
    this.id = id;
    this.username = username;
    this.email = email;
  }
  // method
  displayUserInfo = function () {
    console.log(`User ${this.username} (${this.email}) has ID ${this.id}`);
  };
  getUsername() {
    console.log("User", this.username);
  }
}
console.log("user2 instance", user2 instanceof UserLMS);
// connecting subclass(child) to superclass
// internally forming prototype based chain
class Teacher extends UserLMS {
  constructor(id, username, email, role) {
    // call constructor of super class(parent)
    super(id, username, email);
    this.role = role;
  }
  displayUserInfo() {
    console.log("Role is ", this.role);
  }
  getRole() {
    console.log(`Teachers Role is ${this.role}`);
  }
}
// to inherit
let t1 = new Teacher("t1", "ki", "k@12", "bio");
t1.displayUserInfo();
t1.getUsername();
// Superclass representing a generic user
class User1 {
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
class AdminUser extends User1 {
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
    console.log("Managing users...");
  }
}

// Create instances of the subclasses
let regularUser = new User1("john_doe", "john@example.com");
let adminUser = new AdminUser("admin1", "admin@example.com", "Full Access");

// Accessing methods from the superclass
regularUser.displayUserInfo(); // Output: Username: john_doe, Email: john@example.com
adminUser.displayUserInfo(); // Output: Username: admin1, Email: admin@example.com, Admin Level: Full Access

// Accessing subclass-specific method
adminUser.manageUsers(); // Output: Managing users...

console.log("adminUser over User1", adminUser instanceof User1);

// polymorphism
class Calculator {
  add(a, b, c) {
    if (arguments.length === 2) {
      console.log(a + b);
    } else if (arguments.length === 3) {
      console.log(a + b + c);
    }
  }
}
const calc = new Calculator();
calc.add(2, 3); // Output: 5
calc.add(4, 5, 6); // Output: 15
// method overriding
class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    console.log(this.name, " makes ANIMAL sound");
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  makeSound() {
    console.log(this.name, " makes bark sound");
  }
}
class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  makeSound() {
    console.log(this.name, " makes meow sound");
  }
}
let dog = new Dog("Bobby");
dog.makeSound(); // Bobby makes bark sound
let cat = new Cat("Whiskers");
cat.makeSound(); // Whiskers makes meow sound</s>
// other example
class DataSource {
  constructor(name) {
    this.name = name;
  }
  connect() {
    console.log(this.name, "connected to backend");
  }
  fetchData() {
    console.log("fetching data from ", this.name);
  }
}
class DataBase extends DataSource {
  constructor(name, connectionURL) {
    super(name);
    this.connectionURL = connectionURL;
  }
  // override connect method
  connect() {
    console.log(
      this.name,
      " connected to backend at ",
      this.connectionURL,
      " URL"
    );
  }
}
class API extends DataSource {
  constructor(name, endpointUrl) {
    super(name);
    this.endpointUrl = endpointUrl;
  }
  // override connect method
  connect() {
    console.log(
      this.name,
      " connected to backend at ",
      this.endpointUrl,
      " API endpoint"
    );
  }
}
let myDB = new DataBase("mongoDb", "https://mongo.port.8000.com");
myDB.connect();
let myApi = new API("OpenAi Api", "https://openai.com/api/1090");
myApi.connect();
myDB.fetchData();
// abstraction
class DataProvider {
  constructor(typeOfProvider) {
    if (new.target === DataProvider) {
      // prevents direct instantiation of abstract class
      throw new TypeError("Cannot create instance of an abstract class!");
    }
    this.typeOfProvider = typeOfProvider;
  }
  // abstract methods
  fetchData() {
    throw new Error("Method 'fetchData' must be implemented.");
  }
  storeData(data) {
    throw new Error("Method 'storeData' must be implemented.");
  }
}
class DataBaseProvider extends DataProvider {
  constructor(dbName) {
    super("database");
    this.dbName = dbName;
  }
  fetchData() {
    console.log(`Fetching data from ${this.typeOfProvider} ${this.dbName}`);
  }
  storeData(data) {
    console.log(
      `Storing data in ${this.typeOfProvider} ${this.dbName} : ${data}`
    );
  }
}
class ApiProvider extends DataProvider {
  constructor(apiKey) {
    super("API");
    this.apiKey = apiKey;
  }
  fetchData() {
    console.log("Fetching Data from", this.typeOfProvider, " at ", this.apiKey);
  }
  storeData(data) {
    console.log(
      `Sending data to ${this.type} at '${this.apiEndpoint}': ${data}.`
    );
  }
}
// let provider = new DataProvider();
// TypeError: Cannot create instance of an abstract class!
let myDbProvider = new DataBaseProvider("mongoDb");
let myApiProvider = new ApiProvider("https://api.jokes.com");
myDbProvider.fetchData();
myDbProvider.storeData("User:John");
myApiProvider.fetchData();
myApiProvider.storeData("Doc.txt");
/* Outputs - 
Fetching data from database mongoDb
Storing data in database mongoDb : User:John  
Fetching Data from API  at  https://api.jokes.com
Sending data to undefined at 'undefined': Doc.txt.
*/
// static
class MathOperation {
  static add(a, b) {
    return a + b;
  }
  static pi = 21;
}
let m = new MathOperation();
// m.add(1,2);
// m.pi; Error
console.log(MathOperation.add(3, 4)); // 7
console.log(MathOperation.pi); // 21
class Counter {
  //shared value for all instances
  static count = 0;
  increment() {
    // this.count++;
    Counter.count++;
  }
}
let c1 = new Counter();
c1.increment();
console.log(Counter.count); // 1
let c2 = new Counter();
c2.increment();
console.log(Counter.count); // 2, thuse value is shared
// encapsulation
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
