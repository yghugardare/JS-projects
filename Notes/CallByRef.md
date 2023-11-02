## var vs let vs const

- Variables in JS can be used in 3 ways - 

1. var ⇒ old js , it can be re-declared and reassigned
all var have no block scope{ }
var name = “yash”;
var name = “12ram”;  //redeclared
2. let ⇒new JS , it can be reassigned but not redeclared
All let have block scope
let name  = “yash”;
name = “ram”;  //resassigned
3. const ⇒ it cannot be reassigned as well as reclared
const PI = 3.1423;
PI = “4”;  //error

- All primitive data types(like number,string,boolean,null,bigint,symbol,undefuned) in JS are stored in stack.

- All non-primitive data types(like Objects,Map,Set,Arrays) in JS are stored in heap

![image](https://github.com/yghugardare/JS-projects/assets/117991996/91c914a8-e13d-4929-ae3a-4d0a14503cb3)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5b575490-8250-4b46-8f0e-2f41d0afe315/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/46ef82e5-dafb-4f74-b3bc-a146c63d62b4/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/583a5942-b7d7-40b7-8b90-6c3f8aa8330d/Untitled.png)

