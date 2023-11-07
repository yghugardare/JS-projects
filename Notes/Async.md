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

## promises in js
- A Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 

- 3 states of promises
    1. pending
    2. fulfilled
    3. rejected

![image](https://github.com/yghugardare/JS-projects/assets/117991996/7298e3ec-39a3-4f6e-98a0-860c3f26cd11)

```javascript
const promiseOne = new Promise(function(resolve,reject){
// do any async task like db calls
setTimeout(()=>{
   resolve('Task completed');
},2000);
resolve();
});

promiseOne.then(function(){
    console.log("Promise One Resolved");
}).catch((err)=>{
console.error(`Error: ${err}`);
})

```
- Data Consumption using a promise- 

```javascript
let promiseTwo = new Promise(function(resolve,reject){
    //do some data consuming operation here
    setTimeout(() => {
        // resolve(data)
        resolve({userName:"yash",email:"yg@gmail.com"});
    },1000);
});
promiseTwo.then(function(dataObj){
    console.log("Data received from server : ",dataObj);
})

```
- promise when there is some error, plus chaining concept in promise
```javascript
let promiseThree = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = false;
    if(!error){
        resolve({username:"yash",email:"yg@gmail.com"});
    }
    else{
        reject("Something went wrong");
    }
    },1000)
});
// lets say i wanted to store the username to a variable
let userName = promiseThree
.then(function(dataObj){
    console.log("Data received from server : ",dataObj);
    console.log(dataObj.username)
    return dataObj.username;
})
.catch(function(err){
    console.error(`Error: ${err}`)
})
// this will give me a promise instead of a name
console.log("user name is",userName) 
```
- we use chaining to finaaly do this
```javascript
promiseThree
.then(function(dataObj){
    console.log("Data received from server : ",dataObj);
    console.log(dataObj.username)
    return dataObj.username;
})
.then((userName)=>{
    console.log(`User Name is ${userName}`);
})
.catch(function(err){
    console.error(`Error: ${err}`)
})
.finally(function(){
    console.log("Finally block, the promise has beeen either resolved or rejected")
})

```
- then = exectutes when promise when it is fullfilled
- catch = executes when promise fails/rejected
- finally = always execute no matter what happens, when promise is settled(either resolved or rejected)

- async and await are syntactical sugar built over promises , making the code even more readable
 and easier to understand.
- 'async' => defines a asynchronous function, which internally stores a promise.
- 'await' => used to pause the execution of the async function until a promise is fulfilled, and it unwraps the value from the fulfilled promise.
- Error handling can be done using try/catch blocks around the await statement or by chaining a catch block to handle any rejected promise.
```javascript
let promiseFour = new Promise(function(resolve,reject){
            // async db call
            setTimeout(()=>{
                let error = false;
                if(!error){
                    resolve({username:"yash",mail:"ygh@gmail.com"});
                }else{
                    reject({name:"gadbad",code:6969});
                }
            },5000)
        });
        async function consumePromiseFour(){
            try{
                let result = await promiseFour;
                console.log("result : ",result);
                console.log(result.username);
                
            }catch(error){
                console.log(`Error ${error.code}: ${error.name}`);
            }
        }
        // call the async function
        consumePromiseFour();
```
- similarly instead of chaning we can add mulltiple async await as well
```javascript
    async function consumePromiseFour(){
            try{
                let result = await promiseFour;
                console.log("result : ",result);
                let userName = result.username;
                // this will work
                console.log("his name is ",userName)
                
            }catch(error){
                console.log(`Error ${error.code}: ${error.name}`);
            }
        }
        // call the async function
        consumePromiseFour();
```
## fetch in js
- method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.

- A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

- fetch stores its callbacks in priority queue or microtask queue.
It gives fetch more priority than other callbacks in the task queue.Refer diagram - 

![image](https://github.com/yghugardare/JS-projects/assets/117991996/46dd4711-1e26-40b3-af2d-3c43cb66378c)

- working of fetch=>
![image](https://github.com/yghugardare/JS-projects/assets/117991996/331117c7-7cd7-4054-9367-e8c7dd9cb8f6)

-  The `fetch` function returns a promise, and the resolved value is a `Response` object.
- The `Response` object contains information such as the status code, headers, and body.
- However, the response body is not automatically parsed and is initially a readable stream.
- To parse the response body, you can use the `json()` method provided by the `Response` object.
- The `json()` method also returns a promise, which needs to be resolved to obtain the actual data.

### Using then-catch
```javascript
  fetch('<https://example.com/api/data1>')
  .then(function(response){
    return response.json()
    })
    .then(function(data){
        console.log(data)
        // returns a promise
        return fetch('<https://example.com/api/data2>');
    })
    .then(function(response2){
        return response2.json();
    })
    .then(function(data){
        console.log(data);
    })
   .catch(err=>{
    console.log(err);
   });
```

### using async -await
```javascript
async function fetchData(){
    try{
        let response = await fetch('<https://example.com/api/data1>');
        let data = await response.json();
        console.log(data);
        let response2 = await fetch('<https://example.com/api/data2>');
        let data2 = await response2.json();
        console.log(data2)

    }catch(err){
        console.log("Error: ",err);
    }
}
// calling the async function
fetchData();
```