// // var c = 300
// let a = 500

// if (true) {
//     let a = 15
//     const b = 20
//     var c = 30

//     console.log("INNER ", a);


// }
 

// console.log(a);
// // console.log(b);
// // console.log(c);

function one() {
    const username = "nikunj"

    function two() {
        const website = "youtube.com/nikunj"
        console.log(username);
        
    }
    // console.log(website);

    two()
    
}
// one()


if (true) {
    const username = "nikunj"
    if (username === "nikunj") {
        const website = " youtube.com/nikunj"
       // console.log(username + website);
        
    }
    // console.log(website);
    
    
}
// console.log(username); 



// +++++++++++++++++++++++++++++++++++++ INTRESTING ++++++++++++++++++++++++++++++++++++++++

console.log(addone(5));
 

function addone(num) {
    return num + 1
}
addone(5)

const addTwo = function (num) {
    return num + 2
}
