//%   SECTION 1 
//%   LOGIC


//$  VAR, LET and CONST

//# var: Can be redeclared and reassigned.
//# let: Can be reassigned but not redeclared in the same scope.
//# const: Cannot be reassigned or redeclared; must be initialized at the time of declaration.

//# var has (Function Scope): Ignores block boundaries and is accessible throughout the function.
//# let & const has (Block Scope): Respect block boundaries, limiting their access within {} blocks.

const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"                       //# treated as a var

let city;                                    //! undefined

function scopeExample() {
    if (true) {
        var globalVar = "I'm a var variable";  //# function-scoped
        let localLet = "I'm a let variable";   //# block-scoped
    }

    console.log(globalVar);                  //# Works: "I'm a var variable"
    console.log(localLet);                   //% Error: localLet is not defined
}
scopeExample();



"use strict"   //# treat all js code as newer version


//# alert(3+3)     
//# fails, bcz we are using node js not browser

console.log(3
    + 3
)





//$    NULL and UNDEFINED

let state = null
let isLoggedIN;
console.log(typeof state)          //# object
console.log(typeof isLoggedIN)     //# undefined

//# null: standalone value (null is intentionally used to represent "no value.")
//# undefined: value is not assigned (typically the default value for uninitialized variables or missing properties.)


let name = "Vikas"
let name_ = Number(name)
console.log(typeof name_)         //# number
console.log(name_)                //# NaN
let s = String(name)
console.log(s)                    //# Vikas

//#   NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number.
//#   typeof of NaN will return a Number.

isNaN('1');          // false, '1' converts to a number (1)
isNaN(true);         // false, true converts to 1
isNaN(false);        // false, false converts to 0
isNaN(undefined);    // true

//'  "33": number 33
//'  "Vikas": NaN
//'  "null": 0
//'  "undefined": NaN


console.log("1" + 2 + 2)          // 122
console.log(1 + 2 + "2")          // 32


{
    array.flat(depth);
    const arr = [1, [2, [3, [4]]]];
    console.log(arr.flat(2));
    // Output: [1, 2, 3, [4]]
}



//$  TYPES (SYMBOL, ARRAY, OBJECT, FUNCTION)

const mySymbol = Symbol("1")     //# Symbol
const array = ["Vikas", 43]      //# Array
let obj = {                      //# Object
    key: "value",
    [mySymbol]: "mysy"           //' symbol is used in []
}
const fn = function () {         //# function
    console.log("fn")
}
console.log(typeof array)           //' object
console.log(typeof obj)             //' Object
console.log(typeof fn)              //' function
console.log(typeof obj["key"])      //' string 
console.log(typeof obj[mySymbol])   //' string
console.log(obj[mySymbol]);         //' Correct way to access a symbol property
console.log(obj.mySymbol);          //% Undefined or error, depending on context
console.log(Object.keys(obj))       //' get all keys
console.log(Object.values(obj))     //' get all values





//$   STACK vs HEAP allocation

//@     Primitive Data Types: Number, String, Boolean, Undefined, Null, Symbol, BigInt. 
//@     Primitive data types goes to STACK

//@     Non-Primitive Data Types: Object, Array, Function, Date, RegExp, Map, Set, WeakMap, WeakSet.
//@     Non primitive data types goes to HEAP

let a = 10
let b = a
b = 20
//' a = 10, b = 20    STACK (copy)
//# a and b are primitive values, so when b is assigned a's value, a copy is made. Modifying b doesn’t affect a, so a remains 10 while b becomes 20.

let user = {
    email: "a@e"
}
let newUser = user
newUser.email = "a@f"
//' user: "a@f", newUser: "a@f"    HEAP (reference)
//# user is a reference to an object stored in the heap. When newUser is assigned user, it points to the same object in the heap. Modifying newUser.email also changes user.email since both refer to the same object.





//$   TRIM, REPLACE

let str = "      foo %20% bar     "
console.log(str.trim())                     //'     "foo %20% bar"
console.log(str.replace("%20%", "-"))       //'     "      foo - bar     "

//$   DATE

let myDate = new Date()
const formattedDate = myDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
});
console.log(formattedDate)       //' 13/11/2024
console.log(typeof myDate)       //' object





//$   ARRAY

let arr = [0, 1, 2, 3, 4, 5];
arr.push(6);                        //' Adds 6 at the end
arr.pop();                          //' Removes the last element (6)
console.log(arr);                   //' [0, 1, 2, 3, 4]
console.log(arr.slice(1, 3));       //' [1, 2] -> Slice returns a new array.
console.log(arr.splice(1, 3));      //' [1, 2, 3] -> Splice removes and returns elements from original array.
console.log(arr);                   //' [0, 4, 5] -> Remaining elements after splice

let even = [0, 2, 4];
let odd = [1, 3, 5];
let all = [...even, ...odd];        //' Combining even and odd arrays into a new one.
console.log(all);                   //' [0, 2, 4, 1, 3, 5]





//$  FUNCTION
//' In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.
//' arrow function doesnot have access to this keyword

function calculate(a, b, ...c) {
    return c
}
console.log(calculate(1, 2, 3, 4, 5))

function verify(user) {
    if (user === undefined) {  // !user
        return
    } else {
        console.log(user)
    }
}
console.log(verify())

function One() {
    const a = 10

    function Two() {
        const b = 20
        console.log(a)
    }
    // console.log(b)      error
    Two()
}
One()


console.log(add(4, 1))
function add(a, b) {
    return a + b
}
// console.log(sub(4,1))        error
const sub = function (a, b) {
    return a - b
}

const getUser = () => ({ username: "vikas" });


// Immediately Invoked Function Expression (preventing pollution of the global namespace)
(function fn(url) {
    console.log("DB connected", url);
})('www');           // semicolon needed to execute below code



if (null) { }
if (arr.length === 0) { }
if (Object.keys(obj).length === 0) { }
// FALSE: 0, -0, "", null, undefined, NaN, 0n
// TRUE: [], {}, "0", "false", " ", funcion(){}

// false == 0           // true
// false == ''          // true
// 0 == ''              // true



const mp = new Map()
mp.set("1", "hello")
mp.set("2", "world")
for (const [key, val] of mp) {    // for of
    console.log(key, val)
}

for (const key in obj) {          // for in
    console.log(obj[key])
}

arr.forEach((item, index) => { })   // for each
let filtered = arr.filter((num) => num > 2)
let increased = arr.map((num) => num + 10)

const arrObj = [
    { user: "vikas", pass: 123, salary: 100000 },
    { user: "rohit", pass: 456, salary: 400000 }
]
arrObj.forEach((item) => {
    console.log(item.user, item.pass)
})
let totalSalary = arrObj.reduce((accumulator, item) => {
    return accumulator + item.salary
}, 0)
console.log(totalSalary)








// DOM

document.getElementById("firstHeading").innerHTML("myName")
document.getElementsByClassName("heading")
document.getElementById("title").getAttribute("id")
document.getElementById("title").setAttribute("class", "heading")   // always overwrite
document.querySelector("#title")
document.querySelector(".heading")
document.querySelectorAll("h1").forEach((h) => {
    h.style.backgroundColor('green')
})
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

});


const div = document.createElement('div');
console.log(div);

div.className = "main";
div.id = Math.round(Math.random() * 10 + 1);
div.setAttribute("title", "generated title");
div.style.backgroundColor = "green";
div.style.padding = "12px";

const addText = document.createTextNode("Chai aur code");
div.appendChild(addText);

document.body.appendChild(div);



setInterval(() => {
    console.log(new Date().toLocaleTimeString()); // Logs the current time every second
}, 1000);

setTimeout(() => {
    console.log('Say my name')
}, 5000);


let time; // Declare time variable outside of the setInterval function
const startTimer = () => {
    // Start the timer if it's not already running
    if (!time) {
        time = setInterval(() => {
            console.log(new Date().toLocaleTimeString()); // Logs the current time every second
        }, 1000);
    }
};

const stopTimer = () => {
    clearInterval(time); // Stops the interval
    time = null; // Reset the time variable to allow restarting
};

document.getElementById('start').addEventListener('click', startTimer); // Start button
document.getElementById('stop').addEventListener('click', stopTimer); // Stop button









// EVENTS

document.getElementById('owl-image').addEventListener('click', () => {
    alert("Owl is clicked");
});

// When the third parameter is set to true, the event listener is set to the capturing phase. In this phase, events are handled from the outermost element to the target element.
// This does not prevent bubbling; it simply changes the order in which event listeners are triggered if there are multiple listeners in the event chain.
document.getElementById('owl-image').addEventListener('click', () => {
    alert("Owl is clicked");
}, true); // Set to true to enable capturing (prevent bubbling)


// e.stopPropagation() stops the event from bubbling up to parent elements entirely, meaning no parent event listeners will trigger after the event handler with stopPropagation() is executed.
document.getElementById('owl-image').addEventListener('click', (e) => {
    alert("Owl is clicked");
    e.stopPropagation()
});

// e.preventDefault(): This stops the form from performing its default action, which is to reload the page on submission.
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents the form from submitting the traditional way
    alert("submitted");
});


// e: event
// e.target: gives the target from which this event occurs
document.querySelector('#images').addEventListener('click', function (e) {
    console.log(e.target.parentNode); // Logs the parent of the clicked element
    if (e.target.tagName === 'IMG') { // Checks if the clicked element is an <img>
        e.target.parentNode.remove(); // Removes the parent element if the target is an <img>
    }
});






// DEFAULT JAVASCRIPT

// 1. Synchronous
// 2. Single-Threaded

// execution context: one line at a time

// blocking code: block the flow of program (read file sync)
// non blocking code: do not execution (read file async)



// PROMISES
// In JavaScript, promises are a way to handle asynchronous operations. They represent a value that may be available now, or in the future, or never. A promise can be in one of three states:
// Pending: The initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.

// .then(): Takes two arguments: a callback for when the promise is fulfilled and another callback for when the promise is rejected (optional).
// .catch(): Takes a callback for when the promise is rejected.
// .finally(): Takes a callback that runs regardless of the promise's outcome (fulfilled or rejected).

fetch('https://google.com').then().catch().finally()

const promise = new Promise((resolve, reject) => {
    const user = { username: "Vikas", age: 30 };
    resolve(user); // Resolve the promise with the user object
    // reject("Failed to fetch user data.");
});

promise
    .then((user) => {
        console.log("User data received:", user); // Log the entire user object
        return user.username; // Return the username for the next .then()
    })
    .then((username) => {
        console.log("Username:", username); // Log the username
    })
    .catch((error) => {
        console.error("Error:", error); // Log any error that occurs
    })
    .finally(() => {
        console.log("Execution completed."); // This runs regardless of the outcome
    });

// If you do not include the .catch() and .finally() methods 
// With Successful Resolution: The promise chain will work as expected, and you'll see the results from the .then() methods.
// With Rejection: Without a .catch() to handle the error, you'll see an "Unhandled Promise Rejection" warning, and the code in the subsequent .then() blocks will not execute.


const promisetwo = new Promise((resolve, reject) => {
    const user = { username: "Vikas", age: 30 };
    resolve(user); // Resolve the promise with the user object
    // reject("Failed to fetch user data.");
});

const fetchUserData = async () => {
    try {
        const user = await promisetwo; // Wait for the promise to resolve
        console.log("User data received:", user); // Log the entire user object
    } catch (error) {
        console.error("Error:", error); // Log any error that occurs
    } finally {
        console.log("Execution completed."); // This runs regardless of the outcome
    }
}
fetchUserData();





// API

// then catch
fetch('https://jsonplaceholder.typicode.com/users') // Note the correct URL
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data); // Log the data
    })
    .catch((err) => {
        console.log(err); // Log any errors
    });

// async await
const fetchuser = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err)
    }
}
fetchuser()



// call and this 
// Define the SetUsername function
function SetUsername(username) {
    this.username = username; // Set the username property on the object
    console.log("SetUsername called");
}

// Define the createUser constructor function
function createUser(username, email, password) {
    SetUsername.call(this, username); // Use call to bind `this` to the createUser instance
    this.email = email;
    this.password = password;
}

// Create a new user instance
const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);






// Closures
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

function init() {
    var name = "Mozilla"; // name is a local variable created by init function

    function displayName() { // displayName() is the inner function that forms the closure
        console.log(name); // use variable declared in the parent function
    }

    displayName();
}
init();

// Lexical Scoping:
// JavaScript follows lexical scoping, meaning that functions are executed using the variable scope in which they were defined, not where they are called.
// Here, the displayName function has access to the name variable declared in its parent function init because it was defined inside init.

// Closure:
// When displayName is defined, it "closes over" the variable name from its surrounding scope (init function).
// Even though init has finished executing by the time displayName is called, displayName still has access to the name variable. This is a closure in JavaScript.



function makeFunc() {
    const name = "Mozilla"; // `name` is a variable in the lexical scope of `makeFunc`

    function displayName() { // `displayName` is an inner function, forming a closure
        console.log(name); // it has access to the `name` variable in `makeFunc`
    }

    return displayName; // returns the `displayName` function without executing it
}

const myFunc = makeFunc(); // `myFunc` now holds a reference to `displayName`
myFunc(); // calls `displayName`, which logs "Mozilla"

// How It Works
// Closure Formation:

// When displayName is defined inside makeFunc, it forms a closure over the name variable. This means displayName will remember the value of name, even after makeFunc has finished execution.
// Returning displayName:

// The makeFunc function returns the displayName function itself (not the result of calling it), so myFunc holds a reference to displayName.
// Calling myFunc:

// When you call myFunc(), it executes displayName, which has access to the name variable from makeFunc's scope, logging "Mozilla".



function clickHandler(color) {
    return function () {
        document.body.style.backgroundColor = color; // Set background color
    };
}

// Attach click events to elements with specific IDs
document.getElementById('orange').onclick = clickHandler("orange");
document.getElementById('green').onclick = clickHandler("green");



// Code 1: Basic use of setTimeout with 'var'
function x() {
    var i = 1; // Variable 'i' is declared and initialized
    setTimeout(function () {
        console.log(i); // Logs 1 after 3 seconds because 'i' is accessible in the closure
        console.log("Hello JavaScript"); // Logs "Hello JavaScript" after 3 seconds
    }, 3000); // Executes the callback after 3 seconds
}

x(); // Output after 3 seconds: 1, Hello JavaScript

// Code 2: Using 'var' inside a loop with setTimeout
function X() {
    for (var i = 1; i < 5; i++) {
        setTimeout(function () {
            console.log(i); // Logs 5, 5, 5, 5 because 'var' is function-scoped, 
            // and the loop updates the same 'i' variable for all iterations
        }, 1000); // Executes the callback after 1 second
    }
    console.log("Hello JavaScript"); // Logs immediately as it is outside the setTimeout
}

X(); // Output:
// Hello JavaScript (immediate)
// (After 1 second) 5, 5, 5, 5

// Code 3: Using 'let' inside a loop with setTimeout
function X_Let() {
    for (let i = 1; i < 5; i++) {
        setTimeout(function () {
            console.log(i); // Logs 1, 2, 3, 4 because 'let' creates a new block-scoped variable for each iteration
        }, 1000); // Executes the callback after 1 second
    }
    console.log("Hello JavaScript"); // Logs immediately as it is outside the setTimeout
}

X_Let(); // Output:
// Hello JavaScript (immediate)
// (After 1 second) 1, 2, 3, 4

// Code 4: Using a closure to fix 'var' scoping inside the loop
function x() {
    for (var i = 1; i < 5; i++) {
        function close(x) {
            // 'close' creates a new scope that stores the current value of 'i' as 'x'
            setTimeout(function () {
                console.log(x); // Logs 1, 2, 3, 4 because each 'x' is a unique copy of 'i'
            }, x * 1000); // Delay increases with 'x' (e.g., 1 second for 1, 2 seconds for 2, etc.)
        }
        close(i); // Passes the current value of 'i' to the closure
    }
    console.log("JavaScript"); // Logs immediately as it is outside the setTimeout
}

x(); // Output:
// JavaScript (immediate)
// (After 1 second) 1
// (After 2 seconds) 2
// (After 3 seconds) 3
// (After 4 seconds) 4
