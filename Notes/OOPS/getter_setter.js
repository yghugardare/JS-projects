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

