function sayMyName() {
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("K");
}

// sayMyName();

function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

const result = addTwoNumbers(18, 45);
// console.log("Result:", result);

function loginUserMessage(username) {
    if (!username) {
        return "Please enter a username";
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("nikk"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1) {
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "nikk",
    price: 400
};

function handleObject(anyObject) {
    console.log(
        `Username is ${anyObject.username} and price is ${anyObject.price}`
    );
}

// handleObject(user);

handleObject({
    username: "sam",
    price: 500
});

const myNewArray = [200, 400, 500, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400]));
