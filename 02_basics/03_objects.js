//  singleton
// Object.create
 

// object literal

const mySym = Symbol("key1")

const jsUser = {
    name: "nikk",
    "full name": "Nikunj Goswami",
    [mySym] : "mykey1",
    age: 18,
    location:"india",
    email:"nikk1833@gmail.com",
    IsLoggedIn : false,
    LastLoginDays: ["monday", "saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])


jsUser.email = "nikk@chatgpt.com"
// Object.freeze(jsUser)

jsUser.email = "nikk@chatmicrosoft.com"
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello JS user");
}
jsUser.greetingTwo = function () {
    console.log(`Hello JS user ${this.name}`);
}

console.log(jsUser.greeting()); // function reference
console.log(jsUser.greetingTwo()); // function reference
// jsUser.greeting();            // function call
