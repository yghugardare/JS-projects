# OOPS-3 in JS
composition vs inheritance , types of inheritance, design principles and patterns

## SOME TECHNICAL TERMS - 
### 1) Modular or Modularity:

**Meaning in Simple Terms:**
Modularity is like building with Lego blocks. Instead of creating one massive structure, you break it down into smaller, self-contained pieces (modules). Each module has a specific function and can be combined with others to create the complete structure.

**Need in Fullstack Development:**
In fullstack development, modularity makes code more organized and maintainable. It allows developers to work on individual features or components without affecting the entire system. This makes it easier to understand, update, and troubleshoot code.

---

### 2) Flexible:

**Meaning in Simple Terms:**
Flexibility is the ability to adapt or bend without breaking. In a flexible system, you can make changes or additions easily without causing major disruptions.

**Need in Fullstack Development:**
Fullstack development often involves evolving requirements. A flexible codebase allows developers to make changes efficiently. It ensures that the application can adapt to new features, technologies, or updates without causing extensive rework.

---

### 3) Robust:

**Meaning in Simple Terms:**
Robustness means the ability to withstand and recover from errors or unexpected situations. A robust system continues to function well even when faced with challenges.

**Need in Fullstack Development:**
In fullstack development, robust code ensures that applications don't crash easily and can recover from errors gracefully. This is crucial for providing a positive user experience and preventing catastrophic failures.

---

### 4) Verbose:

**Meaning in Simple Terms:**
Verbose means using more words or code than necessary. It often implies excess or unnecessary complexity.

**Need in Fullstack Development:**
In fullstack development, verbosity can lead to code that is harder to read and understand. Writing concise and clear code is important for collaboration and maintenance.

---

### 5) Scalable:

**Meaning in Simple Terms:**
Scalability is the ability of a system to handle growth or increased demand without sacrificing performance. It's like building a highway that can handle more traffic as the number of vehicles increases.

**Need in Fullstack Development:**
Scalable applications can accommodate more users, data, or features without becoming slow or unreliable. It ensures that as the application grows, it can still provide a responsive and efficient experience to users.

---

### 6) Versatile:

**Meaning in Simple Terms:**
Versatility refers to the ability of something to perform various tasks or adapt to different situations. A versatile tool, for example, can be used in many different ways.

**Need in Fullstack Development:**
In fullstack development, versatility is valuable because it allows developers or components to serve multiple purposes. A versatile codebase can be reused in different parts of an application or even in different projects. It promotes efficiency, reduces redundancy, and enhances the overall flexibility of the development process.

---

## Types of Inheritance 
1. **Single inheritance**: A class can inherit from only one parent class. 
2. **Multiple inheritance**: A class can inherit characteristics from more than two classes.JavaScript doesn't support multiple inheritance directly, but you can achieve a form of it using a mix-in pattern or through composition.
3. **Multilevel inheriance**:In multilevel inheritance, a class inherits from another class, and then a third class inherits from the second class.
4. **Hierarchial inheritance**: In hierarchical inheritance, multiple classes inherit from a single superclass.
5. **Hybrid inheritance**:Hybrid inheritance is a combination of different types of inheritance in a single program.

## Composition in JS
- Composition in JavaScript is a design principle where objects are combined to create more complex objects. Instead of relying on inheritance (where one object inherits from another), composition involves building objects by assembling or composing them from simpler components
- Composition involves creating objects by combining smaller, more specialized objects, known as components
- Composition models relationships between objects as "HAS-A" rather than "IS-A." An object has other objects as its parts or components
- inheritance forms a single chain of classes, leading to potential issues like the Fragile Base Class Problem.
- It can be less modular, as changes to a base class may impact all subclasses
**Example -** Let's consider a different example involving a backend scenario with a PaymentProcessor class and an EmailNotifier class. We want to create an OrderProcessor class that combines the functionalities of both PaymentProcessor and EmailNotifier through composition.
- Solves MULTIPLE INHERITANCE Issue
```js
class PaymentProcessor {
  processPayment(orderObj) {
    console.log(`Processing payment for order ${orderObj.id}`);
  }
}
class EmailNotifier {
  sendEmailConfirmation(orderObj) {
    console.log(`Sending email confirmation for order ${orderObj.id}`);
  }
}
// Single class inheriting from both parent classes
// class OrderProcessor extends PaymentProcessor , EmailNotifier {
//     // Not possible in JS
//     // ERROR- Classes can only extend a single class
// }
//Solution - Composition
class OrderProcessor {
  constructor() {
    //creating objects by combining smaller, 
    // more specialized objects, known as components
    this.paymentProcessor = new PaymentProcessor();
    this.emailNotifier = new EmailNotifier();
  }
  processOrder(order) {
    this.paymentProcessor.processPayment(order);
    this.emailNotifier.sendEmailConfirmation(order);
    console.log(`Order ID #${order.id} with amount ${order.amount} processed successfully`);
  }
}
let processor = new OrderProcessor();
let sampleOrder = {id:'HX69',amount:3000};
processor.processOrder(sampleOrder);
/* OUTPUT-
Processing payment for order HX69
Sending email confirmation for order HX69
Order ID #HX69 with amount 3000 processed successfully
*/
```
## Design Principles
Design principles are fundamental concepts and rules that guide the process of designing software. These principles provide a foundation for making decisions about the structure, organization, and behavior of the code. Adhering to design principles promotes good software design and helps in creating robust and understandable systems.

## Design Patterns - 
Design patterns are reusable solutions to common problems that occur during software design. They are guidelines or templates for solving certain types of problems in a way that is proven to be effective and efficient. Design patterns help in creating flexible, maintainable, and scalable software.

### Singleton Pattern in JavaScript (Backend Perspective):
**Explanation:**
The Singleton pattern ensures that a class has only one instance and provides a global point of access to that instance. It is useful when exactly one object is needed to coordinate actions across the system.

**Example (Backend):**
Consider a `DatabaseConnection` class where you want to ensure that there is only one connection to the database throughout your application.

```javascript
class DatabaseConnection {
    constructor(connectionString) {
        this.connectionString = connectionString;
        this.connected = false;
    }

    connect() {
        if (!this.connected) {
            console.log(`Connected to database: ${this.connectionString}`);
            this.connected = true;
        } else {
            console.log('Already connected to the database');
        }
    }
}

// Singleton implementation
const singletonDatabaseConnection = (function () {
    let instance;

    function createInstance(connectionString) {
        return new DatabaseConnection(connectionString);
    }

    return {
        getInstance: function (connectionString) {
            if (!instance) {
                instance = createInstance(connectionString);
            }
            return instance;
        },
    };
})();

// Using the Singleton DatabaseConnection
const dbConnection1 = singletonDatabaseConnection.getInstance('mongodb://localhost:27017/mydb');
dbConnection1.connect(); // Output: Connected to database: mongodb://localhost:27017/mydb

const dbConnection2 = singletonDatabaseConnection.getInstance('mysql://localhost:3306/mydb');
dbConnection2.connect(); // Output: Already connected to the database
```

In this example, the Singleton pattern ensures that there is only one instance of `DatabaseConnection`, preventing multiple connections to the database.

### Factory Pattern in JavaScript (Backend Perspective):

**Explanation:**
The Factory pattern provides an interface for creating instances of a class but allows subclasses to alter the type of objects that will be created. It is useful when you want to delegate the responsibility of instantiating objects to a factory class.

**Example (Backend):**
Consider a `Report` class where you have different types of reports, such as `PDFReport` and `CSVReport`. You can use a factory to create instances of these reports based on the desired type.

```javascript
// Report interface
class Report {
    generate() {
        throw new Error('generate method must be implemented by subclasses');
    }
}

// PDFReport subclass
class PDFReport extends Report {
    generate() {
        console.log('Generating PDF report');
    }
}

// CSVReport subclass
class CSVReport extends Report {
    generate() {
        console.log('Generating CSV report');
    }
}

// ReportFactory for creating different types of reports
class ReportFactory {
    // factory function- that returns object
    createReport(type) {
        switch (type) {
            case 'PDF':
                return new PDFReport();
            case 'CSV':
                return new CSVReport();
            default:
                throw new Error('Invalid report type');
        }
    }
}

// Using the ReportFactory to create reports
const reportFactory = new ReportFactory();

const pdfReport = reportFactory.createReport('PDF');
pdfReport.generate(); // Output: Generating PDF report

const csvReport = reportFactory.createReport('CSV');
csvReport.generate(); // Output: Generating CSV report
```

In this example, the Factory pattern allows the creation of different types of reports (`PDFReport` and `CSVReport`) through a common interface (`Report`). The factory class (`ReportFactory`) is responsible for creating instances based on the specified type.

### Observer Pattern in JavaScript (Backend Perspective):

**Explanation:**
The Observer pattern is a behavioral design pattern where an object, known as the subject, maintains a list of its dependents, called observers, that are notified of any changes in the subject's state. It is useful for building loosely coupled systems where changes in one part of the system trigger actions in other parts.

Certainly! Let's consider a different example involving a backend scenario where multiple components need to be notified when new data is added to a data repository. In this example, we'll create an `DataRepository` class that acts as a subject, and various `DataObserver` classes will be notified when new data is added.

```javascript
// Observer interface
class DataObserver {
    update(data) {
        throw new Error('update method must be implemented by subclasses');
    }
}

// DataRepository subject
class DataRepository {
    constructor() {
        this.observers = [];
        this.data = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    addData(newData) {
        this.data.push(newData);
        this.notifyObservers(newData);
    }

    notifyObservers(newData) {
        this.observers.forEach(observer => observer.update(newData));
    }
}

// Concrete observer classes
class EmailNotifier extends DataObserver {
    update(data) {
        console.log(`Email Notification: New data added - ${data}`);
    }
}

class Logger extends DataObserver {
    update(data) {
        console.log(`Logging: New data added - ${data}`);
    }
}

// Using the Observer pattern
const dataRepository = new DataRepository();

const emailNotifier = new EmailNotifier();
const logger = new Logger();

dataRepository.addObserver(emailNotifier);
dataRepository.addObserver(logger);

// Simulating adding new data
dataRepository.addData('Record 1');
// Output:
// Email Notification: New data added - Record 1
// Logging: New data added - Record 1

dataRepository.addData('Record 2');
// Output:
// Email Notification: New data added - Record 2
// Logging: New data added - Record 2
```

In this example:

- The `DataRepository` maintains a list of observers and notifies them when new data is added.
- `EmailNotifier` and `Logger` are concrete observer classes that define their specific behavior when notified.
- Adding data to the `DataRepository` triggers notifications to all observers.

This example demonstrates how the Observer pattern can be used in a backend context to enable multiple components to react to changes in a central subject, such as the addition of new data to a repository.

### Decorator Pattern in JavaScript (Backend Perspective):

**Explanation:**
The Decorator pattern is a structural design pattern that allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class. It is useful for extending the functionalities of classes in a flexible and reusable way.

**Example (Backend):**
Consider a scenario where you have a basic `DatabaseService` class, and you want to add encryption and logging functionalities to it dynamically.

```javascript
// Base DatabaseService class
class DatabaseService {
    query(sql) {
        console.log(`Executing SQL query: ${sql}`);
        // Business logic for executing the query
    }
}

// Decorator for adding encryption to DatabaseService
class EncryptionDecorator {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }

    query(sql) {
        // Additional behavior (encryption) before executing the query
        console.log('Encrypting the query');
        this.databaseService.query(sql);
    }
}

// Decorator for adding logging to DatabaseService
class LoggingDecorator {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }

    query(sql) {
        // Additional behavior (logging) before executing the query
        console.log('Logging the query');
        this.databaseService.query(sql);
    }
}

// Using the Decorator pattern
const basicDatabaseService = new DatabaseService();
const encryptedDatabaseService = new EncryptionDecorator(basicDatabaseService);
const loggedAndEncryptedDatabaseService = new LoggingDecorator(encryptedDatabaseService);

// Simulating executing queries with different functionalities
basicDatabaseService.query('SELECT * FROM users');
// Output: Executing SQL query: SELECT * FROM users

encryptedDatabaseService.query('INSERT INTO orders VALUES (1, "Product", 100.00)');
// Output:
// Encrypting the query
// Executing SQL query: INSERT INTO orders VALUES (1, "Product", 100.00)

loggedAndEncryptedDatabaseService.query('UPDATE products SET price = 120.00 WHERE id = 1');
// Output:
// Logging the query
// Encrypting the query
// Executing SQL query: UPDATE products SET price = 120.00 WHERE id = 1
```

In this example, decorators (`EncryptionDecorator` and `LoggingDecorator`) dynamically add functionality to the `DatabaseService` without modifying its core implementation.

### Module Pattern in JavaScript (Backend Perspective):

**Explanation:**
The Module pattern is a design pattern used for creating self-contained and independent modules in JavaScript. It helps in encapsulating private variables and methods, exposing only the necessary functionalities. This pattern is particularly useful for organizing and structuring code in a modular way.

**Example (Backend):**
Consider a backend application where you have a module for handling user authentication with private and public methods.

```javascript
// UserAuthenticationModule using the Module pattern
const UserAuthenticationModule = (function () {
    // Private variables and methods
    let loggedInUsers = [];

    function isLoggedIn(username) {
        return loggedInUsers.includes(username);
    }

    // Public methods exposed in the module
    return {
        login: function (username) {
            if (!isLoggedIn(username)) {
                loggedInUsers.push(username);
                console.log(`${username} logged in successfully`);
            } else {
                console.log(`${username} is already logged in`);
            }
        },
        logout: function (username) {
            if (isLoggedIn(username)) {
                loggedInUsers = loggedInUsers.filter(user => user !== username);
                console.log(`${username} logged out`);
            } else {
                console.log(`${username} is not logged in`);
            }
        },
    };
})();

// Using the UserAuthenticationModule
UserAuthenticationModule.login('john_doe');
// Output: john_doe logged in successfully

UserAuthenticationModule.login('john_doe');
// Output: john_doe is already logged in

UserAuthenticationModule.logout('john_doe');
// Output: john_doe logged out

UserAuthenticationModule.logout('john_doe');
// Output: john_doe is not logged in
```

In this example, the `UserAuthenticationModule` encapsulates private variables (`loggedInUsers`) and exposes