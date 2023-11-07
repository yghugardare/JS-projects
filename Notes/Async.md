# Asynchronous JS

![image](https://github.com/yghugardare/JS-projects/assets/117991996/840f5cb9-a7bc-4814-8846-da9031bd3d5c)

## Blocking vs Non-Blocking code
- Blocking code = Block the flow of program. For eg-Reading file one by one
- Non-blocking code = Does not block the flow of program. For eg- Reading multiple files at once

## async code

![image](https://github.com/yghugardare/JS-projects/assets/117991996/16cb013b-e443-4f06-a943-1fb0f9fd6bbb)

## what is a callback? 
It is a function which is passed as an argument to anaother function
```javascript

const callMe(param){
    console.log("I am called with "+ param);
}
function call(device,func){
    console.log("Call initiated!");
    func(device);
}
call("mobile",callMe);


```