// Objects, Object Literal and methods
const user  = {
    name: 'Om',
    age: 25,
    email: "om@g.com",
    isLogedIn(){
        return `User ${this.name} is Logged In`;
    },
    isSubscribed : function(){
        console.log(`${this.name} is Subscribed`);
    }
}
// Constructor functions - 
function User(id,username,email){
    this.id = id;
    this.username= username;
    this.email = email;
    // method
    this.displayUserInfo = function(){
        console.log(`User ${this.username} (${this.email}) has ID ${this.id}`);
    }
}
// create instances of objects from constructor function
let u1 = new User("001","OM","om@yahoo.com");
u1.displayUserInfo();
console.log(u1.email)
// new instance , different from u1
let u2 = new User("69","gia","gia@gmail")
u2.displayUserInfo()
// A new object is created: The new keyword initiates the creation of a new JavaScript object.

// A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

// The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

// The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

// prototype
let name = "   yash   "
console.log("string Length ",name.length)//10
String.prototype.trueLength = function(){
    return this.trim().length;
}
console.log("strings true length ",name.trueLength())//4
// protype based inheritance 
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
let teacherAdmin = {
    role : 'Teacher',
}
Object.setPrototypeOf(teacherAdmin,adminUser)
// Admin Role is Teacher
teacherAdmin.getRole()
// Object.create
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