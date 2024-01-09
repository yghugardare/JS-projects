// call 
function setUserName(username){
    // complex db calls
    this.userName = username;
    console.log("called!");
}
// function createUser(userName,email,password){
//     setUserName(userName);

//     this.email = email;
//     this.password = password;
// }
const u1= new createUser("yash","y@g.com","123");
console.log(u1);
// createUser { email: 'y@g.com', password: '123' }
// username is not being set
// this is because setUserName is not being called but only refernece is given
// setUserName is called but after its called it is removed from stack of Exectution Context
// because of which its reference is discared and we cannot see it in create User Function
/* To fix the issue we can use apply or call method of Function object */


// what call does is it holds  reference of setUserName
function createUser(userName,email,password){
    setUserName.call(this,userName);

    this.email = email;
    this.password = password;
} 
// called!
// createUser { userName: 'yash', email: 'y@g.com', password: '123' }

